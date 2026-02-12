import { motion } from "framer-motion";
import "./tiltcard.css";

export default function OrbitCard({ title, text, rotate }) {
  return (
    <motion.div
      className="orbit-wrapper"
      style={{ transform: `rotate(${rotate}deg)` }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="orbit-ring" />

      <div className="card">
        <h3>{title}</h3>

        <div className="logo">{"</>"}</div>

        <p>{text}</p>
      </div>
    </motion.div>
  );
}
