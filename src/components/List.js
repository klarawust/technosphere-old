function List({ title, entries }) {
  return (
    <div className="List">
      <h1>{title}</h1>
      <ul>
        {entries.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
