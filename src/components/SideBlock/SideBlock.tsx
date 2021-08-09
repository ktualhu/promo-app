import React from 'react';
import QrBlock from '../QrBlock/QrBlock';
import CloseButton from '../UI/CloseButton/CloseButton';
import './styles/styles.css';

interface IProps {
  content: JSX.Element;
}

function SideBlock(props: IProps) {
  const { content } = props;
  return (
    <React.Fragment>
      <div className="content">{content}</div>
      <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
        <CloseButton />
      </div>
      <QrBlock />
    </React.Fragment>
  );
}

export default SideBlock;
