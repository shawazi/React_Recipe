import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
    background-color: gray;
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

  const Navbar = ({children}: any) => {
  return (
    <>
      <StyledDiv>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/login">Logout</Link>
      </StyledDiv>
      {children}
    </>
  )
}

export default Navbar