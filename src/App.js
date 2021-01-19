import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import NavBar from './components/NavBar'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

// const cartPage = (props) => {
//   return (
//     <Page
//       cartView={true}
//     />
//   );
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Page} />
            <Route path='*' component={Page}/>
          {/* <NavItem href='#'><Route exact path='/cart' component={Cart} /></NavItem> */}
        </Switch>
      </div>
    );
  }
}

export default App;
