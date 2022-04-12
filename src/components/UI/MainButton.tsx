import React from 'react'

interface ButtonProp {
    additionalStyle: string;
    disabled: boolean;
    onClick: ()=> void;
}
const MainButton: React.FC<ButtonProp> = (props) => {
  return (
    <button className={`max-w-xl p-1.5 border-2 my-3 rounded-lg ${props.additionalStyle}`} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
)
}

export default MainButton
