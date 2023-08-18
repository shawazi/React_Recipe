import { styled } from "styled-components";

export const StyledMain = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
`

export const StyledSearch = styled.div`
  background-color: #e94747;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #333;
  font-family: Arial, sans-serif;
  margin-bottom: 3%;
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  input {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 1;
  }
  button {
    padding: 8px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  button:hover {
    background-color: #0056b3;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 20px;
  }
`;


export const StyledWrapResults = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledResults = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid black;
  border-radius: 5%;
  gap: .5rem;
  background-color: teal;
  margin: 1rem;
  width: 350px;
  height: 350px;
  transition: transform 0.3s ease; /* Add the transition property */

  &:hover {
    transform: scale(1.15); /* Increase the size by 15% on hover */
  }
`