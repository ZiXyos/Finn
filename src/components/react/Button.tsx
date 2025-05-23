import type { ComponentProps } from "react";
import type { FunctionComponent, ReactNode } from "react";
import { createContext } from "react";

type ButtonContextType = {
  variant: 'default' | 'xs' | 'xl' | 'sm'
};
const ButtonContext = createContext < ButtonContextType > ({ variant: 'default' })

interface ButtonProps extends ComponentProps<'button'> {
  variant: 'default' | 'xs' | 'xl' | 'sm'
}

const Text: FunctionComponent<{ text: string }> = ({ text }) => (
  <a>{text}</a>
)

interface ButtonComposition {
  Text: FunctionComponent<{ text: string }>
}

const SmallButton: FunctionComponent<ButtonProps> & ButtonComposition = ({ children, variant, onClick, ...props }) => {
  // check variant
  return (
    <button className={`btn btn-${variant} btn-secondary`} {...props}>
      {children}
    </button>
  )
}

SmallButton.Text = Text;

export {
  SmallButton
}
