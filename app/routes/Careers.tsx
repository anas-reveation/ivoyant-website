import CareersBanner from '~/components/CareersBanner'
import JoinTeam from '~/components/JoinTeam'
import Post from '~/components/Post'
import WhyJoin from '~/components/WhyJoin'
import { graphcmsClient } from '~/lib/graphcms'
import { useLoaderData } from '@remix-run/react'
import Button from '~/components/Button'
import { Link } from '@remix-run/react'
import { useActionData } from '@remix-run/react'
import { FormInput } from '~/components/FormInput'
import axios from 'axios'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'
import FormButton from '~/components/FormButtom'
import { ActionArgs, DataFunctionArgs, json, redirect } from '@remix-run/node'
import { SelectFormInput } from '~/components/SelectFormInput'
import { GetCareersData } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'
import { useEffect, useRef, useState } from 'react'
import querystring from 'querystring'

import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
  unstable_createFileUploadHandler,
} from '@remix-run/node'

const fileFormatValidator = z
  .object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
  })
  .refine((value) => value.name && value.name.trim() !== '', {
    message: 'Please upload a file.',
  })
  .refine(
    (value) => {
      const allowedFormats = ['.pdf', '.doc', '.docx', '.rtf']
      const fileExtension = value.name
        .substring(value.name.lastIndexOf('.'))
        .toLowerCase()
      return allowedFormats.includes(fileExtension)
    },
    {
      message:
        'Invalid file format. Only .pdf, .doc, .docx, and .rtf are allowed.',
    }
  )

// .transform((value) => value.name)

export const validator = withZod(
  z.object({
    FirstName: z
      .string()
      .min(1, { message: 'First name is required' })
      .refine((value) => value.trim() !== '', {
        message: 'Enter a valid name',
      }),
    Email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
    Skills__c: z.string().min(1, { message: 'Filed name is required' }),
    Exprience__c: z.string().min(1, { message: 'Filed name is required' }),
    City__c: z.string().min(1, { message: 'Filed name is required' }),
    fileUpload: fileFormatValidator,
  })
)

export async function loader() {
  const result = await graphcmsClient.request(GetCareersData)

  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

const fs = require('fs')

export async function action({ request }: ActionArgs) {
  const uploadHandler = composeUploadHandlers(
    async ({ name, data, filename }) => {
      if (name !== 'fileUpload') {
        return undefined
      }
    },
    // parse everything else into memory
    createMemoryUploadHandler()
  )
  const formData = await parseMultipartFormData(request, uploadHandler)
  const newData = await validator.validate(formData)
  const result = Object.fromEntries(formData)

  if (newData.error) {
    // validationError comes from `remix-validated-form`
    return validationError(newData.error)
  }
  const fileUploadfile = formData.get('fileUpload')

  //Access Token
  const querystring = require('querystring')

  async function accessToken() {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }

    try {
      const requestBody = querystring.stringify({
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
        username: `${process.env.USERNAMES}`,
        password: `${process.env.PASSWORD}`,
        grant_type: `${process.env.GRANT_TYPE}`,
      })
      const res = await axios.post(
        `https://login.salesforce.com/services/oauth2/token`,
        requestBody,

        config
      )

      await submitData(
        result,
        res?.data.access_token,
        res?.data.instance_url,

        fileUploadfile
      )
    } catch (err) {
      console.log(err)
    }
  }
  await accessToken()

  return json({ success: true, fileUploadfile })

  // file is a "NodeOnDiskFile" which implements the "File" API
  // ... etc
}

