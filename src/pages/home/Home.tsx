import axios from "axios";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { StyledMain, StyledSearch, StyledWrapResults, StyledResults } from "../home/styled";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";

const Home = () => {
  const { data, setData } = useRecipeContext();
  const [query, setQuery] = useState("steak");
  const [meal, setMeal] = useState("dinner");
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    axios.get(url)
    .then(resp => {
      console.log(resp?.data?.hits);
      console.log("Running 'getData()'");
      console.log(url)
      setData(resp?.data?.hits || []);
    })
    .catch(Error => {
      console.log(Error)
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleMeal = (e: ChangeEvent<HTMLSelectElement>) => {
    setMeal(e.target.value)
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData()
  }

  return (
    <StyledMain>
      <h1>A Recipe App</h1>
      <h3>Powered by Edamam</h3>
      <StyledSearch>
        <strong>Please enter your search query below!</strong>
        <form action="submit" onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange}/>
          {/* <label htmlFor="mealtime">Choose a meal time: </label> */}
          <select id="mealtime" name="mealtime" onChange={handleMeal} >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="teatime">Teatime</option>
            <option value="snack">Snack</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </StyledSearch>
      <StyledWrapResults>
      {data?.map((recipe, index) => (
        <StyledResults key={index}>
          <h2>{recipe.recipe.label}</h2>
          <img height="200px" width="200px" src={recipe.recipe.image} />
          <Link to="/details"><strong>More Info</strong></Link>
        </StyledResults>  
      ))}
      </StyledWrapResults>
    </StyledMain>
  )
}

export default Home