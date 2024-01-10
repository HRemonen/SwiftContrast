import Link from "next/link";
import SkipLink from "../common/SkipLink";
import DarkModeToggle from "../theme/DarkModeToggle";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Tutorial",
      href: "/tutorial",
    },
  ];

  return (
    <header role="banner" className="px-12 py-4 lg:py-8 mx-auto flex max-w-8xl items-center justify-between">
      <SkipLink href="#main"/>

      <div id="logo" className="flex justify-center gap-4 align-middle">
        <Link
          className="block whitespace-nowrap text-3xl font-semibold transition focus:outline-none"
          href="/"
        >
          Swift Contrast
        </Link>
      </div>

      <nav id="primary-nav" aria-label="Primary" className="hidden lg:block">
        <ul className="flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-center">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
