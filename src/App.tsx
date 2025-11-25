export default function App() {
    return (
        <div className="app-container">
            <img src="/src/reference/9a.png" alt="content" />
            <div
                className="title"
                style={{
                    background: "color",
                    position: "absolute",
                    top: "37vw",
                    left: 0,
                    width: "100%",
                    height: "5vw",
                    backgroundColor: "black",
                    opacity: 0.5,
                    display: "flex",
                    justifyContent: 'space-around',
                    padding:'0 8vw',
                    alignItems: "center",
                }}
            >
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>

            </div>
            <div></div>
        </div>
    );
}
