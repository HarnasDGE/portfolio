export const Divider = ({ width = "100" }) => {
  return (
    <div
      className={` min-h-[1px] h-[1px] z-20 w-[${width}%] bg-muted dark:bg-muted`}
    ></div>
  );
};
