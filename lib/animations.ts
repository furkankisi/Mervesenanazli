import { Variants, Transition } from "framer-motion";

// Transition tipini ekleyerek TypeScript'in ease dizisini doğru tanımasını sağlıyoruz
export const transitionSettings: Transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: transitionSettings }
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
};