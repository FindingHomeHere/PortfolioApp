import React, { Component } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import style from './subscribe.module.css';

export default class index extends Component {
  render() {
    return (
      <div className={style['grid']}>
        <h2 className={style['subscribe-heading']}>
          Subscribe to our email list!
        </h2>
        <p className={style['sub--subheading']}>
          Never miss an update
        </p>
        <form className={style['form']}>
          <input
            type="name"
            name="name"
            required
            message="Please enter your email"
          />
          <label for="name" className={style['label-name']}>
            <span className={style['content-name']}>
              Name
            </span>
          </label>
          <input
            type="email"
            name="email"
            required
            message="Please enter your email"
          />
          <label
            for="email"
            className={style['label-name']}
          >
            <span className={style['content-name']}>
              Email
            </span>
          </label>
          <input type="tel" name="tel" />
          <label for="tel" className={style['label-name']}>
            <span className={style['content-name']}>
              Phone number
            </span>
          </label>
          <button
            type="submit"
            className={style['btn-submit']}
          >
            <AiOutlineArrowRight />
          </button>
        </form>
      </div>
    );
  }
}
