import {
    motion,

} from "framer-motion"
import {useEffect, useState} from "react";


export const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden"
        setTimeout(() => {
            document.querySelector("body").style.overflow = "auto"
        }, 3500)
    }, []);
    return (
        <div
            style={{
                position: "relative"
            }}

        >
            <motion.div
                initial={{
                    x: "100%"
                }}
                animate={{
                    x: "0"
                }}
                exit={{
                    x: "-100%"
                }}
                transition={{
                    duration: 3
                }}
                style={{
                    right: "0",
                    position: "absolute",
                    background: "#111",
                    width: "40vw",
                    height: "100vh"
                }}
            />

            <motion.div
                initial={{
                    x: "-100%"
                }}
                animate={{
                    x: "0"
                }}
                exit={{
                    x: "100%"
                }}
                transition={{
                    duration: 3
                }}
                style={{
                    left: "0",
                    clipPath: "polygon(0px 0px, 400.5px 0px, 100% 500.6px, 409.5px 939px, 0px 939px)",
                    position: "absolute",
                    background: "#111",
                    width: "40vw",
                    height: "100vh"
                }}/>

            <motion.div
                initial={{
                    y: "-100%"
                }}
                animate={{
                    y: "0"
                }}
                exit={{
                    y: "100%"
                }}
                transition={{
                    duration: 3
                }}
                style={{
                    top: "0",
                    left: "auto",
                    right: "auto",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    background: "#111",
                    width: "100vw",
                    height: "30vh"
                }}
            />


            <motion.div
                initial={{
                    y: "120%"
                }}
                animate={{
                    y: "-100%"
                }}
                transition={{
                    duration: 3
                }}
                style={{
                    top: "100vh",
                    left: "auto",
                    right: "auto",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    background: "#111",
                    width: "100vw",
                    height: "20vh"
                }}
            />


        </div>
    );
};

