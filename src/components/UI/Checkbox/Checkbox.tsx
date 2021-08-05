import React from 'react';
import './styles/styles.css';

interface IProps {
  onCheckboxClick: (checked: boolean) => void;
  isChecked: boolean;
}

function Checkbox(props: IProps) {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.onCheckboxClick(e.target.checked)}
      />
      <label htmlFor="checkbox">
        Согласие на обработку персональных данных
      </label>
    </React.Fragment>
  );
}

export default Checkbox;
