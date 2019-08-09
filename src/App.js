import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import MiniMenu from './components/MiniMenu/MiniMenu';
import Overlay from './components/Overlay/Overlay';
import About from './components/AboutMe/About';
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig';

class App extends React.Component {
  state = {
    openedMenu: false
  };

  miniMenuClick = () => {
    this.setState((prevState) => {
      return {openedMenu: !prevState.openedMenu}
    });
  };
  overlayClick = () => {
    this.setState({openedMenu: false});
  };
  render (){
    let miniMenu;
    let overlay;
    if(this.state.openedMenu){
      miniMenu =  <MiniMenu/>;
      overlay = <Overlay click={this.overlayClick}/>;
    }
    return (
      <div>
      <div className="App">
        <Toolbar miniMenuClick={this.miniMenuClick}/>
        {miniMenu}
        {overlay}
        <main>
          <About/>
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
        </main>
      </div>
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