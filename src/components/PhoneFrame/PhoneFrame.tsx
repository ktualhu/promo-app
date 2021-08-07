import { useEffect, useState } from 'react';
import { EDir, keyboardArrowNav } from '../../utils/helpers/keyboardNavigation';
import './styles/styles.css';

interface IProps {
  onPhoneFrameBtnClick: (num: string) => void;
}

function PhoneFrame(props: IProps) {
  const phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [pressedBtn, setPressedBtn] = useState('');
  const [selectedBtn, setSelectedBtn] = useState(-1);

  useEffect(() => {
    if (selectedBtn !== -1) {
      document
        .getElementById(`btn${selectedBtn}`)
        ?.classList.add('frameRow__btn__keyPress');
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Backspace') {
        setPressedBtn(`btn11`);
        props.onPhoneFrameBtnClick('11');
      } else if (event.key === 'Enter') {
        props.onPhoneFrameBtnClick(selectedBtn + '');
      } else if (event.key.match(/^\d+$/)) {
        setPressedBtn(`btn${event.key}`);
        props.onPhoneFrameBtnClick(event.key);
      } else {
        switch (event.key) {
          case 'ArrowLeft': {
            updateSelectedBtn(EDir.left);
            break;
          }
          case 'ArrowUp': {
            updateSelectedBtn(EDir.up);
            break;
          }
          case 'ArrowRight': {
            updateSelectedBtn(EDir.right);
            break;
          }
          case 'ArrowDown': {
            updateSelectedBtn(EDir.down);
            break;
          }
        }
      }
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'Backspace') {
        document
          .getElementById('btn11')
          ?.classList.remove('frameRow__btn__keyPress');
      } else if (event.key.match(/^\d+$/)) {
        document
          .getElementById(`btn${event.key}`)
          ?.classList.remove('frameRow__btn__keyPress');
      }
      setPressedBtn('');
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };
  }, [selectedBtn]);

  useEffect(() => {
    if (pressedBtn) {
      clearSelectedBtn();
      document
        .getElementById(`${pressedBtn}`)
        ?.classList.add('frameRow__btn__keyPress');
    }
  }, [pressedBtn]);

  const updateSelectedBtn = (dir: EDir) => {
    setSelectedBtn((prevSelecteBtn) => {
      document
        .getElementById(`btn${prevSelecteBtn}`)
        ?.classList.remove('frameRow__btn__keyPress');
      return keyboardArrowNav(dir, prevSelecteBtn);
    });
  };

  const updateClickedBtn = (btn: string) => {
    clearSelectedBtn();
    props.onPhoneFrameBtnClick(btn);
  };

  const clearSelectedBtn = () => {
    if (selectedBtn !== -1) {
      document
        .getElementById(`btn${selectedBtn}`)
        ?.classList.remove('frameRow__btn__keyPress');
      setSelectedBtn(-1);
    }
  };

  const renderNumberRow = (startInd: number) => {
    return (
      <div className="frameRow" key={startInd}>
        {phoneNumbers.slice(startInd, startInd + 3).map((val) => {
          return renderNumberCell(val);
        })}
      </div>
    );
  };

  const renderNumberCell = (num: number) => {
    const numStr = num.toString();
    return (
      <button
        className="frameRow__btn"
        onClick={() => updateClickedBtn(numStr)}
        key={numStr}
        id={`btn${numStr}`}
      >
        {numStr}
      </button>
    );
  };

  return (
    <div className="frame">
      {phoneNumbers.map((_, i) => {
        return i % 3 === 0 ? renderNumberRow(i) : null;
      })}
      <div className="frameRow">
        <button
          className="frameRow__btn long"
          onClick={() => updateClickedBtn('11')}
          id={`btn11`}
        >
          СТЕРЕТЬ
        </button>
        <button
          className="frameRow__btn"
          onClick={() => updateClickedBtn('0')}
          id={`btn0`}
        >
          0
        </button>
      </div>
    </div>
  );
}

export default PhoneFrame;
