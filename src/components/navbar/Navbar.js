import { NavLink } from "./NavLink.js";

function Navbar({ links }) {
  const navItems = [
    { label: "Hjem", url: "./index.js" },
    { label: "Prosjekter", url: "../../../meg.jpg" },
    { label: "Bøker", url: "" },
    { label: "Venner", url: "/" },
    { label: "Add meg", url: "/" },
    { label: "Se hva jeg kan", url: "/" },
  ];
  return (
    <nav>
      <ul className="flex flex-row text-red-400 w-full my-10 gap-10 text-4xl font-mono">
        {navItems.map((navItem) => (
          <NavLink
            className="cursor-pointer hover:text-orange-400"
            key={navItem.label}
            navItem={navItem}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
