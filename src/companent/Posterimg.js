import { link } from "motion/react-client";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const posters = [
  {
    img: "https://marketplace.canva.com/EAFyadayF_k/1/0/1600w/canva-red-and-yellow-modern-vibrant-food-promotion-banner-_oB9xQzKQAA.jpg",
    link: "/restaurants/7"
  },
  {
    img: "https://img.pikbest.com/origin/10/10/85/673pIkbEsTF98.jpg!f305cw",
    link: "/restaurants/1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQylBik5dMVXibLISSWKKSirgB-dr5o2oAA&s",
    link: "/restaurants/5",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5qPaNreHgNAnaPp3r5CmBQ0IdvEYwF-69Q&s",
    link: "/restaurants/2",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGTxSv6rxPIeP58LlBwFgVI2CHV4j0IiGtQ&s",
    link: "/restaurants/3",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Qg7FCAGoN5rUYYmb5SxzwvpC-kmGgHELpQ&s",
    link: "/restaurants/6",
  },
];

const PosterImages = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = 320 + 24;
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {/* ⬅️ Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow-md backdrop-blur transition hover:scale-110 dark:bg-neutral-400/25"
      >
        ◁
      </button>

      {/* ➡️ Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow-md backdrop-blur transition hover:scale-110 dark:bg-neutral-400/25"
      >
        ▷
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
      >
        {posters.map((poster, i) => (
          <div
            key={i}
            onClick={() => navigate(poster.link)}
            className="cursor-pointer  flex-shrink-0
        snap-start"
          >
            <img
              src={poster.img}
              alt={`Poster ${i + 1}`}
              className="
                 rounded-xl
          object-cover
          shadow-md
          transition
          hover:scale-[1.03]
        
          w-[260px]
          sm:w-[300px]
          md:w-[340px]
          lg:w-[380px]

          
          h-36
          sm:h-40
          md:h-44
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PosterImages;
