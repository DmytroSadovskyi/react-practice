import { Component } from 'react';
import Value from './Value/Value';
import Controls from './Controls/Controls';
class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div
        style={{
          marginTop: '40px',
          padding: '10px',
          width: '200px',
          marginRight: 'auto',
          marginLeft: 'auto',
          outline: '3px solid black',
        }}
      >
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
