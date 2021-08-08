import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSideBlockState } from '../../app/appSlice';
import { ESideBlockState } from '../../utils/types/sideBlockState';
import PhoneFrame from '../PhoneFrame/PhoneFrame';
import CustomButton from '../UI/Button/CustomButton';
import Checkbox from '../UI/Checkbox/Checkbox';
import PhoneNumber from '../UI/PhoneNumber/PhoneNumber';
import Title from '../UI/Title/Title';
import './styles/styles.css';

interface IPhoneNumberValid {
  valid: boolean;
  msg: string;
}

function PhoneBlock() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checked, setChecked] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState<IPhoneNumberValid>({
    valid: true,
    msg: '',
  });
  const dispatch = useDispatch();

  const handleFrameBtnClick = (num: string) => {
    setPhoneNumberValid({ valid: true, msg: '' });

    if (num === '11') {
      setPhoneNumber((prevPhoneNumber) => {
        return prevPhoneNumber.slice(0, -1);
      });
    } else {
      if (phoneNumber.length < 10) {
        setPhoneNumber((prevPhoneNumber) => {
          return prevPhoneNumber.concat(num);
        });
      }
    }
  };

  const handleSubmitButtonClick = async () => {
    try {
      const res = await axios.get('http://apilayer.net/api/validate', {
        params: {
          access_key: '0e2c8da5c19bf782f9300c92ea219004',
          number: `${phoneNumber}`,
          country_code: 'RU',
          format: '1',
        },
      });
      if (!res.data.valid) throw new Error('НЕВЕРНО ВВЕДЁН НОМЕР');
      dispatch(changeSideBlockState(ESideBlockState.SUCCESS));
    } catch (e) {
      setPhoneNumberValid({ valid: false, msg: e.message });
    }
  };

  return (
    <div className="phoneBlock">
      <div className="phoneBlock_panels">
        <Title
          text={'Введите ваш номер мобильного телефона'}
          fontSize={26}
          fontWeight={400}
        />
      </div>
      <div className="phoneBlock_panels">
        <PhoneNumber value={phoneNumber} isValid={phoneNumberValid.valid} />
      </div>
      <div className="phoneBlock_panels">
        <span className="simpleText">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
      </div>
      <PhoneFrame onPhoneFrameBtnClick={(num) => handleFrameBtnClick(num)} />
      <div className="phoneBlock_panels">
        {phoneNumberValid.valid ? (
          <Checkbox
            isChecked={checked}
            onCheckboxClick={(checked) => setChecked(checked)}
          />
        ) : (
          <div className="errorMessage">
            <span>{phoneNumberValid.msg}</span>
          </div>
        )}
      </div>
      <CustomButton
        text={'Подтвердить номер'}
        isDisabled={!checked || phoneNumber.length < 10}
        onButtonClick={handleSubmitButtonClick}
      />
    </div>
  );
}

export default PhoneBlock;
