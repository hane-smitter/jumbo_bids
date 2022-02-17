import React, { useState } from "react";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon,
} from "@mui/icons-material";

import { images } from "./source/source";
import Styles from "./styles";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    let x = direction < 0 ? -1000 : 1000;
    return {
      zIndex: 0,
      x,
      opacity: 0,
    };
  },
};

const Banner = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Styles.BannerCont>
      <AnimatePresence initial={false} custom={direction}>
        <Styles.BannerImg
          key={page}
          component={motion.img}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          whileDrag={{ cursor: "grabbing" }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(-1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(1);
            }
          }}
        />
      </AnimatePresence>
      <Styles.ArrowCont sx={{ left: 5 }} onClick={() => paginate(-1)}>
        <ArrowLeftIcon sx={{ m: "auto" }} />
      </Styles.ArrowCont>
      <Styles.ArrowCont sx={{ right: 5 }} onClick={() => paginate(1)}>
        <ArrowRightIcon sx={{ m: "auto" }} />
      </Styles.ArrowCont>
    </Styles.BannerCont>
  );
};

export default React.memo(Banner);
