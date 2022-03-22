import { useState } from 'react';

import Request from '../Request/Request';
import Title from '../Title/Title';
import Response from '../Response/Response';
import JSONDATA from '../../utils/data.json';

import './App.css';

function App() {
  const dataList = JSONDATA.result;
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('Поиск');

  let term;

  const handleChange = (event) => {
    term = event.target.value;
  };

  const checkContent = (str, term) => {
    return str.toLowerCase().includes(term.toLowerCase());
  };

  const checkTitle = () => {
    return (searchTerm === '') || (title === 'Поиск');
  };

  // eslint-disable-next-line
  const filteredCards = dataList.filter((val) => {
    if (checkTitle()) {
      // eslint-disable-next-line
      return;
    } else if (checkContent(val.title, searchTerm)) {
      return val;
    }
  });

  // eslint-disable-next-line
  const filteredAuthors = dataList.filter((val) => {
    if (checkTitle()) {
      // eslint-disable-next-line
      return;
    } else if (
      checkContent(val.author_firstName, searchTerm) ||
      checkContent(val.author_lastName, searchTerm)
    ) {
      return val;
    }
  });

  const checkAll = (item) => {
    const contain = (element) => {
      return checkContent(element.author_firstName, item) || 
      checkContent(element.author_lastName, item) || 
      checkContent(element.title, item);
    };

    return dataList.some(contain);
  };

  const handleTitle = (arg) => {
    if (arg === (undefined || '')) {
      setTitle('Поиск');
    } else if (!checkAll(arg)) {
      setSearchTerm(arg);
      setTitle(`По запросу «${arg}» мы ничего не нашли`);
    } else if (checkAll(arg)) {
      setSearchTerm(arg);
      setTitle(`По запросу «${arg}» мы нашли`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleTitle(term);
  };


  return (
    <div className="App">
      <Title title={title} />
      <Request onSubmit={handleSubmit} onChange={handleChange} />
      <Response cards={filteredCards} authors={filteredAuthors} />
    </div>
  );
}

export default App;
