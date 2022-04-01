import React from 'react';
import ReactDOM from 'react-dom';

function component()
{
    const element = document.createElement('div');
    element.id = 'hello-example';
    
    return element;
}

document.body.appendChild(component());

class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementById('hello-example'));