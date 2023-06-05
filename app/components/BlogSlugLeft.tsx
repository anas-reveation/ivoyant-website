import BlogSlugForm from './BlogSlugForm'
import ReactMarkdown from 'react-markdown'
import { marked } from 'marked'
import { useLoaderData } from '@remix-run/react'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { FormInput } from '~/components/FormInput'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'
import Button from './Button'
import axios from 'axios'
import FormButton from './FormButtom'
import { useActionData } from '@remix-run/react'

import { DataFunctionArgs, json, redirect } from '@remix-run/node'

export const validator = withZod(
  z.object({
    FirstName: z.string().min(1, { message: 'First name is required' }),
    Message: z.string().min(1, { message: 'message is required' }),
    Email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
  })
)

export async function action({ request }: DataFunctionArgs) {
  const newData = await request.formData()
  const formData = await validator.validate(newData)
  const result = Object.fromEntries(newData)

  if (formData.error) {
    // validationError comes from `remix-validated-form`
    return validationError(formData.error)
  }

  // Call submitData function here, passing the form data as argument
  await submitData(result, process.env.ACCESS_TOKEN, process.env.INSTANCE_URL)

  return json({ success: true })
}

async function submitData(formData: any, accessToken: any, instanceUrl: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(
      `${instanceUrl}/services/data/v57.0/sobjects/Lead`,
      {
        FirstName: `${formData.FirstName}`,
        LastName: '_',
        Email: `${formData.Email}`,
        Message__c: `${formData.Message}`,
        Company: '_',
        // `${formData.Company}`,
        LeadSource: 'LEAVE A MESSAGE FORM',
      },

      config
    )
    console.log('res', res)
  } catch (err) {
    console.log(err)
  }
}




export interface BlogSlugLeftProps {
  Heading?: string
}

export default function BlogSlugLeft(props: BlogSlugLeftProps) {
  const { innerhtml } = useLoaderData<typeof loader>()
  const data = useActionData()


  const { Heading } = props
  return (
    <>
      <div className="col-12 col-lg-7 ">
        <div className="p-5 box-shadow">
          {/* <h2 className="fw-600 py-3">{Heading} </h2> */}
            <div dangerouslySetInnerHTML={{ __html: innerhtml }} />
            <div className="mt-4 ">
        <h2 className="py-3">Leave a Message</h2>
        <ValidatedForm validator={validator} method="post">
          <FormInput
            name="FirstName"
            label="Name*"
            inputClass="form-message rounded-0 form-input"
            divClass="mb-4"
            textColor="black-text"
          />
          <FormInput
            name="Email"
            label="Email Address*"
            inputClass="form-message rounded-0 form-input"
            divClass="mb-4"
            textColor="black-text"
          />
          {/* <FormInput
                name="phone"
                label="Phone"
                inputClass="form-message rounded-0 form-input"
                divClass="mb-4"
              /> */}

          <FormInput
            name="Message"
            label="Type your Message*"
            inputClass="form-message rounded-0 form-input  msg-h-s"
            divClass="mt-4"
            textbox="true"
            textColor="black-text"
          />

          {/* <Link to="">
                <Button
                  text="Send"
                  borderColor="white"
                  color="text-white"
                  className="mb-3 py-1 mt-5"
                  width="100px"
                />
              </Link> */}
          {/* <div className="form-action mt-3">
                <button type="submit">Submit</button>
              </div> */}
          <FormButton
            text="Submit"
            color="black"
            className="mb-3 py-1 fw-semibold para"
            width="134px"
            height="40px"
          />
        </ValidatedForm>
      </div>

        </div>
      </div>
    </>
  )
}
