import { styled } from "styled-components"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.ts";
import { toast } from 'react-toastify';
import { FormEvent, useState } from "react";

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
  const { setLoggedIn, setUsername, setPassword, username, password, email, setEmail } = useAuthContext()
  const navigate = useNavigate()
  const [registrationView, setRegistrationView] = useState(false)

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((response) => {
      setLoggedIn(true)
      navigate("/")
      console.log(response)
      toast.success("You've successfully signed in.")
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(`Error: ${errorCode} - ${errorMessage}`);
  })

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
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(`Error: ${errorCode} - ${errorMessage}`)
      });
  }

  const handleNavRegister = () => {
    setRegistrationView(true);
  }

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setEmail(user.email || "")
        setLoggedIn(true)
        navigate('/')
        toast.success("Successfully registered and logged in!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode + ": " + errorMessage)
      });

  }

  const handleNavLogin = () => {
    setRegistrationView(false)
  }


  return (
    <Div>
      {!registrationView ?
        <>
          <h1>Log in</h1>
          <Form action="submit" onSubmit={handleLogin}>
            <input type="text" placeholder="Email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleSignInWithGoogle}>Sign in with Google</Button>
            <Button type="button" onClick={handleNavRegister}>Register instead?</Button>
          </Form>
        </>
        :
        <>
          <h1>Register</h1>
          <Form action="submit" onSubmit={handleRegister}>
            <input type="text" placeholder="Email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleSignInWithGoogle}>Sign in with Google</Button>
            <Button type="button" onClick={handleNavLogin}>Login instead?</Button>
          </Form>
        </>
      }
    </Div>
  )
}

export default Login