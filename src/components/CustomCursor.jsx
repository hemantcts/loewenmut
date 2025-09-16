import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    if (!isDesktop) return null;

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "var(--bs-themecolor)",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                willChange: "transform, left, top", // ⚡ GPU hint for smoothness
            }}
        />
    );
};

export default CustomCursor;




// #custom - cursor { transform - origin: center; pointer - events: none; position: fixed; display: flex; justify - content: center; align - items: center; font - size: 1.3rem; font - weight: bold; top: 0px; left: 0px; width: 20px; height: 20px; transform: translate(-10px, -10px); border - radius: 50 %; background - color: #FFEC01; z - index: 10000; transition: width 400ms ease, height 400ms ease, transform 400ms ease, font 400ms ease; color: transparent; font - size: 0px; }

// #custom-cursor.big-cursor{width: 70px;height:70px;transform: translate(-35px, -35px); font-size:11px; color:#ffffff;}
// #custom-cursor.big-cursor.white-bg{width: 70px; height:70px; transform: translate(-35px, -35px);}

// #custom-cursor.white-bg {background-color:rgba(250, 250, 250, 0.9); color:#000000;}  
// #custom-cursor.white-bg-cursor {background-color:rgba(250, 250, 250, 0.7); color:#000000;}
// #custom-cursor.yellow-bg {background-color:rgba(255, 236, 1, 0.9); color:#000000;}

// #custom-cursor .cursor-text {padding:10px; white-space: nowrap;}

