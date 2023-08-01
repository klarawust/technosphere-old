function List({ title, entries }) {
  return (
    <div className="font-mono text-center">
      <ul className="flex flex-row flex-wrap gap-4">
        {entries.map((friend) => (
          <li key={friend.url}>
            <a className="hover:text-xl hover:bg-amber-200" href={friend.url}>
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
