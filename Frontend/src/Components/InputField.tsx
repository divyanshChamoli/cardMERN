import { FC } from "react"
// import { CardProps } from "./Card"

interface InputFieldProps{
    value: string,
    placeholder: string,
    onChange: (e: any)=>void
}

export const InputField: FC<InputFieldProps>=(props:InputFieldProps)=>{

    return (
        <input type="text" value={props.value} onChange={(e)=>props.onChange} placeholder={props.value} />
    )
}