import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/TermsCondition'
export default function TermConditionRich() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container my-5">
        <div
          dangerouslySetInnerHTML={{
            __html: result?.conditonRichText,
          }}
        />
      </div>
    </>
  )
}
