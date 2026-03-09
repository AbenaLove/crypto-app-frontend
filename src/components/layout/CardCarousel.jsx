import { useRef } from "react";

function CardCarousel({ title, description, children }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behaviour: "smooth",
    });
  };

  return (
    <>
    <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-5">
      <h1 className="sub-subheading">{title}</h1>
      <p className="font-bold text-gray-600">{description}</p>
      <a className="text-blue-600 font-medium">Read more</a>
    </div>
    <div className="relative">
      <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
        left
      </button>
      <div ref={scrollRef} className="flex overflow-x-auto gap-6 scroll-smooth">
        {children}
      </div>
      <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
        right
      </button>
    </div>
    </div>
    </>
  )
}
export default CardCarousel;