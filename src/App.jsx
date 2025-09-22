import Title from './components/Title.jsx';
import React from 'react';
import Calculator from './components/Calculator.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: React.version };
  }


  render() {
    return (
      <div>
        <Calculator />
        <Title>React Version: {this.state.version}</Title>
      </div>
    )
  }

};

export default App;