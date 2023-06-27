import BlogsBanner from '~/components/BlogsBanner'
import BlogsSection from '~/components/BlogsSection'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetBlogsPages } from '~/graphQl/HomeQuery'
import { GetBlogsSlugs } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'
import BlogLastSection from '~/components/BlogLastSection'

export async function loader() {
  const result = await graphcmsClient.request(GetBlogsPages)
  const SlugData = await graphcmsClient.request(GetBlogsSlugs)
  return json({
    data: result,
    SlugData,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function Blogs() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {result?.data?.blogsPages?.data[0]?.attributes?.BlogPageSeo?.Title}
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />
        {result?.data?.blogsPages?.data[0]?.attributes?.BlogPageSeo?.MetaTag.map(
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
        {result?.data?.blogsPages?.data[0]?.attributes?.BlogPageSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <BlogsBanner />
      <BlogsSection />
      <BlogLastSection />
    </>
  )
}
