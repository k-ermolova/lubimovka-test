import Authors from './Authors';
import Card from './Card';

function Response(props) {
  const handleOrder = (arr, property) => {
    return arr.sort((a, b) => a[property].localeCompare(b[property]));
  };

  handleOrder(props.cards, 'title');
  handleOrder(props.authors, 'author_lastName');

  return (
    <section className='response'>
      <ul className='plays-list'>
        {props.cards.map(card => (
          <Card key={card._id}
            card={card} />
        ))}
      </ul>
      <ul className='authors'>
        <Authors authors={props.authors} />
      </ul>
    </section>
  );
};

export default Response;