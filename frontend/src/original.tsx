import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Tabs from './components/tabnav';
import Dialogapi from './components/dialogapi';
import { Navigation } from './components/Navigation';
import './App.css';

const ParentComponent = () => {
  const [dataReceived, setDataReceived] = useState([[[1]]]);
  return (
    <div>
      <Navigation/>
      <Dialogapi onDataReceived={setDataReceived}/>
      <Tabs busynessData = {dataReceived}/>
      <p>Data: {JSON.stringify(dataReceived)}</p>
    </div>
  );
};

export default ParentComponent;