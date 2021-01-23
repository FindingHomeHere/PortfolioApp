import React from 'react';
import emailjs from 'emailjs-com';

import style from './Emailjs.module.css';

export default function ContactUs() {
  const handleNumbers = (e) => {
    const x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'service_xmkd70f',
  //       'template_contact_form',
  //       e.target,
  //       'user_yDEiAiMLkj4IOhDcHFLZS'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <div className={style['contact-div']}>
      <div className={style['grid']}>
        <div className={style['heading-box']}>
          <h1 className={style['heading']}>
            Ready to get started?
          </h1>
          <p className={style['subheading']}>
            Fill out this form, tell me briefly what you are
            looking for, and I will get back to you quickly!
          </p>
        </div>
        <form
          method="POST"
          data-netlify="true"
          name="contact"
          className={style['contact-form']}
          onSubmit={sendEmail}
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <div className={style['form']}>
            <input
              type="text"
              name="name"
              maxLength="24"
              required
            />
            <label
              for="name"
              className={style['label-name']}
            >
              <span className={style['content-name']}>
                Name
              </span>
            </label>
          </div>
          <div className={style['form']}>
            <input
              type="email"
              name="email"
              maxLength="30"
              required
            />
            <label
              for="email"
              className={style['label-name']}
            >
              <span className={style['content-name']}>
                Email
              </span>
            </label>
          </div>
          <div className={style['form']}>
            <input
              type="tel"
              name="phone"
              onChange={handleNumbers}
              required
            />
            <label
              for="phone"
              className={style['label-name']}
            >
              <span className={style['content-name']}>
                Phone
              </span>
            </label>
          </div>
          <div className={style['form']}>
            <input
              type="textarea"
              name="message"
              maxLength="50"
              required
            />
            <label
              for="message"
              className={style['label-name']}
            >
              <span className={style['content-name']}>
                Brief Message (50 characters or less)
              </span>
            </label>
          </div>
          <input
            type="submit"
            value="Send"
            className={style['contact--button']}
          />
        </form>
      </div>
    </div>
  );
}
