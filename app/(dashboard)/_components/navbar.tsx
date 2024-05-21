import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-purple-500 py-8">
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/contact-us">
            Contact us
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/features">
            Features
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
