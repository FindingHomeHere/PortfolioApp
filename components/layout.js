import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <>
        <Navbar toggle={this.toggle} />
        <Sidebar toggle={this.toggle} isOpen={isOpen} />
        {this.props.children}
      </>
    );
  }
}
