import {ParallaxText} from "../../components/ParalaxText.tsx";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {useState} from "react";

export const SecondPage = () => {
    const {ref: inViewRef, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const [count, setCount] = useState(3000)

    return (
        <section style={{width: "100%"}}>
            <ParallaxText baseVelocity={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at corporis eius eligendi eos,
                error esse excepturi incidunt, labore libero magnam perspiciatis porro quae quaerat recusandae sequi
                tenetur, totam veniam!
            </ParallaxText>

            <motion.div
                ref={inViewRef}
                initial={{y: "100%", opacity: 0}}
                animate={{
                    y: inView ? "-100%" : "-50%",
                    opacity: inView ? 1 : 0
                }}
                transition={{duration: 1}}
                style={{
                    marginTop: "400px",
                    fontSize: "40px"
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias autem cumque dicta dolore
                eius, est excepturi expedita ipsa magnam, molestiae necessitatibus officiis possimus praesentium quia
                quo rem? Ipsa, voluptatem.
            </motion.div>

        </section>
    );
};
