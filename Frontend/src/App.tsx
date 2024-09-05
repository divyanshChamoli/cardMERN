import { BrowserRouter } from "react-router-dom"
import Card from "./Components/Card"

function App(){
  const obj1={
    fullName: "Divyansh Chamoli",
    description: "Software developer",
    interests: ["Web development", "DSA", "Chess"],
    linkedinUrl: "https://www.linkedin.com/in/divyansh-chamoli-681170270/",
    githubUrl: "https://github.com/divyanshChamoli"
  }
  return (
    <BrowserRouter>
      <div>Card App</div>
      <Card {...obj1} />
    </BrowserRouter>
  )
}

export default App
