import React from "react";

const commonStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    width: "100vw",
    height: "8vw",
    backgroundColor: "black",
    opacity: 0.5,
    display: "flex",
    justifyContent: "space-around",
    padding: "0 8vw",
    alignItems: "center",
};

const titles = [
    { className: "title1", top: "70vw" },
    { className: "title2", top: "120vw" },
    { className: "title3", top: "153vw" },
    { className: "title4", top: "190vw" },
];

function scrollToTitle(className: string) {
    const el = document.querySelector(`.${className}`);
    el?.scrollIntoView({ behavior: "smooth" });
}
const idDev = false;
import bgImabe from '../public/9a.png'
export default function App() {
    return (
        <div className="app-container" style={{ position: "relative" }}>
            <img src={bgImabe} alt="content" />
            <div
                className="nav-buttons"
                style={{
                    position: "absolute",
                    top: "37vw",
                }}
            >
                {titles.map((item, idx) => (
                    <button
                        style={{
                            opacity: idDev ? 1 : 0,
                        }}
                        key={item.className}
                        onClick={() => scrollToTitle(item.className)}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
            {titles.map((item) => (
                <div key={item.className} className={item.className} style={{ ...commonStyle, top: item.top, opacity: idDev ? 1 : 0 }}></div>
            ))}
        </div>
    );
}
