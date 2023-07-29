import { styled } from "styled-components"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid teal;
  border-radius: 10px;
`

const Button = styled.button`
  width: 50%;
  margin: auto;
`

const Login = () => {
  const { setLoggedIn, setUsername, setPassword, username, password } = useAuthContext()
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedIn(true)
    navigate("/")
  }

  return (
    <Div>
      <h1>Log in</h1>
      <Form action="submit" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit">Submit</Button>
      </Form>
    </Div>
  )
}

export default Login