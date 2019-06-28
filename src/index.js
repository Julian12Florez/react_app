/* eslint-disable no-useless-constructor */
// const element=document.createElement('h1');
// element.innerText="Hola React..";
// const container=document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'

ReactDOM.render(<App/>,document.getElementById('root'));

// const user={
//     firstaname:'Julián',
//     lastaname:'Floréz',
//     img:'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'
// }

// function getName(user){
//         return `${user.firstaname}  ${user.lastaname}` 
// }

// function getGreeting(user){
//     if(user){
//         return <h1>Hola {getName(user)}</h1>;
//     }else{
//         return <h1>No se encontro usuario</h1>
//     }
// }
// const name="Julián";
// const element=(
//     <div>
//         <h1>Hola {getName(user)}</h1>
//         <img src={user.img}></img>
//     </div>
// )

// // const element=<h1>Hola {getName(user)}</h1>;
// // const element=<div>{getGreeting(user)}</div>;
// // const element=<img src={user.img}></img>;
// const container=document.getElementById('root');

// ReactDOM.render(element,container);

// class Container extends React.Component{
//     //  user={
//     //     firstaname:'Julián',
//     //     lastaname:'Floréz',
//     //     img:'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'
//     // }
//     user_global=this.props.user;
//     getName(){
//         // console.log(this.user_global);
//         // return "hola";
//         return `${this.user_global.firstaname}  ${this.user_global.lastaname}` 
//     }
//     // getName(user_name){
//     //     return `${user_name.user_name.firstaname}  ${user_name.user_name.lastaname}` 
//     // }
        
//     getGreeting(user){
//         if(user){
//           return <h1> <this.getName/> </h1>;
//         }else{
//           return <h1>No se encontro usuario</h1>
//         }
//     }

//     render(){
//         console.log(this.user_global);
//         return <div>
//               <h1>Hola {this.getName()}</h1>
//               {/* <h1>Hola <this.getName /></h1> */}
//               <img src={this.props.user.img}></img>
//        </div>;
//       }
// }

// Container.defaultProps={
//   user: {firstaname:'Julián',lastaname:'Floréz',img:'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'}
// }
// ReactDOM.render(<Container/>,document.getElementById('root'));

    
// ReactDOM.render(<Welcome username="julian"/>,document.getElementById("welcome"));