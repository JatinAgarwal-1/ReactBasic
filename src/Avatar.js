import React, { Component } from 'react';
import AvatarList from './AvatarList';
import './AvatarList.css'

// const Avatar = () => {
//     return (
//         <div className='  avatar-style'>
//             <img src='https://joeschmoe.io/api/v1/random'></img>
//             <h1 className='tc'>Hello</h1>
//         </div>
//     );
// };

class Avatar extends Component {
    constructor() {
        super();
        this.state = {
            head: "Welcome To React Basic"
        }
    };

    changeHead() {
        this.setState({
            head: "Time To Learn Advance"
        })
    }

    render() {
        const array = [
            {
                name1: 'Jatin',
                work: 'HTML'
            },
            {
                name1: 'Agarwal',
                work: 'JavaScript'
            },
            {
                name1: 'Web',
                work: 'BootStrap'
            },
            {
                name1: 'Developer',
                work: 'React'
            }
        ];
        const arrayList = array.map((card, i) => {
            return <AvatarList name={array[i].name1} work={array[i].work} />
        })
        return (<div >
            <h1 className='tc' >{this.state.head}</h1>
            {arrayList}
            <button onClick={() => this.changeHead()} className='ma3'>OK</button>
        </div>)

    }
}

export default Avatar;