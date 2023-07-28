import { Div, LottieCont } from "../about/styled"
import Coding from "../../components/Coding"

const About = () => {


  return (
    <Div>
      <h1>About the Developer</h1>
      <p>I love recipes, APIs, and coding! Please send me a message in the contact page if you have any queries or suggestions.</p>
      <LottieCont>
        <Coding />
      </LottieCont>
    </Div>
  )
}

export default About