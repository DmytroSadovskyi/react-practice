import './ColorPicker.css';
import { Component } from 'react';
class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const { activeOptionIdx } = this.state;
    const optionClasses = ['ColorPicker__option'];
    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    const { color } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>
          Chosen color:<span style={{ color: color }}> {label}</span>
        </p>

        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                this.setActiveIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
