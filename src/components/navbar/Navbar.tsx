import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useAuthContext } from "../../context/AuthContext"
import { toast } from "react-toastify";

const StyledDiv = styled('div')`
  position: fixed;
  background-color: teal;
  width: 100%;
  top: 0;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  a {
    display: inline-block;
    padding: 2px 16px;
    margin: 5px 0;
    text-decoration: none;
    color: black;
    background-color: silver;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    user-select: none;
  }

  a:hover {
    background-color: teal;
  }
`;

const Navbar = ({ children }: any) => {
  const { isLoggedIn, setLoggedIn } = useAuthContext()
  const handleLogout = () => {
    setLoggedIn(false)
    toast.success("Successfully logged out.")
  }

  return (
    <>
      <StyledDiv>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {isLoggedIn ? 
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        :
          <Link to="/login">Login</Link>
        }
        </StyledDiv>
      {children}
    </>
  )
}

export default Navbar