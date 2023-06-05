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
  const SlugData=await graphcmsClient.request(GetBlogsSlugs)
  return json({
    data: result,SlugData,
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
        {result?.data?.blogsPages?.data[0]?.attributes?.BlogPageSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
      </Helmet>
      <BlogsBanner />
      <BlogsSection />
      <BlogLastSection/>
    </>
  )
}
