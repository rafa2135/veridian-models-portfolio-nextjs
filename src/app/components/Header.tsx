import Logo from "./Logo";
import Nav from "./Nav";
//this the header of the page it contains the logo and the menu and the links to diferent parts of this page
const Header = () => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow-sm bg-white`}>
      <div className="container mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4 h-16">
        <div className="flex gap-4">
          <div className="relative w-6 h-6">
            <Logo />
          </div>
          <a className="">Veridian Models</a>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
