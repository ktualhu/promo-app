import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSideBlockState } from '../../app/appSlice';
import { ESideBlockState } from '../../utils/types/sideBlockState';
import PhoneBlock from '../PhoneBlock/PhoneBlock';
import SideBlock from '../SideBlock/SideBlock';
import StartBanner from '../StartBanner/StartBanner';
import SuccessBlock from '../SuccessBlock/SuccessBlock';
import bgVideo from '../../video/video.webm';
import './styles/styles.css';
import { useEffect } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(false);
  const sideBlockState = useSelector(selectSideBlockState);

  useEffect(() => {
    if (showBanner) setShowBanner(false);
  }, [sideBlockState]);

  const renderSideBlockContent = () => {
    switch (sideBlockState) {
      case ESideBlockState.PHONE:
        return <SideBlock content={<PhoneBlock />} />;
      case ESideBlockState.SUCCESS:
        return <SideBlock content={<SuccessBlock />} />;
    }
  };

  return (
    <div
      className={`main ${sideBlockState !== ESideBlockState.NONE && 'bgImg'}`}
    >
      {sideBlockState === ESideBlockState.NONE ? (
        <React.Fragment>
          <video
            autoPlay
            loop
            muted
            onPlay={() => setTimeout(() => setShowBanner(true), 5000)}
            style={{ position: 'absolute', width: '100%' }}
          >
            <source src={bgVideo} type="video/webm" />
          </video>
          {showBanner ? <StartBanner /> : null}
        </React.Fragment>
      ) : (
        renderSideBlockContent()
      )}
    </div>
  );
}

export default App;
