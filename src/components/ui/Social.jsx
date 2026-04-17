function Social() {
  const socials = [
    {
      name: "Instagram",
      icon: "/icons/ic-instagram.svg",
      link: "https://instagram.com/malabaresmkt",
    },
    {
      name: "LinkedIn",
      icon: "/icons/ic-linkedin.svg",
      link: "https://linkedin.com/malabaresmkt",
    },
    {
      name: "TikTok",
      icon: "/icons/ic-tiktok.svg",
      link: "https://tiktok.com/@malabaresmkt",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-all duration-300"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
      ))}
    </div>
  );
}

export default Social;