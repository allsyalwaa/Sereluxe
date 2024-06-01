import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="shadow">
      <div className="container fixed left-0 right-0 top-0 bg-white">
        <div className="flex h-[72px] items-center justify-between">
          <NavLink to="/">
            <img className="h-7" src={Logo} alt="ZS" />
          </NavLink>

          <ul
            ref={sidebarRef}
            className={`text-secondary items-center gap-1 ${isOpen ? "bg-primary fixed right-0 top-0 z-10 flex h-screen w-2/5 flex-col items-start justify-start gap-4 px-6 py-14 text-white" : "hidden"} md:flex`}
          >
            <li
              className={`border-primary mr-8 w-[400px] rounded-lg border-[1.5px] px-5 py-2 ${isOpen ? "hidden" : "block"}`}
            >
              <div className="text-primary/50 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
                    />
                  </g>
                </svg>
                <p className="text-md font-medium">Search product</p>
              </div>
            </li>
            <li
              className={`w-auto rounded-lg border-[1.5px] border-white px-3 py-2 ${isOpen ? "mr-0 block" : "hidden"}`}
            >
              <div className="flex items-center gap-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
                    />
                  </g>
                </svg>
                <p className="text-md font-medium">Search</p>
              </div>
            </li>
            <li className={`text-primary mr-4 ${isOpen ? "hidden" : "block"}`}>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z" />
                    <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 13v4m8-4v4m-4-4v4"
                    />
                  </g>
                </svg>
              </NavLink>
            </li>
            <li className={`text-primary ${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z" />
                      <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 13v4m8-4v4m-4-4v4"
                      />
                    </g>
                  </svg>
                </Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "hidden" : "block"}`}>
              <NavLink to="/">
                <Button variant="white">Log In</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">Log In</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "hidden" : "block"}`}>
              <NavLink to="/">
                <Button variant="primary">Sign Up</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">Sign Up</Button>
              </NavLink>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`text-secondary z-20 block text-white md:hidden ${
              isOpen ? "hidden" : "relative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
