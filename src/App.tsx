import React from "react";

export default function App() {
    const commonStyle: React.CSSProperties = {
        background: "color",
        position: "absolute",
        top: "37vw",
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
    return (
        <div className="app-container" style={{ position: "relative" }}>
            <img src="/src/reference/9a.png" alt="content" />
            <div
                className="nav-buttons"
                style={{
                    background: "color",
                    position: "absolute",
                    top: "37vw",
                }}
            >
                <button
                    onClick={() => {
                        document.querySelector(".title1")?.scrollIntoView();
                    }}
                >
                    1
                </button>
                <button
                    onClick={() => {
                        document.querySelector(".title2")?.scrollIntoView();
                    }}
                >
                    2
                </button>
                <button
                    onClick={() => {
                        document.querySelector(".title3")?.scrollIntoView();
                    }}
                >
                    3
                </button>
                <button
                    onClick={() => {
                        document.querySelector(".title4")?.scrollIntoView();
                    }}
                >
                    4
                </button>
            </div>
            <div
                className="title1"
                style={{
                    ...commonStyle,
                    top: "70vw",
                }}
            ></div>
            <div
                className="title2"
                style={{
                    ...commonStyle,
                    top: "120vw",
                }}
            ></div>
            <div
                className="title3"
                style={{
                    ...commonStyle,
                    top: "153vw",
                }}
            ></div>
            <div
                className="title4"
                style={{
                    ...commonStyle,
                    top: "190vw",
                }}
            ></div>
        </div>
    );
}
