import Author from './Author';

function Authors(props) {

  return(
    <li>
          <span className='authors__letter'>{props.authors.author_lastName.charAt(0)}</span>
          <ul className='authors-list'>
          <Author data={props.authors}/>
          </ul>
        </li>
  );
};

export default Authors;