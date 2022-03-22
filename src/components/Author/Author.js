import './Author.css';

function Author(props) {
  return (
    <li className='authors-list__item'>{props.author.author_lastName} {props.author.author_firstName}</li>
  );
};

export default Author;
