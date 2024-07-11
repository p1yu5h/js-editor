import { useState } from "react";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <div className="header">
      <p>Javascript Interpreter</p>
      <button className="fullscreen-btn" onClick={toggleFullScreen}>
        {isFullScreen ? <MdOutlineFullscreenExit size="1.5rem" /> : <MdOutlineFullscreen size="1.5rem" />}
      </button>
    </div>
  );
};

export default Header;
