import { useState } from "react"
import { CardProps } from "./Card"
import { InputField } from "./InputField"


export const InputForm=()=>{
    const [inputs, setInputs]=useState<CardProps>({
        fullName:"",
        description:"",
        interests:[],
        githubUrl:"",
        linkedinUrl:""
    })
    
    return(
    <form>
        <InputField value={inputs.fullName} placeholder="Enter Full Name" 
            onChange={(e)=>setInputs(inputs.fullName=e.target.value)} />        
    </form>
    )
}

