import { IoHappyOutline, IoSadOutline, IoSendOutline } from "react-icons/io5";

export const FeedbackBox: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="fixed grid grid-cols-6 gap-2 rounded-xl border border-slate-200 bg-foreground p-2 text-sm shadow-lg">
        <div className="col-span-6 text-center text-xl font-bold text-background-dark">
          Send Feedback/Issue
        </div>
        <textarea
          placeholder="Your feedback..."
          className="col-span-6 h-28 resize-none rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-600 outline-none duration-300 placeholder:text-slate-600 placeholder:opacity-50 focus:border-sky-800"
        ></textarea>
        <button className="col-span-1 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 fill-slate-600 p-2 duration-300 hover:border-sky-800 hover:text-background-dark focus:bg-foreground-accent focus:fill-blue-200">
          <IoHappyOutline size={25} />
        </button>
        <button className="col-span-1 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 fill-slate-600 p-2 duration-300 hover:border-sky-800 hover:text-background-dark focus:bg-foreground-accent focus:fill-blue-200">
          <IoSadOutline size={25} />
        </button>
        <span className="col-span-2"></span>
        <button className="col-span-2 flex justify-center rounded-lg border border-slate-200 bg-slate-100 stroke-slate-600 p-2 duration-300 hover:border-sky-800 hover:text-background-dark focus:bg-foreground-accent focus:stroke-blue-200">
          <IoSendOutline size={25} />
        </button>
      </div>
    </>
  );
};
