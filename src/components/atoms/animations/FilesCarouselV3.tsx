import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6,
    },
  },
};

const slidersVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: "#ff00008e",
  },
};
const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.3,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

/**
 * Custom carousel library
 * Used essentially to display the images of the announces
 * @author Fenyep Wangue
 * @Fenyep
 * @version 3.0
 */
const FilesCarouselV3 = ({
  files,
  showDots = false,
  fallbackSrc = "/images/image_placeholder.svg",
}: {
  files: string[];
  showDots?: boolean;
  fallbackSrc?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const multipleImages = useMemo(() => files.length > 1, [files]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === files.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? files.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Automatic play of the video when visible
  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      if (isVisible) {
        video.play().catch(console.error);
      } else {
        video.pause();
      }
    }
  }, [isVisible]);

  return (
    <div
      className={`relative flex aspect-video size-full ${
        files.length > 0 ? "min-h-44" : ""
      } justify-center`}
    >
      <AnimatePresence>
        {files && files[currentIndex] ? (
          <>
            {files[currentIndex].includes(".mp4") ? (
              <motion.video
                ref={videoRef}
                muted
                key={currentIndex}
                src={files[currentIndex]}
                controls
                playsInline
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop if fallback also fails
                  target.src = fallbackSrc;
                }}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                className="rounded-[10px] object-contain"
                exit="exit"
              />
            ) : (
              <motion.img
                key={currentIndex}
                src={files[currentIndex]}
                alt={`image${currentIndex + 1}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop if fallback also fails
                  target.src = fallbackSrc;
                }}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                className="size-full object-contain"
                exit="exit"
                loading="lazy"
              />
            )}
          </>
        ) : null}
      </AnimatePresence>
      {multipleImages ? (
        <div className="absolute left-1/2 top-1/2 mx-auto flex w-[95%] -translate-x-1/2 -translate-y-1/2 justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            role="button"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-600/60 text-white"
            onClick={(e) => {
              handlePrevious();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ChevronLeftIcon className="size-7 text-white" />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            role="button"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-600/60 text-white"
            onClick={(e) => {
              handleNext();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ChevronRightIcon className="size-7 text-white" />
          </motion.div>
        </div>
      ) : null}
      {multipleImages && showDots ? (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-center gap-3 rounded-full bg-black/25 px-2 py-1">
          {files.map((_, index) => (
            <motion.div
              key={index}
              className={`size-[15px] rounded-[50%] bg-primary-300 ${
                currentIndex === index ? "bg-primary-600" : ""
              }`}
              onClick={(e) => {
                handleDotClick(index);
                e.stopPropagation();
              }}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              role="button"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilesCarouselV3;
