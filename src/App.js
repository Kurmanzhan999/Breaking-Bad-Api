import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './components/Characters/CharacterGrid';
import Header from './layout/Header';
import Search from './layout/Search';

function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setisloading] = useState(true);
  const [query, setQuery] = useState('');
  console.log(query, 'ffff');
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItem(result.data);
      setisloading(false);
    };
    fetchItems();
  }, [query]);
  const queryFanction = (q) => {
    setQuery(q);
  };
  return (
    <div className="container">
      <Header />
      <Search getQuery={queryFanction} />
      <CharacterGrid isLoading={isLoading} items={item} />
    </div>
  );
}

export default App;
