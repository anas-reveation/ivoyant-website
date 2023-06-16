import { loader } from '~/routes/Privacy-Policy'
import { useLoaderData } from '@remix-run/react'

export default function PrivacyRich() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container my-5">
        <div
          className="richtext"
          dangerouslySetInnerHTML={{
            __html: result?.privacyRichText,
          }}
        />
      </div>
    </>
  )
}
