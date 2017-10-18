import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <header className="Hello-header">
          <h1 className="Hello-title">Hello World!</h1>
        </header>
        <p className="Hello-intro">
          I did it! I made a <code>.js</code> file in the src folder.
        </p>
      </div>
    );
  }
}

export default Hello;
