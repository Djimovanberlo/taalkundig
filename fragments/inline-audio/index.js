const InlineAudio = ({ url }) => {
  return (
    <span className="inlineAudio">
      <audio controls src={url} />
    </span>
  );
};

export default InlineAudio;
