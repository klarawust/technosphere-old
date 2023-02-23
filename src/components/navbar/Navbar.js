import { NavLink } from "./NavLink.js";

function Navbar({ links }) {
  const navItems = [
    { label: "Hjem", url: "/" },
    { label: "Prosjekter", url: "/" },
    { label: "Bøker", url: "/books" },
    { label: "Venner<3<3<3", url: "/venner" },
  ];

  return (
    <nav>
      <ul className="flex flex-row text-blue-500 w-full my-10 gap-10 text-4xl font-mono">
        {navItems.map((navItem) => (
          <NavLink
            onClick={() => console.log(navItem.label)}
            key={navItem.label}
            navItem={navItem}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
