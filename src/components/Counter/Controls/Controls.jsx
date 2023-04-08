const Controls = ({ onDecrement, onIncrement }) => (
  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
    <button type="button" onClick={onDecrement}>
      -1
    </button>
    <button type="button" onClick={onIncrement}>
      +1
    </button>
  </div>
);

export default Controls;
