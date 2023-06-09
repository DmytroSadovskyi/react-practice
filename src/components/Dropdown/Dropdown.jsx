// import { Component } from 'react';
import './Dropdown.css';
import { useState } from 'react';

//  використання компонента-класа
// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     const { visible } = this.state;
//     return (
//       <div className="Dropdown">
//         <button
//           type="button"
//           className={
//             visible ? 'Dropdown__toggle--show' : 'Dropdown__toggle--hide'
//           }
//           onClick={this.toggle}
//         >
//           {visible ? 'Hide' : 'Show'}
//         </button>

//         {visible && <div className="Dropdown__menu">Dropdown menu</div>}
//       </div>
//     );
//   }
// }
//  той самий функціонал, тільки через хуки
const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="Dropdown">
      <button
        type="button"
        className={
          visible ? 'Dropdown__toggle--show' : 'Dropdown__toggle--hide'
        }
        onClick={toggle}
      >
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && <div className="Dropdown__menu">Dropdown menu</div>}
    </div>
  );
};

export default Dropdown;
