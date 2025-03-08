import { Component } from 'react';
import './app.scss';

class App extends Component {
  render() {
    return this.props.children;  // 确保这里正确
  }
}

export default App;
