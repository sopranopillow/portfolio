import * as React from 'react';
import './Home.css';
import { Page } from './Page';
import AboutMe from '../../imgs/pame.png';
import Work from '../../imgs/work.png';
import Projects from '../../imgs/projects.png';
import CurrentWork from '../../imgs/currentwork.png';

export const Home = () => {
  return (
    <Page>
      <div className="container">
        <div className="header">
          <Taskbar>
            <Clock />
            <div
              className="icon"
              style={{
                fontSize: '30px',
                backgroundColor: 'green',
                borderRightColor: 'green',
                borderBottomColor: 'green',
              }}
            >
              ®
            </div>
            <div
              className="icon exit"
              style={{ fontSize: '34px', backgroundColor: 'red', borderRightColor: 'red', borderBottomColor: 'red' }}
            >
              X
            </div>
          </Taskbar>
        </div>
        <div className="content">
          {pages.map((page, k) => (
            <IconButton
              title={page}
              content={Object.keys(pageContents).includes(page) ? pageContents[page] : <>page</>}
              key={k}
            >
              {Object.keys(pageIcons).includes(page) ? pageIcons[page] : page}
            </IconButton>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
  title?: string;
  content?: React.ReactElement;
};

const IconButton: React.FC<IconButtonProps> = props => {
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <div>
      <Modal show={showPanel} onClose={() => setShowPanel(false)}>
        {props.content}
      </Modal>
      <button onClick={e => setShowPanel(true)} className="iconButton">
        {props.children}
        {props.title}
      </button>
    </div>
  );
};
const pages: string[] = ['About me', 'About my work', 'Projects', 'Current work']; //, 'The Oregon Trail'];
const pageIcons: { [key: string]: React.ReactElement } = {
  'About me': <img src={AboutMe} alt="portrait" />,
  'About my work': <img src={Work} alt="briefcase icon" />,
  Projects: <img src={Projects} alt="lightbulb" />,
  'Current work': <img src={CurrentWork} alt="person looking at computer" />,
};
const pageContents: { [key: string]: React.ReactElement } = {
  'About me': (
    <span>
      <h1>About me</h1>
      <p>
        I'm a Software Engineer working at Microsoft with the Fluent UI team. I'm currently working on components with a
        stack: TS, React, Webpack. Some of my interests include: web development, game development, video games, machine
        learning, and art in general.
      </p>
    </span>
  ),
  'About my work': (
    <span>
      <h1>About my work</h1>
      <p>
        You can check out some of my current work <a href="https://react.fluentui.dev">here</a> and{' '}
        <a href="https://www.github.com/microsoft/fluentui">here</a>.
      </p>
    </span>
  ),
  Projects: (
    <span>
      <h1>Past projects</h1>
      <p>
        - Small DOL project that some coworkers and I work in sometimes.{' '}
        <a href="https://github.com/sopranopillow/FluentUI-v9-playground">link</a>
        <br />- Random python scripts that I've worked in the past.{' '}
        <a href="https://github.com/sopranopillow/python_scripts">link</a>
        <br />- Path finding exercise for a class when I was in university.{' '}
        <a href="https://github.com/sopranopillow/CS4320-Search-and-Path-Finding">link</a>
        <br />- Game I made in high school for a philosophy class.{' '}
        <a href="https://github.com/sopranopillow/Dream-Theory">link</a>
        <br />- Mobile game I made high school for AP CS.{' '}
        <a href="https://github.com/sopranopillow/FinalProjectCAT">link</a>
        <br />- This portfolio, note that there are a few past versions of this portfolio. This is probably the 10th
        time I've re-done this project. Sorry for the spaghetti code :(.{' '}
        <a href="https://github.com/sopranopillow/portfolio">link</a>
      </p>
    </span>
  ),
  'Current work': (
    <span>
      <h1>Current work</h1>
      <p>
        I'm currently working on React components for the Fluent UI design system. While this is my current job, I'm
        currenlty interested in working on game development on the side and will start a project soon.
      </p>
    </span>
  ),
};
