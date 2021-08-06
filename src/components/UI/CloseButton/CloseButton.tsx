import { useDispatch } from 'react-redux';
import { changeSideBlockState } from '../../../app/appSlice';
import { ESideBlockState } from '../../../utils/types/sideBlockState';
import CloseSVG from '../../../img/close.svg';
import './styles/styles.css';

function CloseButton() {
  const dispatch = useDispatch();
  return (
    <button
      className="closeButton"
      onClick={() => dispatch(changeSideBlockState(ESideBlockState.NONE))}
    >
      <img src={CloseSVG} />
    </button>
  );
}

export default CloseButton;
