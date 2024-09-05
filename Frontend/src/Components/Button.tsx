// import { Link, NavLink } from "react-router-dom"

type Props = {
    buttonText:string,
    buttonUrl: string
    onClick: ()=>void
}

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick}> {props.buttonText} </button>
  )
}

export default Button