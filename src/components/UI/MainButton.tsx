import React from 'react'

interface ButtonProp {
    additionalStyle: string;
}
const MainButton: React.FC<ButtonProp> = (props) => {
  return (
    <button className={`max-w-xl p-1.5 border-2 my-3 rounded-lg ${props.additionalStyle}`}>{props.children}</button>
)
}

export default MainButton
