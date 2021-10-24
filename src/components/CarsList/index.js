import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Car.module.css';
import CarsListItem from './CarsListItem';

class CarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { id: 1, mark: 'BMW', model: 'm3', cost: 50000, isSelected: false },
        { id: 2, mark: 'Audi', model: 'RS6', cost: 60000, isSelected: false },
        {
          id: 3,
          mark: 'Dodge',
          model: 'Chelendger',
          cost: 70000,
          isSelected: false,
        },
      ],
    };
  }

  mapCars = (elem, index) => {
    const selectedHandler = () => {
      const { cars } = this.state;
      const newCars = [...cars];
      newCars[index] = {
        ...newCars[index],
        isSelected: !newCars[index].isSelected,
      };

      this.setState({ cars: newCars });
    };

    const del = () => {
      const cars2 = [...this.state.cars];
      cars2.splice(index, 1);
      this.setState({ cars: cars2 });
    };

    return (
      <CarsListItem
        key={elem.id}
        car={elem}
        deleteHandler={del}
        selectedHandler={selectedHandler}
      />
    );
  };

  render() {
    const { cars } = this.state;

    const list = cars.map(this.mapCars);

    return (
      <article>
        <div>{list}</div>
      </article>
    );
  }
}

export default CarsList;
