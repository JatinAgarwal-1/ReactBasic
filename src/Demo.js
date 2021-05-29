import React, { Component } from 'react';
import './Demo.css'
// import ReactDOM from 'react-dom';

class Demo extends Component {
    render() {

        return <div>
            <h1> Hello {this.props.name} </h1>
            <p className='main'> This is React website</p>
            {/* Inseted of className we can use class but it is waring sicne class is a reserved keywoerd in js */}
        </div>
        //Return only enclosed DOM (Document Object Model)
    }

}

export default Demo;