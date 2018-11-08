import React, { Component } from 'react';

/*
//Example 5
export class HelloMessage extends Component {
  render() {
      let message = "Hello World!";
      return <h1>{message}</h1>;
  }
}

*/

/*
// Example 6

class HelloMessage extends Component {
  render() {
      let message = "Hello World!";
      return <h1>{message}</h1>;
  }
}
export default class App extends Component {
    render() {
      return (
        <div>
          <header className="jumbotron">
            <HelloMessage />
          </header>
          <main>
            <p>
              Hi
            </p>
          </main>
        </div>
      );
    }
}

*/

/*
// Example 7 - add buttons and blue style to the background color


class HelloMessage extends Component {
  render() {
      let message = "Hello World!";
      return <h1>{message}</h1>;
  }
}

class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary rounded-circle">Hi</button>
    )
  }
}
export default class App extends Component {
    render() {
      return (
        <div>
          <header className="jumbotron">
            <HelloMessage />
          </header>
          <main>
            <p>
              <Button />
              <Button />
              <Button />
            </p>
          </main>
        </div>
      );
    }
}

*/
// Example 8 - pass in attributes through the props


class HelloMessage extends Component {
  render() {
      let message = "Hello World!";
      return <h1>{message}</h1>;
  }
}

class Button extends Component {
  render() {
    console.log(this.props);
    return (
      <button className="btn btn-primary rounded-circle">{this.props.text}</button>
    )
  }
}
export default class App extends Component {
    render() {
      
      let buttonLables = [1,2,3];
      
      return (
        <div>
          <header className="jumbotron">
            <HelloMessage />
          </header>
          <main>
            <p>
              <Button text={buttonLables[0]}/>
              <Button text={buttonLables[1]}/>
              <Button text={buttonLables[2]}/>
            </p>
          </main>
        </div>
      );
    }
}