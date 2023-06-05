import { loader } from '~/routes/TechnologyPractice'
import { useLoaderData } from '@remix-run/react'

export default function FastPractice() {
  const result = useLoaderData<typeof loader>()
  return (
    <div className="container my-5">
      <h4 className="fw-semibold">
        {
          result?.data?.technologyPractices?.data[0]?.attributes
            ?.TechnologySecond?.Title
        }
      </h4>
      <p className="my-4 para fw-semibold">
        {
          result?.data?.technologyPractices?.data[0]?.attributes
            ?.TechnologySecond?.Decsription
        }
      </p>
      <ul className="para fw-500">
        {result?.data?.technologyPractices?.data[0]?.attributes?.TechnologySecond?.BulletPoints.map(
          (d: any, $index: any) => {
            return <li className="mb-3 ">{d?.BulletPoint}</li>
          }
        )}
      </ul>
    </div>
  )
}
