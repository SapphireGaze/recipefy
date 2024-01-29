import Link from "next/link";

import { FaPlus } from "react-icons/fa";

import useAuth from "@/hooks/useAuth";

export const CreateRecipeButton: React.FC = (): JSX.Element => {
  const isLoggedIn = useAuth();

  return (
    <>
      <Link href={isLoggedIn ? "/create" : "/login"}>
        <div className="group fixed bottom-0 left-0 m-6 flex items-center justify-center text-sm font-bold text-foreground md:m-12">
          <div className="absolute -translate-y-[300%] skew-y-[20deg] opacity-0 shadow-md duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-0 group-hover:opacity-100 group-hover:delay-500" />
          <div className="flex cursor-pointer items-center rounded-full bg-gradient-to-br from-background-light to-background-dark p-3 shadow-md duration-300 group-hover:gap-2">
            <FaPlus className="m-2" />
            <span className="text-[0px] duration-300 group-hover:text-sm">
              Create your own recipe!
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
