import { Div, LottieCont } from "./styled"
import Coding from "../../components/Coding"

const About = () => {


  return (
    <Div>
      <h1>About the Developer</h1>
      <p>Thanks for stopping by! I'm Shawaz - an American web developer.</p>
      <p>I love recipes, APIs, and coding!</p> 
        <p>
          Please send me a message if you have any queries: 
          <span> 
        <a style={{textDecoration: "none", color: "white",}} href="https://shawaz.org" target="_blank"> shawaz.org</a>
          </span>
          </p>
      <LottieCont>
        <Coding />
      </LottieCont>
    </Div>
  )
}

export default About