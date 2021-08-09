import './styles/styles.css';

interface IProps {
  text: string;
  fontSize: number;
  fontWeight: number;
}

function Title(props: IProps) {
  const { text, fontSize, fontWeight } = props;
  return (
    <span className="title" style={{ fontSize, fontWeight }}>
      {text}
    </span>
  );
}

export default Title;
