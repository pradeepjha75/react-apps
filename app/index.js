import React from 'react';
import ReactDOM from 'react-dom';
import Car from './components/Car';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div> Hello World<Car /></div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

