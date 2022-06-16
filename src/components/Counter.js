import classes from './Counter.module.css';
import store from '../store';

const Counter = () => {
  const toggleCounterHandler = () => {
    store.dispatch({type: 'increment'});
  };

  const counterState = store.getState();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterState}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
