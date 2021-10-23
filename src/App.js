import './App.css';
import React from 'react';
import { Component } from 'react';
import UserCardHW from './components/UserCardHW';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        imgSrc:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwac-cdn.atlassian.com%2Fdam%2Fjcr%3Aba03a215-2f45-40f5-8540-b2015223c918%2FMax-R_Headshot%2520(1).jpg%3FcdnVersion%3D41&imgrefurl=https%3A%2F%2Fwww.atlassian.com%2Fagile%2Fproject-management%2Fuser-stories&tbnid=Tp0OOu8Bda7bCM&vet=12ahUKEwjf0ee2_N_zAhWYhP0HHVHUDzoQMygSegUIARDRAQ..i&docid=Hl4fubo9SpjwQM&w=1560&h=1560&itg=1&q=user%20photo&ved=2ahUKEwjf0ee2_N_zAhWYhP0HHVHUDzoQMygSegUIARDRAQ',
        name: 'Emma Watson',
        tagline: 'EmmWats',
        tweet: 1337,
        following: 561,
        fol: 716,
      },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <>
        <UserCardHW user={user} />
      </>
    );
  }
}

export default App;

//props step
