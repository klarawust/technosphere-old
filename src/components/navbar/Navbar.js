import { NavLink } from "./NavLink.js";

function Navbar({ links }) {
  const navItems = [
    { label: "Hjem", url: "/" },
    { label: "Om meg", url: "/meg" },
    { label: "Prosjekter", url: "/" },
    { label: "CV", url: "/" },
    { label: "Venner", url: "/venner" },
  ];

  return (
    <nav>
      <ul className="flex flex-row text-blue-500 w-full my-10 gap-10 text-xl font-mono">
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