async function submitData(
  formData: any,
  accessToken: any,
  instanceUrl: any,
  fileUploadfile: any
) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(
      `${instanceUrl}/services/data/v57.0/sobjects/Lead`,
      {
        FirstName: `${formData.FirstName}`,
        LastName: '_',
        Email: `${formData.Email}`,
        Skills__c: `${formData.Skills__c}`,
        Exprience__c: `${formData.Exprience__c}`,
        City__c: `${formData.City__c}`,
        Company: '_',
        // `${formData.Company}`,
        LeadSource: 'POST RESUME',
      },

      config
    )

    try {
      // let buffer = Buffer.from(await fileUploadfile.text())
      // console.log(
      //   'data:' + fileUploadfile.type + ';base64,' + buffer.toString('base64')
      // )
      const fileContent = await fileUploadfile.arrayBuffer()
      const buffer = Buffer.from(fileContent)
      const base64Data = buffer.toString('base64')

      await axios
        .post(
          `${instanceUrl}/services/data/v57.0/sobjects/ContentVersion`,
          {
            Title: `${formData.fileUpload._name}`,
            PathOnClient: 'simple',
            ContentLocation: 'S',
            FirstPublishLocationId: `${res.data.id}`,
            VersionData: `${base64Data}`,
          },

          config
        )
        .then(() => {})
        .catch((err) => {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }
}

export default function Careers() {
  const result = useLoaderData<typeof loader>()

  // // Inside your component
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const data = useActionData()

  useEffect(() => {
    if (data?.success === true) {
      setShowSuccessMessage(true)

      const timer = setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [data])

  // Rest of the component code...

  return (
    <div>
      <Helmet>
        <title>
          {result?.data?.careers?.data[0]?.attributes?.CareerSeo?.Title}
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.careers?.data[0]?.attributes?.CareerSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iVoyant" />
        <meta
          property="og:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.careers?.data[0]?.attributes?.CareerSeoe?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <CareersBanner
        Heading={result?.data?.careers?.data[0]?.attributes?.Heading}
        Subheading={result?.data?.careers?.data[0]?.attributes?.Subheading}
        Link1={result?.data?.careers?.data[0]?.attributes?.Link1}
        Link2={result?.data?.careers?.data[0]?.attributes?.Link2}
        LinkText1={result?.data?.careers?.data[0]?.attributes?.LinkText1}
        LinkText2={result?.data?.careers?.data[0]?.attributes?.LinkText2}
        Title1={result?.data?.careers?.data[0]?.attributes?.Title1}
        Title2={result?.data?.careers?.data[0]?.attributes?.Title2}
        Image={
          result.ENV.STRAPI_URL +
          result?.data?.careers?.data[0]?.attributes?.BgImage?.data?.attributes
            ?.url
        }
      />
      <div>
        <h4 className="text-center mt-4 fw-bold text-uppercase">
          {result?.data?.careers?.data[0]?.attributes?.SecondHeading}
        </h4>
      </div>
      <WhyJoin />
      <JoinTeam />
      <div className="container my-5">
        <div className="row gy-4">
          <div className="col-xl-5 col-lg-5 col-md-12 col-12">
            <div className="d-flex flex-column align-items-center">
              <img
                src="./images/Home/post.svg"
                className="img-ht"
                alt="Dream Job"
              />
              <div className="mt-4">
                <h4 className="fw-semibold">Cant Find A Role For you?</h4>
                <p>
                  Upload your details and our recruitment team will Contact You
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-12">
            <ValidatedForm
              validator={validator}
              method="post"
              encType="multipart/form-data"
              resetAfterSubmit
            >
              <h4 className="fw-bold">Prospective Posts</h4>
              <h5 className="my-5">Post Your Resume</h5>
              <div className="row gy-4">
                <div className="col-md-6 col-6">
                  <FormInput
                    name="FirstName"
                    label="Name*"
                    inputClass="  rounded-0 border-0 post-form text-dark para form-input"
                    divClass="mb-4 "
                    textColor="black-text"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <SelectFormInput
                    values={[
                      { value: 'Easy', label: 'Easy' },
                      { value: 'Medium', label: 'Medium' },
                      { value: 'Hard', label: 'Hard' },
                    ]}
                    name="Skills__c"
                    selectedState="Skills"
                    inputClass="form-select form-select-lg mb-3 border-0 rounded-0 post-form para form-input "
                    textColor="black-text"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <FormInput
                    name="Email"
                    label="Email*"
                    inputClass="  rounded-0 border-0 post-form text-dark para form-input"
                    divClass="mb-4"
                    textColor="black-text"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <SelectFormInput
                    values={[
                      { value: 'One', label: 'One' },
                      { value: 'Two', label: 'Two' },
                      { value: 'Three', label: 'Three' },
                    ]}
                    name="Exprience__c"
                    selectedState="Experience
                    in years"
                    inputClass="form-select form-select-lg mb-3 border-0 rounded-0 post-form para form-input "
                    textColor="black-text"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <FormInput
                    name="fileUpload"
                    inputClass="  rounded-0 border-0 post-form text-dark para form-input pt-0"
                    divClass="mb-4"
                    file="file"
                    textColor="black-text"
                  />

                  <span className="f-11">
                    Upload Your Resume*(upload only.doc,.docx,.rtf,.pdf files)
                  </span>
                </div>
                <div className="col-md-6 col-6">
                  <SelectFormInput
                    values={[
                      { value: 'Banglore', label: 'Banglore' },
                      { value: 'Pune', label: 'Pune' },
                      { value: 'Mumbai', label: 'Mumbai' },
                    ]}
                    name="City__c"
                    selectedState="Location"
                    inputClass="form-select form-select-lg mb-3 border-0 rounded-0 post-form para form-input "
                    textColor="black-text"
                  />
                </div>
                <div className="mt-0 mb-2">
                  <span className="mt-0  fw-semibold ms-5 ps-5">or</span>
                </div>
                <div className="col-md-6 col-6 mt-0 text-center text-md-start">
                  <div className="d-flex align-items-center flex-row  w-fit p-2">
                    <img
                      src="./images/Home/link-1.svg"
                      className="me-1 link-img"
                      alt="Linkedin"
                    />
                    <p className="mb-0 para fw-semibold">Apply With Linkedin</p>
                  </div>
                </div>
                <div className="col-md-6 col-6 text-end mt-0">
                  <div className="form-action">
                    <FormButton
                      text="Submit"
                      color="black"
                      className="mb-3 py-1 fw-semibold para"
                      width="134px"
                      height="40px"
                    />
                  </div>
                </div>
                {showSuccessMessage && (
                  <div className="col-12 grey-bg py-2 my-3">
                    <h5 className="text-black mb-0 mx-2">
                      Form Submitted Successfully
                    </h5>
                  </div>
                )}
              </div>
            </ValidatedForm>
          </div>
        </div>
      </div>
    </div>
  )
}
