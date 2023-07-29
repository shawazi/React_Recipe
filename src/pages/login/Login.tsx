import { styled } from "styled-components"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.ts";
import { toast } from 'react-toastify';

app;
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
// auth.languageCode = 'en';
auth.useDeviceLanguage();

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
  cursor: pointer;
`

const Login = () => {
  const { setLoggedIn, setUsername, setPassword, username, password } = useAuthContext()
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedIn(true)
    navigate("/")
    toast.success("You've successfully signed in.")
  }

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(token, user)
      setLoggedIn(true)
      navigate("/")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential)
      toast.error(`Error: ${error}`)
    });
    console.log("Signing in with google");
  }



  return (
    <Div>
      <h1>Log in</h1>
      <Form action="submit" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleSignInWithGoogle}>Sign in with Google</Button>
      </Form>
    </Div>
  )
}

export default Login