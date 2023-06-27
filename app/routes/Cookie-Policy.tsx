import PolicyConditionBanner from '~/components/PolicyConditionBanner'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetCookiePolicies } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'
import PrivacyConditionRich from '~/components/PrivacyRichText'
import { marked } from 'marked'
import CookieRich from '~/components/CookieRich'

export async function loader() {
  const result = await graphcmsClient.request(GetCookiePolicies)
  const cookieRich = result?.cookiePolicies?.data[0]?.attributes?.RichContent
  const cookieRichText = marked(cookieRich)
  return json({
    data: result,
    cookieRichText,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function CookiePolicy() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {result?.data?.cookiePolicies?.data[0]?.attributes?.CookieSeo?.Title}
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.cookiePolicies?.data[0]?.attributes?.CookieSeo?.MetaTag.map(
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

        {result?.data?.cookiePolicies?.data[0]?.attributes?.CookieSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <PolicyConditionBanner
        Heading={result?.data?.cookiePolicies?.data[0]?.attributes?.Heading}
        image={
          result.ENV.STRAPI_URL +
          result?.data?.cookiePolicies?.data[0]?.attributes?.Image?.data
            ?.attributes?.url
        }
      />
      <CookieRich />
    </>
  )
}
