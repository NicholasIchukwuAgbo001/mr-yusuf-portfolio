import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-5000 bg-background backdrop-blur-md border-b shadow ">
      <div className="mx-auto flex items-center justify-between px-10 py-3">
        <Link
          href="/"
          className="text-white text-lg font-bold tracking-wide"
        >
          Yusuf Usman<span className="text-secondary">.</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
