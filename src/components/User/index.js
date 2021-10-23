import React, { Component } from 'react';
import styles from './User.module.css';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Grut',
      age: 25,
      isSelected: false,
    };
  }

  switchSelected = () => {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  };

  // Добавить обработчик на клик на article
  // который меняет isSelected на противоположное
  render() {
    const { name, age, isSelected } = this.state;

    const userArticleStyles = isSelected ? styles.selectedUser : null;
    const userArticleInlineStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    return (
      // style - объект
      // className - строка
      <article
        style={userArticleInlineStyles}
        className={userArticleStyles}
        onClick={this.switchSelected}
      >
        <div>{name}</div>
        <div>{age}</div>
      </article>
    );
  }
}

export default User;
