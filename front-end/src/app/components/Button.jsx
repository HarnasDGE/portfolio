export const Button = ({
  color = "primary",
  isIcon = false,
  onClick,
  isHoverRotate = false,
  children,
}) => {
  const colors = {
    primary: "bg-primary text-white",
    black: "bg-black text-white",
    gray: "bg-muted text-white",
  };

  const type = isIcon ? "p-2" : "px-8 py-4 h-hit";
  return (
    <button
      onClick={onClick}
      className={`${colors[color]} flex gap-2 justify-center items-center ${type}  rounded-full font-semibold shadow whitespace-nowrap`}
    >
      {children}
    </button>
  );
};
