import Button from './Button'
import { Link } from '@remix-run/react'
import { DataFunctionArgs, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { FormInput } from '~/components/FormInput'
import axios from 'axios'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { withZod } from '@remix-validated-form/with-zod'
import { z } from 'zod'

export const validator = withZod(
  z.object({
    FirstName: z.string().min(1, { message: 'First name is required' }),
    Company: z.string().min(1, { message: 'message is required' }),
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
  await submitData(result)

  return json({ success: true })
}

async function submitData(formData:any) {
  // const portalId = 39659697
  // const formGuid = 'd5dce738-ca52-4752-b2a2-3d634aad8cf8'

  const config = {
    headers: {
      'Authorization': 'Bearer 00D5i00000DQnK3!AR4AQPoOdKNvgrbMxSl4zyHoTAzp7Gc1APOo4JkV8VbgGSqrtkaC7bNtGMLKx2HO7_3D8XGqdAa8Ta8C7qbniS_e9HQP7_td',
      'Content-Type': 'application/json',

    },
  }

  try {
    const res = await axios.post(
      
      // `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      `https://reveationlabs2-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/Lead`,
      {
        FirstName: formData.FirstName,
        Email: formData.Email,
        Phone: formData.Phone,
        Company: formData.Company,
      },
      
      // {
        
      // //   // portalId,
      // //   // formGuid,
      // //   // fields: [
      // //   //   {
      // //   //     name: 'firstname',
      // //   //     value: `${formData.firstname}`,
      // //   //   },
      // //   //   {
      // //   //     name: 'email',
      // //   //     value: `${formData.email}`,
      // //   //   },

      // //   //   {
      // //   //     name: 'message',
      // //   //     value: `${formData.message}`,
      // //   //   },
      // //   //   {
      // //   //     name: 'phone',
      // //   //     value: `${formData.phone}`,
      // //   //   },
      // //   // ],
      //   fields: [
      //       {
      //         name: 'FirstName',
      //         value:  `${formData.firstName}`,
      //       },
      //       {
      //         name: 'Email',
      //         value: `${formData.Email}`,
      //       },
  
      //       {
      //         name: 'Phone',
      //         value: `${formData.Phone}`,
      //       },
      //       {
      //         name: 'Company',
      //         value: `${formData.Company}`,
      //       },
      //     ],
 
          
      // },
      config
    )
    console.log('res', res)
  } catch (err) {
    console.log(err)
  }
}

export default function ContactPage() {
  return (
    <div className="bg-black py-5">
      <div className="container pb-5">
        <div className="row gy-4">
          <div className="col-md-5 col-12">
            <div className="text-white">
              <h1>Contact</h1>
              <div className="pt-5">
                <p className="para">FOR CLIENTS :</p>
                <h4>Info@ivoyant.com</h4>
              </div>
              <div className="pt-4">
                <p className="para">FOR FUTURE DEVELOPERS :</p>
                <h4>jobs @ivoyant.com</h4>
              </div>
              <div className="pt-5">
                <h1>Connect</h1>
                <div className="row mt-3">
                  <div className="col-md-1 col-2 me-1">
                    <a>
                      <img src="./images/Home/facebook-svg.svg" />
                    </a>
                  </div>
                  <div className="col-md-1 col-2 me-1">
                    <a>
                      <img src="./images/Home/link-url.svg" />
                    </a>
                  </div>
                  <div className="col-md-1 col-2 me-1">
                    <a>
                      <img src="./images/Home/twitter--svg.svg" />
                    </a>
                  </div>
                  <div className="col-md-1 col-2">
                    <a>
                      <img src="./images/Home/youtube-svg.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6  col-md-7 col-lg-7 col-12 ">
            <ValidatedForm validator={validator} method="post">
              <p className="text-white text-end">Required *</p>
              <FormInput
                name="FirstName"
                label="First Name*"
                inputClass="grey-bg rounded-0 form-input"
                divClass="mb-4"
              />
              <FormInput
                name="Email"
                label="Email Address*"
                inputClass="grey-bg rounded-0 form-input"
                divClass="mb-4"
              />
              <FormInput
                name="Phone"
                label="Phone"
                inputClass="grey-bg rounded-0 form-input"
                divClass="mb-4"
              />

              <FormInput
                name="Company"
                label="Message"
                inputClass="grey-bg rounded-0 form-input  msg-h"
                divClass="mt-4"
                textbox="true"
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
              <div className="form-action">
                <button type="submit">Submit</button>
              </div>
            </ValidatedForm>
          </div>
        </div>
      </div>
    </div>
  )
}
