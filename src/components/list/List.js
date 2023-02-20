function List({ title, entries }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul className="flex flex-row gap-8 text-green-400">
        {entries.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
