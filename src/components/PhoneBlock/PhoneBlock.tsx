import { useState } from 'react';
import PhoneFrame from '../PhoneFrame/PhoneFrame';
import CustomButton from '../UI/Button/CustomButton';
import Checkbox from '../UI/Checkbox/Checkbox';
import PhoneNumber from '../UI/PhoneNumber/PhoneNumber';
import Title from '../UI/Title/Title';
import './styles/styles.css';

function PhoneBlock() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checked, setChecked] = useState(false);

  const handleFrameBtnClick = (num: string) => {
    if (num === 'X') {
      setPhoneNumber(() => {
        return phoneNumber.slice(0, -1);
      });
    } else {
      if (phoneNumber.length < 10) {
        setPhoneNumber(() => {
          return phoneNumber.concat(num);
        });
      }
    }
  };

  return (
    <div className="phoneBlock">
      <div style={{ marginBottom: '13px' }}>
        <Title />
      </div>
      <div style={{ marginBottom: '13px' }}>
        <PhoneNumber value={phoneNumber} />
      </div>
      <div style={{ marginBottom: '13px' }}>
        <span className="simpleText">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
      </div>
      <PhoneFrame onPhoneFrameBtnClick={(num) => handleFrameBtnClick(num)} />
      <div style={{ marginBottom: '19px' }}>
        <Checkbox
          isChecked={checked}
          onCheckboxClick={(checked) => setChecked(checked)}
        />
      </div>
      <CustomButton text={'Подтвердить номер'} isDisabled={!checked} />
    </div>
  );
}

export default PhoneBlock;
