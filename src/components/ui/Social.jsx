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
    <div className="flex items-center gap-3">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-4 h-4"
          />
        </a>
      ))}
    </div>
  );
}

export default Social;