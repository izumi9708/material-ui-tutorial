import React from 'react';
import Button from '@mui/material/Button';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={styles.wrapItem}>
        <p>ボタン群</p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained1</Button>
        <Button variant="contained" disabled>Contained2</Button>
        <Button variant="outlined">アウトライン１</Button>
        <Button variant="outlined" disabled>アウトライン２</Button>
      </div>
    </div>
  );
}

export default App;