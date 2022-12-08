import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IDefaultAnimationProps extends PropsWithChildren<{}> {
  delay?: number;
  style?: any;
}

export const DefaultAnimation = ({
  children,
  delay,
  style,
}: IDefaultAnimationProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay ?? 0.4 },
    },
    hidden: { opacity: 0, y: 20 },
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
