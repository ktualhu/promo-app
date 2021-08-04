import PhoneFrame from '../PhoneFrame/PhoneFrame';
import CustomButton from '../UI/Button/CustomButton';
import Checkbox from '../UI/Checkbox/Checkbox';
import PhoneNumber from '../UI/PhoneNumber/PhoneNumber';
import Title from '../UI/Title/Title';
import './styles/styles.css';

function PhoneBlock() {
  return (
    <div className="phoneBlock">
      <div style={{ marginBottom: '13px' }}>
        <Title />
      </div>
      <div style={{ marginBottom: '13px' }}>
        <PhoneNumber />
      </div>
      <div style={{ marginBottom: '13px' }}>
        <span className="simpleText">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
      </div>
      <PhoneFrame />
      <div style={{ marginBottom: '19px' }}>
        <Checkbox />
      </div>
      <CustomButton text={'Подтвердить номер'} />
    </div>
  );
}

export default PhoneBlock;
