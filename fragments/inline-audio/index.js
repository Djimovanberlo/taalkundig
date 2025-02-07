import { useRef, useState, useEffect } from "react";

const InlineAudio = ({ url }) => {
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const audio = ref.current;
    const handleEnded = () => setIsPaused(true);

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const toggleAudio = () => {
    if (ref.current.paused) {
      ref.current.play();
      setIsPaused(false);
      return;
    }

    ref.current.pause();
    setIsPaused(true);
  };

  return (
    <span className="inlineAudio">
      <button onClick={toggleAudio} data-paused={isPaused} />
      <audio id="player" ref={ref} src={url} />
    </span>
  );
};

export default InlineAudio;
