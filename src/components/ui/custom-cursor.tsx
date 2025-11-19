import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Hide custom cursor on mobile/tablet
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        // Add class to body to hide default cursor
        document.body.classList.add('custom-cursor-active');

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") !== null ||
                target.closest("button") !== null ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        const handleMouseEnter = () => {
            setIsHidden(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.body.classList.remove('custom-cursor-active');
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    // Hide custom cursor on mobile/tablet
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-foreground rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-foreground/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 2 : 1,
                    opacity: isHidden ? 0 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
