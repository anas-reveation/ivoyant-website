import ContactPage from '~/components/ContactPage'
import Map from '~/components/Map'
import { Link } from '@remix-run/react'
import Button from '~/components/Button'
import { DataFunctionArgs, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { FormInput } from '~/components/FormInput'
import axios from 'axios'
import {
  ValidatedForm,
  useIsSubmitting,
  validationError,
} from 'remix-validated-form'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'
import FormButton from '~/components/FormButtom'
import { useEffect, useRef, useState } from 'react'
import { graphcmsClient } from '~/lib/graphcms'
import { useLoaderData } from '@remix-run/react'
import { GetConatcUs } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

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
    Message: z
      .string()
      .min(1, { message: 'Please write a meesage' })
      .refine((value) => value.trim() !== '', {
        message: 'Enter a valid message',
      }),
    Phone: z
      .string()
      .regex(/^\d+$/, { message: 'Phone number must be numeric' })
      .min(10, { message: 'Phone number must be at least 10 digits' })
      .max(10, { message: 'Phone number must not be more than 10 digits' }),
  })
)

export async function loader() {
  const result = await graphcmsClient.request(GetConatcUs)

  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      INSTANCE_URL: process.env.INSTANCE_URL,
    },
  })
}

export async function action({ request }: DataFunctionArgs) {
  const newData = await request.formData()
  const formData = await validator.validate(newData)
  const result = Object.fromEntries(newData)

  if (formData.error) {
    // validationError comes from `remix-validated-form`
    return validationError(formData.error)
  }
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
      // Call submitData function here, passing the form data as argument

      await submitData(result, res?.data.access_token, res?.data.instance_url)
    } catch (err) {
      console.log(err)
    }
  }
  await accessToken()

  return json({ success: true, result: result })
}

async function submitData(formData: any, accessToken: any, instanceUrl: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios.post(
      `${instanceUrl}/services/data/v57.0/sobjects/Lead`,
      {
        FirstName: `${formData.FirstName}`,
        LastName: '_',
        Email: `${formData.Email}`,
        Phone: `${formData.Phone}`,

        Message__c: `${formData.Message}`,
        Company: '_',

        LeadSource: 'CONTACT_US',
      },

      config
    )
    try {
      await axios
        .post(
          `https://reveationlabs2-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/ContentVersion`,
          {
            Title: 'My file.txt',
            PathOnClient: 'simple',
            ContentLocation: 'S',
            FirstPublishLocationId: `${response.data.id}`,
            VersionData: 'SEkgVGhpcyBpcyBUZXN0IERvY3VtbmV0',
          },
          config
        )
        .then(() => {
          {
            formData.FirstName = null
          }
        })
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }
}

export default function Home() {
  const result = useLoaderData<typeof loader>()

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

  return (
    <div>
      <Helmet>
        <title>
          {result?.data?.contact?.data?.attributes?.ContactUsSeo?.Title}
        </title>
        {result?.data?.contact?.data?.attributes?.ContactUsSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        {result?.data?.contact?.data?.attributes?.ContactUsSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div className="bg-black py-5">
        <div className="container pb-5">
          <div className="row gy-4">
            <div className="col-md-5 col-12">
              <div className="text-white">
                <h1>Contact</h1>
                <div className="pt-5">
                  <p className="para">FOR CLIENTS :</p>
                  <h4>{result?.data?.contact?.data?.attributes?.ClientMail}</h4>
                </div>
                <div className="pt-4">
                  <p className="para">FOR FUTURE DEVELOPERS :</p>
                  <h4>
                    {result?.data?.contact?.data?.attributes?.DeveloperMail}
                  </h4>
                </div>
                <div className="pt-5">
                  <h1>Connect</h1>
                  <div className="row mt-3">
                    {result?.data?.contact?.data?.attributes?.SocialLinks.map(
                      (d: any) => {
                        return (
                          <div className="col-md-1 col-2 me-1">
                            <a>
                              <img
                                className="contact-icon"
                                src={
                                  result.ENV.STRAPI_URL +
                                  d?.SocialIcon?.data?.attributes?.url
                                }
                              />
                            </a>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6  col-md-7 col-lg-7 col-12 ">
              <ValidatedForm
                validator={validator}
                method="post"
                resetAfterSubmit
              >
                <p className="text-white text-end">* Required </p>
                <FormInput
                  name="FirstName"
                  label="Name*"
                  inputClass="grey-bg rounded-0 form-input"
                  divClass="mb-4"
                />
                <FormInput
                  name="Email"
                  label="Email Address*"
                  inputClass="grey-bg rounded-0 form-input"
                  divClass="mb-4"
                />
                <FormInput
                  name="Phone"
                  label="Phone*"
                  inputClass="grey-bg rounded-0 form-input"
                  divClass="mb-4"
                />

                <FormInput
                  name="Message"
                  label="Message*"
                  inputClass="grey-bg rounded-0 form-input  msg-h-m"
                  divClass="mt-4"
                  textbox="true"
                />

                <div className="form-action">
                  <FormButton
                    text="Send"
                    borderColor="white"
                    color="text-white"
                    className="mb-3 py-1 mt-5"
                    width="100px"
                  />
                </div>
                {showSuccessMessage && (
                  <div className="col-12 grey-bg py-2 my-3">
                    <h5 className="text-black mb-0 mx-2">
                      Form Submitted Successfully
                    </h5>
                  </div>
                )}
              </ValidatedForm>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  )
}
