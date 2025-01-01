import { Content } from '../components/Content';
import { Nav } from '../components/Nav';
import './Home.css';

function Home() {
  return (
    <>
      <Nav />
      <Content title="Home">
        <section className="message -left">
          <img src="./pame.png" alt="pixel art of me" />
          <div className="nes-balloon from-left">
            <p>Hey, I'm Esteban Munoz Facusse (aka @sopranopillow)!</p>
          </div>
        </section>
        <section>
          <h4>Work</h4>
          <p>
            I work in the Fluent UI team developing components with the Fluent design system. To see more about my work
            check my work page!
          </p>
        </section>
        <section>
          <h4>Interests</h4>
          <p>
            My main intersts are:
            <div className="lists">
              <ul className="nes-list is-circle">
                <li>
                  React: Since it's part of my daily work and has been a big area I've invested time in. I'm particulary
                  interested in Server Side Rendering, React Server Components, and performance.
                </li>
                <li>Game dev: I've done a few projects with GameMaker, Unity, and Monogame.</li>
                <li>
                  ML + DL: I've done projects with ML and DL in the past, so this is always an interesting area to work
                  on.
                </li>
                <li>Anything: I'm always open to work on something new!</li>
              </ul>
            </div>
          </p>
        </section>
        <section>
          <h4>Hobbies</h4>
          <p>
            Outside work I love to:
            <div className="lists">
              <ul className="nes-list is-circle">
                <li>Outdoors: Go on outdoors adventures such as hiking or climbing on real rock.</li>
                <li>
                  Climbing: I love to climb indoors and outdoors, though I mainly get to do it indoors. Gotta keep the
                  fingers strong to type strong code ;).
                </li>
                <li>
                  Video games: I love to play video games, mainly interested in single players games (Stardew Valley has
                  been my favorite for the past few years).
                </li>
              </ul>
            </div>
          </p>
        </section>
      </Content>
    </>
  );
}

export default Home;
