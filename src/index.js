import React from 'react';
import { createRoot } from 'react-dom/client';

function component()
{
    const element = document.createElement('div');
    element.id = 'hello-example';
    
    return element;
}

document.body.appendChild(component());

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}
const container = document.getElementById('hello-example');
const root = createRoot(container);
root.render(<Timer />);