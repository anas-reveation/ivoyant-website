import PolicyConditionBanner from '~/components/PolicyConditionBanner'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTermsCondition } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'
import PrivacyConditionRich from '~/components/PrivacyRichText'
import { marked } from 'marked'
import TermConditionRich from '~/components/TermConditionRich'

export async function loader() {
  const result = await graphcmsClient.request(GetTermsCondition)
  const conditionRich = result?.termsConditons?.data[0]?.attributes?.RichContent

  const conditonRichText = marked(conditionRich)
  return json({
    data: result,
    conditonRichText,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function TermsCondition() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.termsConditons?.data[0]?.attributes?.TermsConditionSeo
              ?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.termsConditons?.data[0]?.attributes?.TermsConditionSeo?.MetaTag?.map(
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

        {result?.data?.termsConditons?.data[0]?.attributes?.TermsConditionSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <PolicyConditionBanner
        image={
          result.ENV.STRAPI_URL +
          result?.data?.termsConditons?.data[0]?.attributes?.Image?.data
            ?.attributes?.url
        }
        Heading={result?.data?.termsConditons?.data[0]?.attributes?.Heading}
      />
      <TermConditionRich />
    </>
  )
}
