function Author(props) {
  return(
    <li className='authors-list__item'>{props.data.author_lastName} {props.data.author_firstName}</li>
  );
};

export default Author;