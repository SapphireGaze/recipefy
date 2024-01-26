export const Loading: React.FC = () => {
  return (
    <>
      <div className="fixed flex h-full w-full justify-center">
        <div className="border-background-light h-12 w-12 animate-spin rounded-full border-8 border-solid border-r-transparent"></div>
      </div>
    </>
  );
};
