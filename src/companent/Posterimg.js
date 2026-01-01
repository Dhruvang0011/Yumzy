import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const posters = [
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
            className="cursor-pointer"
          >
            <img
              src={poster.img}
              alt={`Poster ${i + 1}`}
              className="
                h-44
                w-[320px]
                flex-shrink-0
                rounded-xl
                object-cover
                shadow-md
                transition
                hover:scale-[1.05]
                hover:shadow-lg
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PosterImages;
