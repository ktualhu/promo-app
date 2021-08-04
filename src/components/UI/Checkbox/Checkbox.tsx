import React from 'react';
import './styles/styles.css';

function Checkbox() {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onClick={() => console.log('click')}
      />
      <label htmlFor="checkbox">
        Согласие на обработку персональных данных
      </label>
    </React.Fragment>
  );
}

export default Checkbox;
