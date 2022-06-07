import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header';

function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setisloading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://www.breakingbadapi.com/api/');
    };
  });
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
