import { FC } from "react"
// import Button from "./Button"
import { Link } from "react-router-dom"

export interface CardProps {
    fullName:string,
    description:string,
    interests: string[],
    linkedinUrl: string
    githubUrl: string,
}

const Card: FC<CardProps> = (props: CardProps) => {
    // const handleClick=()=>{
    //     <Link to="https://github.com/divyanshChamoli" target="_blank"></Link>
    //     // <a href="https://github.com/divyanshChamoli"></a>
    //  console.log("Hello")
    // }
    
  return (
    <>
        <h1> {props.fullName} </h1>
        <p> {props.description} </p>
        <h2> Interest </h2>
        {props.interests.map((interest)=>{
            return(
                <div>
                    <p> {interest} </p>
                </div>
            )
        })}
        {/* <Button buttonText="LinkedIn" buttonUrl={props.linkedinUrl} onClick={handleClick} /> */}
        {/* <Button buttonText="Twitter" buttonUrl={props.twitterUrl} onClick={handleClick} /> */}
        <Link to={props.linkedinUrl} target="_blank"><button>LinkedIn</button></Link>
        <Link to={props.linkedinUrl} target="_blank"><button>Github</button></Link>
    </>
  )
}

export default Card