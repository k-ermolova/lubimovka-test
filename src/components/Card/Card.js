import './Card.css';

function Card(props) {
  return (
    <li className='play'>
      <p className='play__title'>{props.card.title}</p>
      <p className='play__author'>{props.card.author_lastName} {props.card.author_firstName}</p>
      <p className='play__city'>{props.card.city}
        <span>{props.card.year}</span></p>
    </li>
  );
};

export default Card;
