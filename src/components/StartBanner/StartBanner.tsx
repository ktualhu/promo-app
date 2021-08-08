import Title from '../UI/Title/Title';
import qr from '../../img/qr.png';
import './styles/styles.css';
import { useDispatch } from 'react-redux';
import { changeSideBlockState } from '../../app/appSlice';
import { ESideBlockState } from '../../utils/types/sideBlockState';

function StartBanner() {
  const dispatch = useDispatch();

  return (
    <div className="startBanner">
      <div className="startBanner__row">
        <Title
          text={'ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!'}
          fontSize={19}
          fontWeight={500}
        />
      </div>
      <div className="startBanner__row">
        <img src={qr} alt="qr" />
      </div>
      <div className="startBanner__row">
        <Title
          text={'Сканируйте QR-код или нажмите ОК'}
          fontSize={17}
          fontWeight={400}
        />
      </div>
      <div className="startBanner__row">
        <button
          className="row__btn"
          onClick={() => dispatch(changeSideBlockState(ESideBlockState.PHONE))}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default StartBanner;
