import Title from '../UI/Title/Title';
import './styles/styles.css';

function SuccessBlock() {
  return (
    <div className="successBlock">
      <div className="successBlock__panels">
        <Title text={'ЗАЯВКА ПРИНЯТА'} fontSize={32} fontWeight={700} />
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
