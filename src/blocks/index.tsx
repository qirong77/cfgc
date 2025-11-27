export function Blocks(props: { style?: React.CSSProperties; title?: string; link?: string; isDev: boolean }) {
    return (
        <div
            onClick={() => {
                window.open(props.link, "__blank");
            }}
            style={{
                position: "absolute",
                width: "30vw",
                left: "10vw",
                height: "20vw",
                top: "175vw",
                background: props.isDev ? "blue" : "",
                ...props.style,
            }}
        ></div>
    );
}
