function List({ title, entries }) {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-mono text-red-500">{title}</h1>
      <ul className="flex flex-row flex-wrap gap-4">
        {entries.map((friend) => (
          <li key={friend.url}>
            <a className="hover:text-lg" href={friend.url}>
              {friend.name}
              <img className="h-80" src={friend.bilde} alt="bilde av venn" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
