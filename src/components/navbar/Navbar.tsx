import SkipLink from "../common/SkipLink";
import DarkModeToggle from "../theme/DarkModeToggle";

const Navbar = () => {
  return (
    <header>
      <SkipLink href="#main"/>
      <nav className="px-12 py-4 lg:py-8 mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <a
            className="block whitespace-nowrap text-3xl font-semibold transition focus:outline-none"
            href="/"
          >
            Swift Contrast
          </a>
        </div>
        <div className="flex items-center justify-center">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
