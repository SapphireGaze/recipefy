"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = (): void => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-gray-200 bg-gradient-to-tr from-background-light to-background-dark font-mono">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/favicon.ico"
              alt="recipefy favicon"
              height={40}
              width={40}
            />
            <Image
              src="/logo.png"
              alt="recipefy logo"
              height={50}
              width={90}
              className="rounded"
            />
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link href={"/login"}>
              <button
                type="button"
                className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-background-dark hover:bg-foreground-accent hover:font-bold hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-foreground-accent"
              >
                Get started
              </button>
            </Link>

            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-accent hover:bg-foreground-accent focus:outline-none focus:ring-2 focus:ring-foreground-accent md:hidden"
              aria-controls="navbar-cta"
              aria-expanded={navbarOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              navbarOpen ? "flex" : "hidden"
            } w-full items-center justify-center md:order-1 md:flex md:w-auto`}
            id="navbar-cta"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-transparent bg-transparent p-4 font-semibold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link
                  href={"/"}
                  className="block rounded bg-transparent px-3 py-2 text-foreground hover:font-bold hover:text-gray-800 md:p-0 dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/recipe"}
                  className="block rounded bg-transparent px-3 py-2 text-foreground hover:font-bold hover:text-gray-800 md:p-0 dark:border-gray-700"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="block rounded bg-transparent px-3 py-2 text-foreground hover:font-bold hover:text-gray-800 md:p-0 dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
