import './styles/styles.css';

function SuccessBlock() {
  return (
    <div className="successBlock">
      <div className="successBlock__panels">
        <span className="panels__title">ЗАЯВКА ПРИНЯТА</span>
      </div>
      <div className="successBlock__panels">
        <span>
          Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.{' '}
        </span>
      </div>
    </div>
  );
}

export default SuccessBlock;
