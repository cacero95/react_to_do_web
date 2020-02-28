import React from 'react';

// el props del siguiente metodo que entra es un componente
const Rainbow = (WrappedComponent) =>{
    const colours = ['red','pink','orange','blue','green','yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';
    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )   
    }
}
export default Rainbow;