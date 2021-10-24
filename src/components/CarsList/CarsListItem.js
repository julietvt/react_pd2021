import React from 'react';
import classNames from 'classnames';
import styles from './Car.module.css';

// styles = {
//   selectedCar: 'selectedCar',
// };

function CarsListItem(props) {
  const {
    car: { mark, model, cost, isSelected },
    selectedHandler,
    deleteHandler,
  } = props;

  const carClasses = classNames({
    [styles.selectedCar]: isSelected,
  });

  return (
    <li className={carClasses}>
      <div onClick={selectedHandler}>
        {mark} {model} {cost}
      </div>
      <button onClick={deleteHandler}>Del</button>
    </li>
  );
}

export default CarsListItem;
