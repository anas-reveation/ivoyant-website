import { DataFunctionArgs, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { FormInput } from '~/components/FormInput'
import axios from 'axios'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'

export const validator = withZod(
  z.object({
    firstname: z.string().min(1, { message: 'First name is required' }),
    message: z.string().min(1, { message: 'Last name is required' }),
    email: z
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
  await submitData(result)

  return json({ success: true })
}

async function submitData(formData: any) {
  const portalId = 24134669
  const formGuid = '60361249-a7a0-4d2d-adeb-44267d0248f1'

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: 'firstname',
            value: `${formData.firstname}`,
          },
          {
            name: 'email',
            value: `${formData.email}`,
          },

          {
            name: 'message',
            value: `${formData.message}`,
          },
          {
            name: 'file',
            value: `${formData.file}`,
          },
          {
            name: 'city',
            value: `${formData.city}`,
          },
        ],
      },
      config
    )
    console.log('res', res)
  } catch (err) {
    console.log(err)
  }
}

export default function Demo() {
  const data = useActionData()

  return (
    <ValidatedForm validator={validator} method="post">
      {' '}
      <FormInput name="firstname" label="First Name" />
      <FormInput name="message" label="Message" />
      <FormInput name="email" label="Email" />
      <div>
        <label htmlFor="file">File</label>
        <input type="file" id="file" name="file" />
      </div>
      <FormInput name="city" label="Location" selectbox="true" />
      <div className="form-action">
        <button type="submit">Submit</button>
      </div>
    </ValidatedForm>
  )
}
