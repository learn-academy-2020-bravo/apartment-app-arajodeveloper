import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Detail from './Detail'
import List from './List'
import NewList from './NewList'



const App = props => {
  //Create an empty array to hold all the cats
  const [apartments, setNewApartments] = useState([])
  const {
    logged_in,
    sign_in_route,
    sign_out_route
  } = props
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabApartments()},[])

  async function grabApartments () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/listing")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewApartments(data)
      }
    } catch (err) {
        console.log(err)
    }
  }


  return (
   <Router>
         <h2>Available Apartments in San Diego</h2>
        <Switch>
          <Route
            path='/details/:id'
            render={(props) => (
                <Detail {...props} apartments={apartments} />
              )}
          />
          <Route
            path='/apartments'
            render={(props) =>(
              <List {...props} apartments={apartments} />
            )}
          />
          <Route
            path='/new'
            render={(props) =>(
              <NewList {...props} apartments={apartments} />
            )}
            />
        </Switch>
        <div>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }   
        </div>
    </Router>   

  );  
}


export default App
