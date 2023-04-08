import { Component } from 'react';
import Counter from './Counter/Counter';

export class App extends Component {
  render() {
    return <Counter initialValue={0} />;
  }
}
