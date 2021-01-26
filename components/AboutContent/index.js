import Link from 'next/link';

import { IoSearch, IoBuildSharp } from 'react-icons/io5';
import {
  BsPencilSquare,
  BsCloudUpload,
} from 'react-icons/bs';

import style from './AboutContent.module.css';

const AboutContent = () => (
  <>
    <div className={style['container']}>
      <div className={style['steps']}>
        <div className={style['steps--title']}>
          <h1>How it works</h1>
        </div>
        <div className={style['steps--content']}>
          <div className={style['steps--steps']}>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <IoSearch
                  className={style['steps--icon']}
                />
                <h3 className={style['steps--heading']}>
                  <strong>Step 1:</strong> Discover
                </h3>
              </div>

              <p className={style['steps--text']}>
                I research your business (branding, needs,
                etc) and competition to gain perspective on
                best practices, design influence, and common
                functionality. I then meet with shareholders
                to discuss functional needs, as well as
                aesthetics of the site. This step takes
                around 2 days.
              </p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <BsPencilSquare
                  className={style['steps--icon']}
                />
                <h3 className={style['steps--heading']}>
                  <strong>Step 2:</strong> Design
                </h3>
              </div>

              <p className={style['steps--text']}>
                After the research, I assemble the data that
                was collected, plan the approach, and build
                an initial mockup of the site. This is done
                in 1-3 days depending on project size.
              </p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <IoBuildSharp
                  className={style['steps--icon']}
                />
                <h3 className={style['steps--heading']}>
                  <strong>Step 3:</strong> Develop
                </h3>
              </div>

              <p className={style['steps--text']}>
                Upon approval of the design, the develoment
                stage begins. Implementing each part of a
                website varies in time, and a timeline will
                be drafted during the discover process.
              </p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <BsCloudUpload
                  className={style['steps--icon']}
                />
                <h3 className={style['steps--heading']}>
                  <strong>Step 4:</strong> Deploy
                </h3>
              </div>

              <p className={style['steps--text']}>
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
          <Link href="/">
            <button className={style['contact--button']}>
              See some examples
            </button>
          </Link>
        </div>
        <div className={style['steps--title']}>
          <h1>Services</h1>
        </div>
        <div className={style['steps--content']}>
          <div className={style['steps--steps']}>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <h3 className={style['steps--heading']}>
                  Full stack development
                </h3>
              </div>

              <p className={style['steps--text']}>
                "Full stack" is the term we use for websites
                like facebook, google, or amazon. These
                sites use databases to store their
                information. If you can log in to a website,
                or there is a store built in, then it is a
                full stack project.{' '}
              </p>
              <p>Starting at $60/hour.</p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <h3 className={style['steps--heading']}>
                  Static web development
                </h3>
              </div>

              <p className={style['steps--text']}>
                Static websites are simple, fast sites. They
                are great for portfolios and landing pages.
              </p>
              <p>Starting at $2000.</p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <h3 className={style['steps--heading']}>
                  Maintainence/Optimization
                </h3>
              </div>

              <p className={style['steps--text']}>
                Is your current website working extremely
                slow, or not working at all? Studies have
                shown that if your audience isn't engaged
                within 0.3 seconds of entering your site,
                they will generally leave. Let me look at
                your current site and repair it for you, so
                you don't have to worry about anything.
              </p>
              <p>Starting at $40/hr.</p>
            </div>
            <div className={style['steps--box']}>
              <div className={style['steps--header']}>
                <h3 className={style['steps--heading']}>
                  Emergency Repairs
                </h3>
              </div>

              <p className={style['steps--text']}>
                We all know accidents happen, no matter the
                cause, I am happy to look through any site
                that was built by me, and fix any problems
                no matter the time. I will prioritize
                emergency repairs above everything, and work
                to fix the site by the end of the day.
              </p>
              <p>Starting at $80/hr.</p>
            </div>
          </div>
        </div>
        <div className={style['steps--contact']}>
          <Link href="/contact">
            <button className={style['contact--button']}>
              Schedule a meeting now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;
