import type { ComponentProps, FunctionComponent } from "react";
import { SmallButton } from "./Button";

interface ItemProps extends ComponentProps<'li'> { }

interface DropDownProps extends ComponentProps<'ul'> {
  items: Array<string>;
  currentItem: string;
  onTaz?: (itemValue: string) => void;
}

const Item: FunctionComponent<ItemProps> = ({ children, ...props }: ItemProps) => (
  <li {...props}><a>{children}</a></li>
)

interface DropDownComposition {
  Item: FunctionComponent<ItemProps>
}

export const DropDown: FunctionComponent<DropDownProps> & DropDownComposition = ({ items, currentItem, ...props }) => (
  <div className="dropdown dropdown-start">
    <SmallButton tabIndex={0} className="btn m-1" variant={'sm'}>
      <SmallButton.Text text={currentItem} />
    </SmallButton>

    <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 p-2 shadow-sm" {...props}>
      {items.map((v, k) => (
        <DropDown.Item
          key={k}
          onClick={() => props.onTaz && props.onTaz(v)}
        >{v}</DropDown.Item>
      ))}
    </ul>
  </div>
)

DropDown.Item = Item
