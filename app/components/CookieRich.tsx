import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/CookiePolicy'
export default function CookieRich() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container my-5">
        <div
          dangerouslySetInnerHTML={{
            __html: result?.cookieRichText,
          }}
        />
      </div>
    </>
  )
}
