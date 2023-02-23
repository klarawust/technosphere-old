function List({ title, entries }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul className="flex flex-row gap-8 text-green-400">
        {entries.map((name, index, link) => (
          <li key={index}>
            {name}href={link.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
