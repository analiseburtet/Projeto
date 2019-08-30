import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import routesConfig from './routesConfig';
import AppCss from "./App.css"

import {Route} from 'react-router-dom';
import {StickyContainer} from 'react-sticky'

class App extends React.Component {
  render (){
    return (
      <div className="App">
      <StickyContainer>
        <Toolbar miniMenuClick={this.miniMenuClick}/>
        </StickyContainer>
      {routesConfig.map((value, key)=>{
        return <Route
        key = {key}
        path={value.path}
        component={value.component}
        exact={value.exact}
        ></Route>
      })}
      </div>
    );
  }
}

export default App;