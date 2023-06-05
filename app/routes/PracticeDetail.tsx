import PracticeDetailBanner from '~/components/PracticeDetailBanner'
import PracticeDetailSecond from '~/components/PracticeDetailSecond'
import PracticeDetailThird from '~/components/PracticeDetailThird'

import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'

export async function loader() {
  const result = await graphcmsClient.request(GetTechnologyPracticeSlug)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}





export default function PracticeDetail() {
  return (
    <div>
      <PracticeDetailBanner />
      <PracticeDetailSecond />
      <PracticeDetailThird />
    </div>
  )
}
