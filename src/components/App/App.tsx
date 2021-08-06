import { useSelector } from 'react-redux';
import { selectSideBlockState } from '../../app/appSlice';
import { ESideBlockState } from '../../utils/types/sideBlockState';
import PhoneBlock from '../PhoneBlock/PhoneBlock';
import SideBlock from '../SideBlock/SideBlock';
import SuccessBlock from '../SuccessBlock/SuccessBlock';
import './styles/styles.css';

function App() {
  const sideBlockState = useSelector(selectSideBlockState);

  const renderSideBlockContent = () => {
    switch (sideBlockState) {
      case ESideBlockState.PHONE:
        return <SideBlock content={<PhoneBlock />} />;
      case ESideBlockState.SUCCESS:
        return <SideBlock content={<SuccessBlock />} />;
    }
  };

  return (
    <div className="main">
      {sideBlockState === ESideBlockState.NONE
        ? null // screen with promo video should be here
        : renderSideBlockContent()}
    </div>
  );
}

export default App;
