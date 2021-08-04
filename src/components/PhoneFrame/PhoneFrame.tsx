import './styles/styles.css';

function PhoneFrame() {
  return (
    <div className="frame">
      <div className="frameRow">
        <button className="frameRow__btn">1</button>
        <button className="frameRow__btn">2</button>
        <button className="frameRow__btn">3</button>
      </div>
      <div className="frameRow">
        <button className="frameRow__btn">4</button>
        <button className="frameRow__btn">5</button>
        <button className="frameRow__btn">6</button>
      </div>
      <div className="frameRow">
        <button className="frameRow__btn">7</button>
        <button className="frameRow__btn">8</button>
        <button className="frameRow__btn">9</button>
      </div>
      <div className="frameRow">
        <button className="frameRow__btn long">СТЕРЕТЬ</button>
        <button className="frameRow__btn">0</button>
      </div>
    </div>
  );
}

export default PhoneFrame;
