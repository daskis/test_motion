import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const PageWrapper = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const {pathname} = useLocation()
    useEffect(() => {
        if (pathname !== "/") {
            document.querySelector("body").style.overflow = "hidden"
        }

    }, []);
    setTimeout(() => {
        if (pathname !== "/") {
            document.querySelector("body").style.overflow = "auto"
        }
    }, 2000)
    return (
        <div>
            <AnimatePresence>
                {isLoading && pathname !== "/" && (
                    <motion.div
                        key="modal"
                        style={{backgroundColor: "#000"}}
                        initial={{
                            height: "100vh",
                            width: "100vw",
                            y: "100%",
                            opacity: 1,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        onAnimationComplete={() => {
                            setTimeout(() => {
                                setIsLoading(false)
                            }, 2000)
                        }}
                        transition={{
                            duration: 1,
                        }}
                        exit={{
                            y: "-100%",
                            opacity: 0,
                        }}
                    />
                )}
                <motion.div
                >
                    {children}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default PageWrapper;
