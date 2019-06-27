// const element=document.createElement('h1');
// element.innerText="Hola React..";
// const container=document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const user={
    firstaname:'Julián',
    lastaname:'Floréz',
    img:'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'
}

function getName(user){
        return `${user.firstaname}  ${user.lastaname}` 
}

function getGreeting(user){
    if(user){
     return <h1>Hola {getName(user)}</h1>;
    }else{
        return <h1>No se encontro usuario</h1>
    }
}
const name="Julián";
const element=(
    <div>
        <h1>Hola {getName(user)}</h1>
        <img src={user.img}></img>
    </div>
)

// const element=<h1>Hola {getName(user)}</h1>;
// const element=<div>{getGreeting(user)}</div>;
// const element=<img src={user.img}></img>;
const container=document.getElementById('root');

ReactDOM.render(element,container);
