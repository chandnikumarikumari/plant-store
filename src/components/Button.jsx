const Button = ({ children, variant = "primary", onClick }) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="bg-flora-green hover:bg-flora-glow text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 font-inter"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:border-flora-green hover:text-flora-green text-white border border-flora-border px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 font-inter"
    >
      {children}
    </button>
  );
};
export default Button;