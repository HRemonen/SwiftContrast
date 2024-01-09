import DarkModeToggle from "../theme/DarkModeToggle";

const Navbar = () => {
  return (
    <header>
      <nav className="px-12 py-4 lg:py-8 text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <a
            className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
            href="/"
          >
            <h1>Swift Contrast</h1>
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
