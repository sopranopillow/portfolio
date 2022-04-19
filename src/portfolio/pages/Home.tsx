/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import { Page } from './Page';

export const Home = () => {
  return (
    <Page>
      <div className="container">
        <div className="header">
          <Taskbar>
            <div className="icon" />
            <Clock />
            <div className="icon" />
            {/* This should be some tracker */}
            <div className="icon" />
            <div className="icon" />
          </Taskbar>
        </div>
        <div className="content">
          {['About me', 'About my work', 'Projects', 'Current work'].map(page => (
            <IconButton>{page}</IconButton>
          ))}
        </div>
      </div>
    </Page>
  );
};

const Taskbar: React.FC = props => {
  return <div className="taskbar pixel-border">{props.children}</div>;
};

const Clock: React.FC = props => {
  const [date, setDate] = React.useState(new Date());
  const refresh = () => setDate(new Date());

  React.useEffect(() => {
    const timerId = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <span>{date.toLocaleDateString()}</span>
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
};

type ModalProps = {
  onClose: () => void;
  show: boolean;
};

const Modal: React.FC<ModalProps> = props => {
  return props.show ? (
    <div className="modal">
      <div className="modalContent">
        <div>
          <button className="closeButton" onClick={props.onClose}>
            x
          </button>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  ) : null;
};

type IconButtonProps = {
  icon?: string;
};

const IconButton: React.FC<IconButtonProps> = props => {
  const [showPanel, useShowPanel] = React.useState(false);

  return (
    <div>
      <button onClick={() => useShowPanel(true)} className="iconButton">
        {props.icon}
      </button>
      <Modal show={showPanel} onClose={() => useShowPanel(false)}>
        {props.children}
      </Modal>
    </div>
  );
};
