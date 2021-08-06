import './styles/styles.css';

interface IProps {
  content: JSX.Element;
}

function SideBlock(props: IProps) {
  const { content } = props;
  return <div className="content">{content}</div>;
}

export default SideBlock;
