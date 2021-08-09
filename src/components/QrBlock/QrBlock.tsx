import qr from '../../img/qr.png';
import './styles/styles.css';

function QrBlock() {
  return (
    <div className="qrBlock">
      <div className="qrBlock__text">
        <span>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</span>
      </div>
      <img src={qr} alt="qr" />
    </div>
  );
}

export default QrBlock;
