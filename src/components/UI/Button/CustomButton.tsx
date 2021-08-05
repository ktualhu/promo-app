import './styles/style.scss';

interface IProps {
  text: string;
  isDisabled: boolean;
}

function CustomButton(props: IProps) {
  const { text, isDisabled } = props;
  return (
    <div className="buttonBlock">
      <button className={`customButton`} disabled={isDisabled}>
        {text.toLocaleUpperCase()}
      </button>
    </div>
  );
}

export default CustomButton;
