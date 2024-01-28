import Link from "next/link";

import { FaPlus } from "react-icons/fa";

export const CreateRecipeButton: React.FC = (): JSX.Element => {
  return (
    <>
      <Link href={"/login"}>
        <div className="group fixed bottom-0 left-0 m-6 flex items-center justify-center text-sm font-bold text-foreground md:m-12">
          <div className="absolute -translate-y-[300%] skew-y-[20deg] opacity-0 shadow-md duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-0 group-hover:opacity-100 group-hover:delay-500">
            <div className="absolute left-0 top-0 h-full w-full rounded-md bg-white duration-500 group-hover:scale-[115%] group-hover:opacity-0 group-hover:delay-700">
              <div className="absolute bottom-0 left-1/2 translate-x-full translate-y-1/2 rotate-45 border-b border-r border-white bg-white p-1"></div>
            </div>
          </div>

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
