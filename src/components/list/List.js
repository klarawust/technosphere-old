function List({ entries }) {
  return (
    <div className="font-sans text-center">
      <ul className="flex flex-row flex-wrap justify-center gap-4">
        {entries.map((friend) => (
          <li key={friend.url}>
            <a className="hover:text-xl hover:bg-amber-200" href={friend.url}>
              {friend.name}
              <img className="h-64" src={friend.bilde} alt="bilde av venn" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
