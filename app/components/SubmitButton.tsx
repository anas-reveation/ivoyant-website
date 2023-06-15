import { useIsSubmitting } from 'remix-validated-form'
import { action } from '~/routes/RemixForm'
import { useActionData } from '@remix-run/react'
import axios from 'axios'

export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting()

  return (
    <button type="submit" disabled={isSubmitting} className="form-action">
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  )
}
