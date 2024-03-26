import React from 'react';
import Table from './components/Table';
import Botbar from './components/Botbar';

import './App.css';


function App() {
  return (
    <>
      <h1 className='tittle'>Data fetch from stackoverflow</h1>
      <Table />
      <Botbar />
    </>
  );
}

export default App;
