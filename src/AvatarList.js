import React, { Component } from 'react';
import './AvatarList.css'
import 'tachyons'


class AvatarList extends Component {
    render() {
        return (<div className='avatar-style ma4 bg-light-purple dib grow shadow-4' >
            <img src={`https://joeschmoe.io/api/v1/random${this.props.name}`}></img>
            <h2 className='tc'>{this.props.name}</h2>
            <h4 className='tc'>{this.props.work}</h4>
        </div >)

    }
}

export default AvatarList;