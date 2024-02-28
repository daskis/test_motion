import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap
} from "framer-motion";
import {useRef} from "react";
interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

export function ParallaxText({children, baseVelocity = 100}: ParallaxProps) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const x = useTransform(baseX, (v) => `${wrap(-10, -30, v)}%`);
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 3000);
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{x}}>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}
