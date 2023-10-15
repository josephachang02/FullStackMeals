import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [meals, setMeals] = useState([]);


    useEffect(() => {
      // go get the data, put it in state
      axios({
          method: "GET",
          url: "http://localhost:3000/meals"
      }).then((response) => {
        setMeals(response.data)
      });
      // .catch((error) => {
      //   console.error("error fetching data:", error);
      // });

    }, [])

  return (
    <>
      <h1>My Meals App</h1>
      {meals.map((meal) => {
      return (
        <div key={JSON.stringify(meal)}>
          <div>{meal.name}</div>
          <img src={meal.picture}/>
          <div>{meal.ingredients}</div>
          <div>{meal.instructions}</div>
      </div>
      )
    })}
    </>
  )
}

export default App