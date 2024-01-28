import Link from "next/link";

import { FaCheck } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <div className="fixed m-2 flex w-96 flex-col rounded-xl bg-clip-border font-mono text-gray-700 md:bg-foreground md:shadow-lg">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-background-light to-background-dark bg-clip-border text-foreground shadow-lg shadow-cyan-800/40">
          <div className="block text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Log In
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="username"
              type="text"
              placeholder=""
              className="peer h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-background-dark focus:border-t-transparent focus:outline-0 disabled:border-0"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-background-light peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-background-dark peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-background-dark peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
              Username
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="password"
              type="password"
              placeholder=""
              className="peer h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-background-dark focus:border-t-transparent focus:outline-0 disabled:border-0"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-background-light peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-background-dark peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-background-dark peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
              Password
            </label>
          </div>
          <div className="-ml-2.5">
            <div className="inline-flex items-center">
              <label
                data-ripple-dark="true"
                htmlFor="checkbox"
                className="relative flex cursor-pointer items-center rounded-full p-3"
              >
                <input
                  id="checkbox"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-background-light transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-foreground-accent checked:bg-background-dark checked:before:bg-background-light hover:before:opacity-10"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <FaCheck />
                </span>
              </label>
              <label
                htmlFor="checkbox"
                className="mt-px cursor-pointer select-none font-light text-gray-700"
              >
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-background-light to-background-dark px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-cyan-800/40 transition-all hover:shadow-lg hover:shadow-cyan-800/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Log In
          </button>
          <p className="mt-6 flex justify-center text-sm font-light leading-normal text-inherit antialiased">
            Don&apos;t have an account?
            <Link
              href={"/signup"}
              className="ml-1 block text-sm font-bold leading-normal text-background-dark antialiased hover:animate-bounce"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
