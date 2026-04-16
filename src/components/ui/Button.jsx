function Button({
  label,
  link = "#",
  target = "_self",
  variant = "primary", // 👈 chave aqui
}) {
  
  const base =
    "inline-block px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 border-2";

  const variants = {
    primary:
      "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",

    white:
      "border-white text-white hover:bg-white hover:text-black",

    purple:
      "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
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