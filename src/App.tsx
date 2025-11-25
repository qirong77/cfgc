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
const ExtraText = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#4d4d4dff",
                fontSize: "6px",
                padding: '10px',
                backgroundColor: "#f5f0e8",
            }}
        >
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: "5px",
                    // marginBottom: '1vw',
                    color: "#4d4c4cff",
                    opacity: 0.9,
                }}
            >
                中国林业集团召开党委专题(扩大)会议传达学习党的二十届四中全会精神
            </div>
            <div style={{ opacity: 0.9 }}>
                <div
                    style={{
                        fontSize: "4px",
                        margin: "10px 0",
                        color: "#717171ff",
                    }}
                >
                    10月30日，中国林业集团召开党委（扩大）会议，传达学习党的二十届四中全会精神。会议认真学习《中国共产党第二十届中央委员会第四次全体会议公报》、习近平总书记关于《中共中央关于制定国民经济和社会发展第十五个五年规划的建议》的说明以及习近平总书记在主持召开党外人士座谈会上的重要讲话精神，研究部署贯彻落实举措。【查看原文】
                </div>
            </div>
        </div>
    );
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
import bgImabe from "../public/9a.webp";
// @ts-ignore
import newimg from "../public/new.JPG";
export default function App() {
    return (
        <div className="app-container" style={{ position: "relative" }}>
            <img
                src={newimg}
                style={{
                    position: "absolute",
                    width: "30vw",
                    height: "20vw",
                    top: "178vw",
                    left: "12vw",
                }}
            />
            <img src={bgImabe} alt="content" />
            <div
                className="section0"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "40vw",
                    left: "10vw",
                    height: "20vw",
                    top: "93vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section1"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "40vw",
                    right: "10vw",
                    height: "20vw",
                    top: "93vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section2"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "50vw",
                    left: "10vw",
                    height: "20vw",
                    top: "140vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section2"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "50vw",
                    left: "40vw",
                    height: "20vw",
                    top: "140vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section33"
                onClick={() => {
                    window.open("https://mp.weixin.qq.com/s/1gCiezzdCR7WY_obM5mpcg",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "50vw",
                    left: "40vw",
                    height: "20vw",
                    top: "178vw",
                    background: idDev ? "red" : "",
                }}
            >
                <ExtraText />
            </div>
            <div
                className="section33"
                onClick={() => {
                    window.open("https://mp.weixin.qq.com/s/1gCiezzdCR7WY_obM5mpcg",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "30vw",
                    left: "10vw",
                    height: "20vw",
                    top: "175vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section4"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "40vw",
                    left: "50vw",
                    height: "30vw",
                    top: "225vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
            <div
                className="section44"
                onClick={() => {
                    window.open("http://www.sasac.gov.cn/n2588020/n2877938/n2879597/n2879599/c34788799/content.html",'__blank');
                }}
                style={{
                    position: "absolute",
                    width: "40vw",
                    left: "10vw",
                    height: "30vw",
                    top: "225vw",
                    background: idDev ? "red" : "",
                }}
            ></div>
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
