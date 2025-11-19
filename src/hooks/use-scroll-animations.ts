import { useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { useRef } from "react";

export function useScrollAnimation() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return { ref, scrollYProgress };
}

export function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export function useScrollOpacity(value: MotionValue<number>) {
    return useTransform(value, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
}

export function useScrollScale(value: MotionValue<number>) {
    return useTransform(value, [0, 0.5, 1], [0.8, 1, 0.8]);
}

export function useSmoothScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return scaleX;
}
