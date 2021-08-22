function Response() {
  return (
    <section className='response'>
      <ul className='plays-list'>
        <li className='play'>
          <p className='play__title'>Август 1999 или Никита, любовь и голуби</p>
          <p className='play__author'>Бжожовский
            Теодор</p>
          <p className='play__city'>Санкт-Петербург
            <span>2020</span></p>
        </li>
        <li className='play'>
          <p className='play__title'>Августина и Степан</p>
          <p className='play__author'>Пастернак
            Ангелина</p>
          <p className='play__city'>Санкт-Петербург
            <span>2020</span></p>
        </li>
        <li className='play'>
          <p className='play__title'>По ту сторону августа</p>
          <p className='play__author'>Евдокимов
            Платон</p>
          <p className='play__city'>Москва
           <span>2017</span></p>
        </li>
      </ul>
      <ul className='authors'>
        <li>
          <span className='authors__letter'>А</span>
          <ul className='authors-list'>
            <li className='authors-list__item'>Августеняк Екатерина</li>
            <li className='authors-list__item'>Августовский Борис</li>
          </ul>
        </li>
        <li>
          <span className='authors__letter'>Б</span>
          <ul className='authors-list'>
            <li className='authors-list__item'>Богатова Августина</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Response;