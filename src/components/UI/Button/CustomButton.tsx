import './styles/style.scss';

interface IProps {
  text: string;
}

function CustomButton(props: IProps) {
  return (
    <div className="buttonBlock">
      <button className="customButton disabled" disabled={true}>
        {props.text.toLocaleUpperCase()}
      </button>
    </div>
  );
}

export default CustomButton;
