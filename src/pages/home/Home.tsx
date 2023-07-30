import axios from "axios";
import { useEffect, useState, ChangeEvent, FormEvent, MouseEventHandler } from "react";
import { StyledMain, StyledSearch, StyledWrapResults, StyledResults } from "../home/styled";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";
import { toast } from "react-toastify";

const Home = () => {
  const { data, setData, setSelectedRecipe, dataCache, updateDataCache } = useRecipeContext();
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("dinner");
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  useEffect(() => {
    if (!dataCache[url]) {
      getData()
      console.log("Data called from Edamam")
    } else {
      setData(dataCache[url])
    }
  }, [])

  const getData = () => {


    axios.get(url)
    .then(resp => {
      setData(resp?.data?.hits || []);
      updateDataCache(url, resp?.data?.hits || []);
    })
    .catch(Error => {
      toast.error(Error)
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
    if (!dataCache[url]) {
      getData()
    } else {
      setData(dataCache[url])
    }
  }

  const handleDetails: MouseEventHandler <HTMLAnchorElement> = (e) => {
    const linkElement = e.currentTarget as HTMLAnchorElement;
    const cardElement = linkElement.parentElement;
    const indexAtt = cardElement?.getAttribute("data-index") || "";;
  
    if (indexAtt !== null) {
      const index: string = indexAtt
      const parsedIndex = parseInt(index, 10);
      const clickedRecipe = data?.[parsedIndex]?.recipe;
      
      if (clickedRecipe) {
        setSelectedRecipe({recipe: clickedRecipe});
      }
    }

  }


  return (
    <StyledMain>
      <h1>A Recipe App</h1>
      <h3>Powered by <a style={{textDecoration: "none", color: "green",}} href="https://www.edamam.com/" target="_blank">Edamam</a></h3>
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
        <StyledResults key={index} data-index={index}>
          <h2>{recipe.recipe.label}</h2>
          <img height="200px" width="200px" src={recipe.recipe.image} />
          <Link to="/details" onClick={handleDetails}><strong>More Info</strong></Link>
        </StyledResults>  
      ))}
      </StyledWrapResults>
    </StyledMain>
  )
}

export default Home