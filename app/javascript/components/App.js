import React from "react"

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Detail from './Detail'
import List from './List'
import NewList from './NewList'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         hey
//       </div>
//     )
//   }
// }
// export default App

class App extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
         <h2>Click to See the Listing of Available Apartments in San Diego</h2>
        <Switch>
          <Route
            path='/details/:id'
            render={(props) => (
                <Detail {...props} />
              )}
          />
          <Route
            path='/listings'
            render={(props) =>(
              <List {...props} />
            )}
          />

          <Route
            path='/new'
            render={(props) =>(
              <NewList {...props} />
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

          
          {/* <ul>
            { apartments.map((apartment, index) => {
              <li key={index}>
                
                  { apartment.address }
              
              </li>
            })}
          </ul> */}
        </div>
        </Router>

    );
  }
}

export default App
