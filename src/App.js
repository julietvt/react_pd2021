import './App.css';
import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Stopwatch from './components/Stopwatch';

const slides = [
  {
    src: 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg',
    title: 'Some Image',
  },
  {
    src: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
    title: 'Some Image',
  },
  {
    src: 'https://klike.net/uploads/posts/2020-01/1578662816_1.jpg',
    title: 'Some Image',
  },
  {
    src: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg',
    title: 'Some Image',
  },
];

const App = () => {
  //return <Carousel slides={slides} />;
  return <Stopwatch />;
};

export default App;
