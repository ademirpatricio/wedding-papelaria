export default function Gallery() {
  const images = [
    "/images/gallery/img1.jpg",
    "/images/gallery/img2.jpg",
    "/images/gallery/img3.jpg",
    "/images/gallery/img4.jpg",
    "/images/gallery/img5.jpg",
    "/images/gallery/img6.jpg",
  ];

  return (
    <section className="w-full py-10 bg-[#4f2286]">
      
      {/* =========================
          🖼️ GALERIA
      ========================= */}
      <div className="w-full overflow-x-auto">
        
        <div className="flex gap-3 px-6 md:px-6 md:max-w-7xl md:mx-auto">
          
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[250px] h-[250px] md:min-w-0 md:w-full md:h-[300px] overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}