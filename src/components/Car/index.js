import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Car.module.css';

class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mark: 'Zaz',
      model: 'Slavuta',
      cost: 20000,
    };
  }

  render() {
    const { mark, model, cost } = this.state;

    const carStyles = classNames(
      { [styles.carExpensive]: cost >= 20000 },
      { [styles.carCheap]: cost < 20000 }
    );

    const markInlineStyles = {
      color: 'red',
    };

    return (
      <article className={carStyles}>
        <div style={markInlineStyles}>{mark}</div>
        <div>{model}</div>
        <div>{cost}</div>
      </article>
    );
  }
}

export default Car;
