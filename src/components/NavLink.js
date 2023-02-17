function NavLink({ navItem }) {
  return (
    <li>
      <a href={navItem.url}>{navItem.label}</a>
    </li>
  );
}

export default NavLink;
