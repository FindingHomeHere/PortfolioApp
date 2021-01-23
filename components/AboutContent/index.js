import Link from 'next/link';

import { IoSearch, IoBuildSharp } from 'react-icons/io5';
import {
  BsPencilSquare,
  BsCloudUpload,
} from 'react-icons/bs';

import style from './AboutContent.module.css';

const AboutContent = () => (
  <>
    <div className={style['about-container']}>
      <div className={style['about-steps']}>
        <div className={style['about-steps--title']}>
          <h1>How it works</h1>
        </div>
        <div className={style['about-steps--content']}>
          <div className={style['about-steps--steps']}>
            <div className={style['about-steps--box']}>
              <div className={style['about-steps--header']}>
                <IoSearch
                  className={style['about-steps--icon']}
                />
                <h3
                  className={style['about-steps--heading']}
                >
                  <strong>Step 1:</strong> Discover
                </h3>
              </div>

              <p className={style['about-steps--text']}>
                I research your business (branding, needs,
                etc) and competition to gain perspective on
                best practices, design influence, and common
                functionality. I then meet with shareholders
                to discuss functional needs, as well as
                aesthetics of the site. This step takes
                around 2 days.
              </p>
            </div>
            <div className={style['about-steps--box']}>
              <div className={style['about-steps--header']}>
                <BsPencilSquare
                  className={style['about-steps--icon']}
                />
                <h3
                  className={style['about-steps--heading']}
                >
                  <strong>Step 2:</strong> Design
                </h3>
              </div>

              <p className={style['about-steps--text']}>
                After the research, I assemble the data that
                was collected, plan the approach, and build
                an initial mockup of the site. This is done
                within one day depending on project size.
              </p>
            </div>
            <div className={style['about-steps--box']}>
              <div className={style['about-steps--header']}>
                <IoBuildSharp
                  className={style['about-steps--icon']}
                />
                <h3
                  className={style['about-steps--heading']}
                >
                  <strong>Step 3:</strong> Develop
                </h3>
              </div>

              <p className={style['about-steps--text']}>
                upon approval of the design, the develoment
                stage begins. Implementing each part of a
                website varies in time, and a timeline will
                be drafted during the discover process.
              </p>
            </div>
            <div className={style['about-steps--box']}>
              <div className={style['about-steps--header']}>
                <BsCloudUpload
                  className={style['about-steps--icon']}
                />
                <h3
                  className={style['about-steps--heading']}
                >
                  <strong>Step 4:</strong> Deploy
                </h3>
              </div>

              <p className={style['about-steps--text']}>
                This is the fun part! You get to see your
                site in its (nearly) final form. Any
                problems will be addressed and fixed, and
                after you are happy with it, the site will
                be deployed online.
              </p>
            </div>
          </div>
        </div>
        <div className={style['steps--contact']}>
          <h2 className={style['contact--heading']}>
            See some examples
          </h2>
          <Link href="/work">
            <button className={style['contact--button']}>
              view my work
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;
