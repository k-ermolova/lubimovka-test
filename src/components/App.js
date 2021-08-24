import Request from './Request';
import Title from './Title';
import Response from './Response';
import { useEffect, useState } from 'react';
import JSONDATA from '../utils/data.json';

function App() {
  const dataList = JSONDATA.result;
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('Поиск');

  let term;

  const handleChange = (event) => {
    term = event.target.value;
  };

  const handleTitle = (term) => {
    if (term) {
      setSearchTerm(term);
      setTitle(`По запросу «${term}» мы нашли`);
    } else if (term !== undefined) {
      setTitle('Поиск');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleTitle(term);
  };

  const checkContent = (str) => {
    return str.toLowerCase().includes(searchTerm.toLowerCase());
  };


  const filteredCards = dataList.filter((val) => {
    if (searchTerm === '') {
      return;
    } else if (checkContent(val.title)) {
      return val;
    }
  });


  const filteredAuthors = dataList.filter((val) => {
    if (searchTerm === '') {
      return;
    } else if (
      checkContent(val.author_firstName) ||
      checkContent(val.author_lastName)
    ) {
      return val;
    }
  });


  return (
    <div className="App">
      <Title title={title} />
      <Request onSubmit={handleSubmit} onChange={handleChange} />
      <Response cards={filteredCards} authors={filteredAuthors} />
    </div>
  );
}

export default App;
