export const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="fixed flex h-full w-full justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-8 border-solid border-background-light border-r-transparent shadow-xl"></div>
      </div>
    </>
  );
};
