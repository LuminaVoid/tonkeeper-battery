import { motion } from "framer-motion";

const tonPath =
  "M37.5602 15.6277H18.4385C14.9227 15.6277 12.6943 19.4202 14.4631 22.4861L26.2643 42.9409C27.0344 44.2765 28.9643 44.2765 29.7344 42.9409L41.538 22.4861C43.3044 19.4251 41.076 15.6277 37.5626 15.6277H37.5602ZM26.2547 36.8068L23.6846 31.8327L17.4832 20.7414C17.0741 20.0315 17.5794 19.1218 18.4361 19.1218H26.2523V36.8092L26.2547 36.8068ZM38.5107 20.739L32.3117 31.8351L29.7416 36.8068V19.1194H37.5578C38.4145 19.1194 38.9198 20.0291 38.5107 20.739Z";

const draw = {
  hidden: { pathLength: 0, opacity: 0, fillOpacity: 0, strokeWidth: 1 },
  visible: () => {
    const delay = 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      fillOpacity: 1,
      strokeWidth: 0,
      transition: {
        pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        fillOpacity: { delay: delay + 0.8, duration: 0.35 },
        strokeWidth: { delay: delay + 0.6, duration: 0.5 },
      },
    };
  },
};

function NotCoin() {
  return (
    <motion.svg
      width="168"
      height="168"
      viewBox="0 0 56 56"
      style={{ transform: "rotate(180deg)" }}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        initial={{ pathLength: 0, fillOpacity: 0, strokeWidth: 1 }}
        animate={{ pathLength: 1, fillOpacity: 1, strokeWidth: 0 }}
        fill={"#ffffff"}
        stroke={"#ffffff"}
        opacity={0}
        d={tonPath}
        variants={draw}
      />
    </motion.svg>
  );
}

export default NotCoin;
