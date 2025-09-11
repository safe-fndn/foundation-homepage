import { getYoutubeVideoSrc, isYouTubeUrl } from "@/lib/urlPatterns";

const MediaPlayer = ({ url }: { url: string }) => {
  const videoSrc = isYouTubeUrl(url) ? getYoutubeVideoSrc(url) : url;

  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
      <iframe
        width="853"
        height="480"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Embedded Video"
        className="absolute top-0 left-0 w-full h-full border-none"
      />
    </div>
  );
};

export default MediaPlayer;
