import { createContext, type ComponentProps, type FunctionComponent } from "react";

type InputFieldContextType = {
  variant: 'default' | 'xs' | "xl" | "sm";
  isActive: boolean
}
const InputFieldContext = createContext<InputFieldContextType>({
  variant: 'default',
  isActive: true
})

interface InputFieldProps extends ComponentProps<'input'> {
  variant: 'default' | 'xs' | "xl" | "sm";
  isActive: boolean
}

export const InputField: FunctionComponent<InputFieldProps> = ({
  variant,
  content,
  ...props
}) => {
  return (
    <label className="input">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </g>
      </svg>
      <input type="text" required={true} placeholder="Request URL" {...props} />
    </label>
  )
}
