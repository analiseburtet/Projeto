import React from 'react';
import HomeCss from './Home.css'


class Home extends React.Component {
    render(){      
        return(
        <div className="secondDiv">
            <div className="container">
              <div className="items">
                <h1>#About Me:</h1>
                <p>lorem ipsum</p>
              </div>
            </div>
            <div className="items">
                <h1>#Random Stuff:</h1>
                <p>lorem ipsum</p>
              </div>
        </div>
        );
    }
}
export default Home;