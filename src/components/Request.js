function Request(props) {
  return (
    <form className='search' onSubmit={props.onSubmit}>
      <input className='search__field' type='search' onChange={props.onChange}></input>
      <svg className='search__icon' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21 12.4766L20.2752 13.2014L14.4766 19L13.7737 18.2971L19.0944 12.9765L-3.63036e-07 12.9765L-3.10999e-07 11.9765L19.0502 11.9765L13.7986 6.72483L14.5234 6L20.2971 11.7737L21 12.4766Z" fill="#242424" />
      </svg>

      <button className='search__button' type='submit'>ИСКАТЬ</button>
    </form>
  );
}

export default Request;