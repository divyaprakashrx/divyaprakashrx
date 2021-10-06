const { Player, Controls } = require("@lottiefiles/react-lottie-player");

const PC = () => (
  <Player
    autoplay
    loop
    src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
    style={{
      height: "30vh",
      width: "30vh",
    }}
  >
  </Player>
);

export default PC