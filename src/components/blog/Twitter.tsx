import { extractLastPathname } from "@/lib/urlPatterns";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Twitter = ({ url }: { url: string }) => {
  const tweetId = extractLastPathname(url);

  return (
    <div className="mx-auto mt-6 w-4/5">
      <div className="flex justify-center">
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
    </div>
  );
};

export default Twitter;
