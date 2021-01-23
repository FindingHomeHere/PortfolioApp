import Link from 'next/link';

import style from './Services.module.css';

const Services = () => (
  <>
    <div className={style['container']}>
      <div className={style['steps']}>
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
                cause, I am happy to look through your site
                and fix any problems no matter the time. I
                will prioritize emergency repairs above
                everything, and work to fix the site by the
                end of the day.
              </p>
              <p>Starting at $80/hr.</p>
            </div>
          </div>
        </div>
        <div className={style['steps--contact']}>
          <h2 className={style['contact--heading']}>
            Schedule a meeting now!
          </h2>
          <Link href="/contact">
            <button className={style['contact--button']}>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Services;
