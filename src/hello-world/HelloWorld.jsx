import React from 'react';

function Welcome(props) {
    return <h1>Welcome {props.name} to Reactjs world!</h1>
}

function HelloWorld() {
    return (
        <h1 className="hello-world">
            Hello World!
        </h1>
    )
}
export { Welcome, HelloWorld };
