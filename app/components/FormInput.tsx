import { useField } from 'remix-validated-form'

type MyInputProps = {
  name: string
  label?: string
  inputClass?: string
  divClass?: string
  textbox?: string
  selectbox?: string
  file?:string

  formRef?:string
  textColor?:string
}

export const FormInput = ({
  name,
  label,
  inputClass,
  divClass,
  textbox,
  selectbox,
  file,
  formRef,
  textColor

}: MyInputProps) => {
  const { error, getInputProps } = useField(name)
  return (
    <div className={divClass}>
      {/* <label htmlFor={name}>{label}</label> */}
      {textbox ? (
        <textarea
          {...getInputProps({ id: name })}
          className={inputClass}
          placeholder={label}
          rows={3}
        />
      ) : selectbox ? (
        <select
          className="form-select form-select-lg mb-3 border-0 rounded-0 post-form para"
          aria-label=".form-select-lg example"
          {...getInputProps({ id: name })}
          placeholder={label}
        >
          <option className="mt-5" selected>
            Location
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      ) : (
        <input
          {...getInputProps({ id: name })}
          className={inputClass}
          placeholder={label}
          type={file}
          ref={formRef}
        />
      )}

      {error && <span className={`my-error-class text-white ${textColor}`}>{error}</span>}
    </div>
  )
}
