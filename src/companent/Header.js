import useDarkMode from "../utils/useDarkMode";
import { Logo_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ onSearch }) => {
  const [btnName, setBtnName] = useState("Login");
  const [searchText, setSearchText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [dark, setDark] = useDarkMode();

  const cartItems = useSelector((store) => store.cart.items);

  const navLinkClass = `
    relative
    transition
    hover:text-[#FF7A7A]
    dark:hover:text-[#FF9B9B]

    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[#FF7A7A]
    dark:after:bg-[#FF9B9B]
    after:transition-all
    hover:after:w-full
  `;

  return (
    <header className="sticky top-4 z-50">
      <div
        className="
          mx-auto
          max-w-[1200px]
          rounded-2xl
          bg-white/70
          dark:bg-neutral-800/60
          backdrop-blur-xl
          shadow-lg
          border
          border-white/40
          dark:border-neutral-700
        "
      >

        {/* TOP BAR */}
        <div className="flex items-center justify-between gap-2 px-3 py-3 md:px-8 md:py-4">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo_URL}
              alt="Logo"
              className="w-20 md:w-36 object-contain"
            />
          </Link>

          {/* SEARCH */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(searchText);
            }}
            className="
              flex
              flex-1
              min-w-0
              items-center
              gap-2
              rounded-full
              px-2
              py-1.5
              shadow-sm

              bg-white
              dark:bg-neutral-800

              md:flex-none
              md:w-[420px]
              md:px-4
              md:py-2
            "
          >
            <input
              type="text"
              placeholder="Search…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="
                w-full
                bg-transparent
                outline-none
                text-xs
                md:text-sm

                text-neutral-800
                dark:text-neutral-200
                placeholder:text-neutral-400
                dark:placeholder:text-neutral-500
              "
            />

            {/* Desktop button */}
            <button
              type="submit"
              className="
                hidden
                md:block
                bg-[#FF7A7A]
                hover:bg-[#FF5C5C]
                dark:bg-[#FF8C8C]
                dark:hover:bg-[#FF6F6F]
                text-white
                px-5
                py-2
                rounded-full
                font-semibold
                transition
                active:scale-95
              "
            >
              Search
            </button>
          </form>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <li>
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/contact" className={navLinkClass}>
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <span className={`${navLinkClass} cursor-pointer`}>
                  🛒 ({cartItems.length})
                </span>
              </Link>
            </li>

            <li>
              <button
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
                className={`
                  rounded-full
                  px-6
                  py-2
                  font-semibold
                  transition-all
                  active:scale-95
                  ${
                    btnName === "Logout"
                      ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/40 dark:text-red-400"
                      : "bg-orange-100 text-orange-600 hover:bg-orange-200 dark:bg-orange-900/40 dark:text-orange-400"
                  }
                `}
              >
                {btnName}
              </button>
            </li>

            {/* DARK MODE */}
            <li>
              <button
                onClick={() => setDark(!dark)}
                className="
                  rounded-full
                  px-3
                  py-2
                  text-sm
                  bg-neutral-200
                  dark:bg-neutral-700
                  text-neutral-800
                  dark:text-white
                "
              >
                {dark ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-xl flex-shrink-0 text-neutral-800 dark:text-neutral-200"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              <li>
                <Link to="/" onClick={() => setOpenMenu(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => setOpenMenu(false)}>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/cart" onClick={() => setOpenMenu(false)}>
                  🛒 ({cartItems.length})
                </Link>
              </li>

              <li>
                <button
                  onClick={() =>
                    setBtnName(btnName === "Login" ? "Logout" : "Login")
                  }
                  className="rounded-full px-6 py-2 font-semibold bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400"
                >
                  {btnName}
                </button>
              </li>

              <li>
                <button
                  onClick={() => setDark(!dark)}
                  className="rounded-full px-3 py-2 bg-neutral-200 dark:bg-neutral-700 dark:text-white"
                >
                  {dark ? "🌙" : "☀️"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
