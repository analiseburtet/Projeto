import React from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import keydown from 'react-keydown';
const KEYS = [ 'shift+up', 'shift+down', 'shift+left', 'shift+right' ];
keydown( KEYS )
class ChildComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Layer onKeyDown={this.props.handleKeyDown}>
            
          {[...Array(10)].map((_, i) => (
            <Circle
              key={i}
              x={300} 
              y={200}
              width={40}
              height={40}
              radius={40}
              fill="red"
              shadowBlur={10}
              shadowColor="red"
              shadowBlur={10}
              shadowOpacity={0.6}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
      );
    }
  }
class Home extends React.Component {
    constructor(props) {
        super(props);
      }
    state = {
        counter:0,
        name:"",
        lastName:""
    }

    handleKeyDown(event) {
        console.log('handling a key press');
      }
    handleDragStart = e => {
        e.target.setAttrs({
          shadowOffset: {
            x: 15,
            y: 15
          },
          scaleX: 1.1,
          scaleY: 1.1
        });
      };
      handleDragEnd = e => {
        e.target.to({
          duration: 0.5,
          easing: Konva.Easings.ElasticEaseOut,
          scaleX: 1,
          scaleY: 1,
          shadowOffsetX: 5,
          shadowOffsetY: 5
        });
      };
     



    handleClick = () =>{
        this.setState(prevState=>({
            counter: prevState.counter + 1
        }));
    }
    colorStripClick =  ()=> {
    //handle click events here
  }
    handleChange = (key, value) => {
        this.setState({
            [key]:value
        });
    }
    render(){
        const { name , lastName} = this.state;
            
        return(
        <div>
    <Stage  style={{backgroundColor: "black"}} width={window.innerWidth} height={window.innerHeight}>
        <Layer >
          {[...Array(10)].map((_, i) => (
            <Rect onKeyDown={ this.myMethod }
              key={i}
              x={20}
            y={50}
            width={100}
            height={100}
            fill="green"
            shadowBlur={10}
              shadowColor="green"
              shadowBlur={10}
              shadowOpacity={0.6}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
        <ChildComponent handleKeyDown={() => this.handleKeyDown()} />
      </Stage>
            <input  style={{display: "none"}} type="text"/>
            <p style={{display: "none"}}>Contador: {this.state.counter}</p>
            <button style={{display: "none"}} onClick={this.handleClick}>
                Contar 
            </button>
            <hr/>
            <div style={{display: "none"}}>
                <input type="text"
                value={name}
                        onChange={(event)=>{
                            this.handleChange("name",
                            event.target.value
                            );
                        }

                        }
                />  
                <input type="text"
                value={lastName}
                onChange={(event)=>{
                    this.handleChange("lastName",
                    event.target.value
                    )
                }

                }
                /> 
                <p>{lastName} {name && lastName && ', '} {name}</p>
            </div>
        </div>
        );
    }
}
export default Home;