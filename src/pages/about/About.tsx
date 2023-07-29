import { Div, LottieCont } from "./styled"
import Coding from "../../components/Coding"

const About = () => {


  return (
    <Div>
      <h1>About the Developer</h1>
      <p>I love recipes, APIs, and coding!</p> 
        <p>Please send me a message if you have any queries.</p>
      <LottieCont>
        <Coding />
      </LottieCont>
    </Div>
  )
}

export default About