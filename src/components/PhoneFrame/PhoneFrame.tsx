import './styles/styles.css';

interface IProps {
  onPhoneFrameBtnClick: (num: string) => void;
}

function PhoneFrame(props: IProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderNumberRow = (startInd: number) => {
    return (
      <div className="frameRow">
        {numbers.slice(startInd, startInd + 3).map((val) => {
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
        onClick={() => props.onPhoneFrameBtnClick(numStr)}
      >
        {numStr}
      </button>
    );
  };

  return (
    <div className="frame">
      {numbers.map((_, i) => {
        return i % 3 === 0 ? renderNumberRow(i) : null;
      })}
      <div className="frameRow">
        <button
          className="frameRow__btn long"
          onClick={() => props.onPhoneFrameBtnClick('X')}
        >
          СТЕРЕТЬ
        </button>
        <button
          className="frameRow__btn"
          onClick={() => props.onPhoneFrameBtnClick('0')}
        >
          0
        </button>
      </div>
    </div>
  );
}

export default PhoneFrame;
