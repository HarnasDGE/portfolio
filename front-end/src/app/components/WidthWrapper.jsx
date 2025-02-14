export const WidthWrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1500px] mx-auto ${className} p-4`}>
      {children}
    </div>
  );
};
