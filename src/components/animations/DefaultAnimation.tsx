import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IDefaultAnimationProps extends PropsWithChildren<{}> {
  delay?: number;
  style?: any;
  direction?: "bottom" | "top" | "left" | "right";
}

export const DefaultAnimation = ({
  children,
  delay,
  style,
  direction,
}: IDefaultAnimationProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const getTransform = () => {
    switch (direction) {
      case "left":
        return {
          visible: {
            x: 0,
          },
          hidden: {
            x: -50,
          },
        };

      default:
        return {
          visible: {
            y: 0,
          },
          hidden: {
            y: 20,
          },
        };
    }
  };

  const transform = getTransform();

  const boxVariant = {
    visible: {
      opacity: 1,
      ...transform.visible,
      transition: { duration: 0.5, delay: delay ?? 0.4 },
    },
    hidden: { opacity: 0, ...transform.hidden },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={style}
    >
      {children}
    </motion.div>
  );
};
