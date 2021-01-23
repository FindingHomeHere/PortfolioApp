import Link from 'next/link';

import style from './AboutMe.module.css';

const AboutMe = () => (
  <>
    <div className={style['container']}>
      <div className={style['steps']}>
        <div className={style['steps--title']}>
          <h1>Who I am</h1>
        </div>
        <div className={style['steps--box']}>
          <p>
            I am a Colorado Springs, CO based web developer,
            photographer, coffee lover, and general
            creative. Each website I make will have my full
            attention, as it is just as important to me as
            it is to you that the final product is the best
            quality I can produce. While I might be "old
            school" in that I take pride in my work, I do
            use cutting edge technology to make your website
            incredible. Take a look at the next steps down
            below!
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutMe;
