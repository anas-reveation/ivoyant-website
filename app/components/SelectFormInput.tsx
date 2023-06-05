import { useField } from 'remix-validated-form'

type MyInputProps = {
  name: string
  label?: string
  inputClass?: string
  divClass?: string
  textbox?: string
  selectbox?: string
  values?: { value: string; label: string }[]
  selectedState?:string
  textColor?:string
}

export const SelectFormInput = ({
  name,
  label,
  inputClass,
  divClass,
  values = [],
  selectedState,
  textColor
}: MyInputProps) => {
  const { error, getInputProps } = useField(name)
  return (
    <div className={divClass}>
      {/* <label htmlFor={name}>{label}</label> */}
      {
        <select
          className={inputClass}
          aria-label=".form-select-lg example"
          {...getInputProps({ id: name })}
          placeholder={label}
        >
          <option className="mt-5" selected>
            {selectedState}
          </option>
          
          {values.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      }

      {error && <span className={`my-error-class text-white ${textColor}`} >{error}</span>}
    </div>
  )
}
