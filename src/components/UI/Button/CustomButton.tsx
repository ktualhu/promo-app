import './styles/style.scss';

interface IProps {
  text: string;
  onButtonClick: () => void;
  isDisabled?: boolean;
}

function CustomButton(props: IProps) {
  const { text, isDisabled, onButtonClick } = props;
  return (
    <div className="buttonBlock">
      <button
        className={`customButton`}
        disabled={isDisabled}
        onClick={onButtonClick}
      >
        {text.toLocaleUpperCase()}
      </button>
    </div>
  );
}

export default CustomButton;
