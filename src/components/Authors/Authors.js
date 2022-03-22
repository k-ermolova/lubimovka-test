import Author from '../Author/Author';

import './Authors.css';

function Authors(props) {
  const lastName = props.authors.reduce((r, e) => {
    let group = e.author_lastName[0];
    if (!r[group]) {
      r[group] = { group, children: [e] }
    }
    else r[group].children.push(e);
    return r;
  }, []);

  const lastNameGroup = Object.values(lastName);

  return (
    lastNameGroup.map((author, index) => (
      <li key={index}>
      <span className='authors__letter'>{author.group}</span>
      <ul className='authors-list'>
        {author.children.map(item => (<Author key={item._id}
          author={item} />))
        }
      </ul>
    </li>
    )));
      
};

export default Authors;
