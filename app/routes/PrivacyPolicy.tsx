import PolicyConditionBanner from '~/components/PolicyConditionBanner'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetPrivacyPolicy } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'
import { marked } from 'marked'
import PrivacyRich from '~/components/PrivacyRichText'

export async function loader() {
  const result = await graphcmsClient.request(GetPrivacyPolicy)
  const privacyRich =
    result?.privacyPolicies?.data[0]?.attributes?.RichContent
  const privacyRichText = marked(privacyRich)
  return json({
    data: result,privacyRichText,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}
export default function PrivacyPolicy() {
  const result = useLoaderData<typeof loader>()
  

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.privacyPolicies?.data[0]?.attributes?.PrivacySeo?.Title
          }
        </title>
        {result?.data?.privacyPolicies?.data[0]?.attributes?.PrivacySeo?.MetaTag?.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
      </Helmet>
      <PolicyConditionBanner
        Heading={result?.data?.privacyPolicies?.data[0]?.attributes?.Heading}
        image={
          result.ENV.STRAPI_URL +
          result?.data?.privacyPolicies?.data[0]?.attributes?.Image?.data
            ?.attributes?.url
        }
      />
      <PrivacyRich/>
    </>
  )
}
