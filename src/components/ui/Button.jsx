function Button({
  label,
  link = "#",
  target = "_self",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center h-16 px-12 rounded font-sans font-semibold text-base md:text-base tracking-[0.08em] transition-all duration-300";

  const variants = {
    primary:
      "text-primary border border-primary hover:bg-primary hover:text-black",

    white:
      "text-white border border-white/40 hover:bg-white hover:text-black",

    purple:
      "text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white",
  };

  return (
    <a
      href={link}
      target={target}
      className={`${base} ${variants[variant]}`}
    >
      {label}
    </a>
  );
}

export default Button;