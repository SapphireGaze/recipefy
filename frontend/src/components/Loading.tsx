export const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="gap-2h-full fixed flex w-full flex-row justify-center">
        <div className="m-2 h-4 w-4 animate-bounce rounded-full bg-background-dark [animation-delay:.7s]"></div>
        <div className="m-2 h-4 w-4 animate-bounce rounded-full bg-background-light [animation-delay:.3s]"></div>
        <div className="m-2 h-4 w-4 animate-bounce rounded-full bg-background-dark [animation-delay:.7s]"></div>
      </div>
    </>
  );
};
