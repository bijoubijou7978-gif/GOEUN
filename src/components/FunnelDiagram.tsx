import { motion } from "motion/react";

export default function FunnelDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto my-16 flex justify-center">
      <motion.img 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://storage.googleapis.com/aistudio-user-uploads-prod/104118556752709295594/1741964590326_image.jpg" 
        alt="고은마케팅 홍보 사이클 인포그래픽" 
        className="w-full h-auto rounded-3xl shadow-xl"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
