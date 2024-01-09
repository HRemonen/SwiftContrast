import DarkModeToggle from "../DarkModeToggle";

const Navbar = () => {
  return (
    <header>
      <nav className="px-5vw py-9 lg:py-12">
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
