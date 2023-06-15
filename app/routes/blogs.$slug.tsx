import BlogsBanner from '~/components/BlogsBanner'
import BlogsSlugBanner from '~/components/BlogsSlugBanner'
import BlogsSlugMiddle from '~/components/BlogsSlugMiddle'
import { GetBlogsSlugs } from '~/graphQl/HomeQuery'
import { graphcmsClient } from '~/lib/graphcms'
import { useLoaderData } from '@remix-run/react'
import Button from '~/components/Button'
import BlogSlugForm from '~/components/BlogSlugForm'
import ReactMarkdown from 'react-markdown'
import BlogSlugLeft from '~/components/BlogSlugLeft'
import SlugBioCard from '~/components/SlugBioCard'
import SlugLatestCard from '~/components/SlugLatest'
import { Helmet } from 'react-helmet'
import { marked } from 'marked'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { FormInput } from '~/components/FormInput'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'
import axios from 'axios'
import { useActionData } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'

import { DataFunctionArgs, json, redirect } from '@remix-run/node'
import FormButton from '~/components/FormButtom'

export const validator = withZod(
  z.object({
    FirstName: z
      .string()
      .min(1, { message: 'First name is required' })
      .refine((value) => value.trim() !== '', {
        message: 'Enter a valid name',
      }),
    Message: z
      .string()
      .min(1, { message: 'message is required' })
      .refine((value) => value.trim() !== '', {
        message: 'Enter a valid message',
      }),
    Email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
  })
)

export async function loader({ params }: any) {
  const slugid = params.slug
  const Slugdata = await graphcmsClient.request(GetBlogsSlugs)
  const maindata = Slugdata?.blogsSlugs?.data.find(
    (card: any) => card.attributes.Slug === slugid
  )
  const content = maindata?.attributes?.RichContent
  const innerhtml = marked(content!)

  return json({
    data: maindata,
    Slugdata,
    innerhtml,
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

  return json({ success: true })
}

async function submitData(formData: any, accessToken: any, instanceUrl: any) {
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
        Message__c: `${formData.Message}`,
        Company: '_',
        // `${formData.Company}`,
        LeadSource: 'LEAVE A MESSAGE FORM',
      },

      config
    )
    console.log('res', res)
  } catch (err) {
    console.log(err)
  }
}

export default function BlogsSlug() {
  const maindata = useLoaderData<typeof loader>()
  console.log(maindata)
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
    <>
      <Helmet>
        <title>{maindata?.data?.attributes?.BlogsSlugSeo?.Title}</title>
        {maindata?.data?.attributes?.BlogsSlugSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        {maindata?.data?.attributes?.BlogsSlugSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <BlogsSlugBanner
        Heading={maindata?.data?.attributes?.Heading}
        Name={maindata?.data?.attributes?.Name}
        Date={maindata?.data?.attributes?.CreateDate}
        imageurl={
          maindata.ENV.STRAPI_URL +
          maindata?.data?.attributes?.BgImageSlug?.data?.attributes?.url
        }
      />
      <div className="bg-light-blue">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-12 col-lg-7 ">
              <div className="p-5 box-shadow">
                {/* <h2 className="fw-600 py-3">{Heading} </h2> */}
                <div
                  className="richtext"
                  dangerouslySetInnerHTML={{ __html: maindata?.innerhtml }}
                />
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  `
                  <div className="carousel-inner">
                    {maindata?.data?.attributes?.ImgCarosel.map(
                      (d: any, $index: any) => {
                        return (
                          <>
                            <div
                              className={
                                $index === 0
                                  ? 'carousel-item active p-3'
                                  : 'carousel-item p-3'
                              }
                              key={$index}
                            >
                              <div className="row">
                                <img
                                  src={
                                    maindata.ENV.STRAPI_URL +
                                    d?.Rightimg?.data?.attributes?.url
                                  }
                                  className="col-6 d-block "
                                  alt="..."
                                />
                                <img
                                  src={
                                    maindata.ENV.STRAPI_URL +
                                    d?.leftImg?.data?.attributes?.url
                                  }
                                  className="col-6 d-block "
                                  alt="..."
                                />
                              </div>
                            </div>
                          </>
                        )
                      }
                    )}
                  </div>
                  <div className="carousel-indicators py-3 position-unset">
                    {maindata?.data?.attributes?.ImgCarosel.map(
                      (d: any, $index: any) => {
                        return (
                          <>
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={$index}
                              className={$index === 0 ? 'active' : ''}
                              aria-label={`Slide ${$index + 1}`}
                            ></button>
                          </>
                        )
                      }
                    )}
                  </div>
                  `
                </div>
                <div className="mt-4 ">
                  <h2 className="py-3">Leave a Message</h2>
                  <ValidatedForm
                    validator={validator}
                    method="post"
                    resetAfterSubmit
                  >
                    <FormInput
                      name="FirstName"
                      label="Name*"
                      inputClass="form-message rounded-0 form-input"
                      divClass="mb-4"
                      textColor="black-text"
                    />
                    <FormInput
                      name="Email"
                      label="Email*"
                      inputClass="form-message rounded-0 form-input"
                      divClass="mb-4"
                      textColor="black-text"
                    />

                    <FormInput
                      name="Message"
                      label="Type your Message*"
                      inputClass="form-message rounded-0 form-input  msg-h-s"
                      divClass="mt-4"
                      textbox="true"
                      textColor="black-text"
                    />

                    <FormButton
                      text="Submit"
                      color="black"
                      className="mb-3 mt-3 py-1 fw-semibold para mt-2"
                      width="134px"
                      height="40px"
                    />
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
            <div className="col-12 col-lg-5 mt-4 mt-lg-0 mb-5">
              <SlugBioCard
                Name={maindata?.data?.attributes?.Name}
                Bio={maindata?.data?.attributes?.Bio}
                SocialLinks={maindata?.data?.attributes?.SocialLinks}
                Image={
                  maindata.ENV.STRAPI_URL +
                  maindata?.data?.attributes?.BioImage?.data?.attributes?.url
                }
                ImgEnv={maindata.ENV.STRAPI_URL}
              />
              <SlugLatestCard
                BlogsData={maindata?.Slugdata?.blogsSlugs?.data}
                ImageEnv={maindata.ENV.STRAPI_URL}
              />
              <div className="mt-3 box-shadow p-5 bg-white">
                <h3>Categories</h3>
                <hr className="py-4" />
                {maindata?.data?.attributes?.Categorie.map((d: any) => {
                  return (
                    <div className="row justify-content-between mb-2">
                      <div className="col-5">
                        <p className="para">{d?.name}</p>
                      </div>
                      <div className="col-3">
                        <p className="para">({d?.value})</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-3 box-shadow p-5 bg-white">
                <h3>Popular Tags</h3>
                <hr className="py-4" />
                <div>
                  <Button
                    text="Agency"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                  <Button
                    text="Creative"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                  <Button
                    text="Data"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                  <Button
                    text="Idea"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                  <Button
                    text="Technology"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                  <Button
                    text="Development"
                    borderColor="#d9d9d9"
                    width="null"
                    className="me-3 mb-3 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
