import Authors from './Authors';
import Card from './Card';

function Response(props) {
  const handleOrder = (arr, property) => {
    return arr.sort((a, b) => a[property].localeCompare(b[property]));
  };

  handleOrder(props.cards, 'title');
  handleOrder(props.authors, 'author_lastName');

  const uniqueAuthors = props.authors.reduce((unique, current) => {
    if (!unique.some(obj => obj.author_lastName === current.author_lastName && obj.value === current.value)) {
      unique.push(current);
    }
    return unique;
  }, []);

  return (
    <section className='response'>
      <ul className='plays-list'>
        {props.cards.map(card => (
          <Card key={card._id}
            card={card} />
        ))}
      </ul>
      <ul className='authors'>
        <Authors authors={uniqueAuthors} />
      </ul>
    </section>
  );
};

export default Response;