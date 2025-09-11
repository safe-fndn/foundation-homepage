import {
  documentToReactComponents,
  type RenderNode,
  type Options,
} from "@contentful/rich-text-react-renderer";
import {
  INLINES,
  type Document as ContentfulDocument,
  type Hyperlink,
  BLOCKS,
  MARKS,
  type Node,
  type Heading1,
  type Heading2,
  type Heading3,
  type Heading4,
  type Heading5,
} from "@contentful/rich-text-types";
import { isText } from "@/lib/contentful/typeGaurds";
import kebabCase from "lodash/kebabCase";
import Image from "next/image";
import { isTwitterUrl, isYouTubeUrl } from "@/lib/urlPatterns";
import MediaPlayer from "./MediaPlayer";
import Twitter from "../Twitter";

const generateTextContent = (
  node: Heading1 | Heading2 | Heading3 | Heading4 | Heading5
) => {
  return node.content.filter(isText).map((node, index) => {
    const isBold = node.marks.some((mark) => mark.type === "bold");
    const isItalic = node.marks.some((mark) => mark.type === "italic");
    return isBold ? (
      <b key={index}>{node.value}</b>
    ) : isItalic ? (
      <i key={index}>{node.value}</i>
    ) : (
      <span key={index}>{node.value}</span>
    );
  });
};

const options: Options = {
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      return (
        <code className="leading-[18px] px-[6px] py-[2px] text-base text-orange-600 border border-gray-200 rounded-md bg-gray-50">
          {text}
        </code>
      );
    },
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: Hyperlink) => {
      const text = node.content.find(isText)?.value;
      return (
        <a
          className="text-[#1A1A1A] text-xl underline break-words"
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
    },
    [BLOCKS.HEADING_1]: (node: Heading1) => {
      const content = generateTextContent(node);
      return (
        <h1 className="text-[44px] leading-[120%] md:text-[54px] font-bold text-[#1A1A1A] mb-6 mt-8">
          {content}
        </h1>
      );
    },
    [BLOCKS.HEADING_2]: (node: Heading2) => {
      const content = generateTextContent(node);
      return (
        <h2 className="text-[44px] leading-[120%] md:text-[54px] font-bold text-[#1A1A1A] mb-6 mt-8">
          {content}
        </h2>
      );
    },
    [BLOCKS.HEADING_3]: (node: Heading3) => {
      const content = generateTextContent(node);
      const textContent = node.content.find(isText)?.value;

      return (
        <h3
          className="text-[40px] leading-[120%] md:text-[48px] text-[#1A1A1A] mb-6 mt-8"
          id={kebabCase(textContent)}
        >
          {content}
        </h3>
      );
    },
    [BLOCKS.HEADING_4]: (node: Heading4) => {
      const content = generateTextContent(node);
      return (
        <h5 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-4 mt-6">
          {content}
        </h5>
      );
    },
    [BLOCKS.HEADING_5]: (node: Heading5) => {
      const content = generateTextContent(node);
      return (
        <h5 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-4 mt-6">
          {content}
        </h5>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { title, description, file } = node.data.target.fields;

      // Map the contentful tags to custom classes
      const tags =
        (node.data.target.metadata.tags as { sys: { id: string } }[]) || [];
      const hasSmallImage = tags.some((tag) => tag.sys.id === "smallImage");
      const hasMediumImage = tags.some((tag) => tag.sys.id === "mediumImage");

      const mimeType = file.contentType;
      const mimeGroup = mimeType.split("/")[0];

      return (
        <>
          {mimeGroup === "image" && (
            <div className="flex flex-col justify-center items-center my-8">
              <Image
                title={title}
                alt={description || title || ""}
                src={file.url}
                width={800}
                height={400}
                className={`rounded-lg ${
                  hasSmallImage ? "w-1/2" : hasMediumImage ? "w-3/4" : "w-full"
                } h-auto`}
              />
              {description && (
                <span className="mt-2 text-sm text-gray-600 italic text-center">
                  {description}
                </span>
              )}
            </div>
          )}
          {mimeGroup === "video" && (
            <div className="my-8">
              <video controls className="w-full rounded-lg">
                <source src={file.url} type={mimeType} />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
      const entryUrl = node.data.target.fields.url;

      return isYouTubeUrl(entryUrl) ? (
        <MediaPlayer url={entryUrl} />
      ) : isTwitterUrl(entryUrl) ? (
        <Twitter url={entryUrl} />
      ) : null;
    },
  },
} as unknown as RenderNode;

const RichText = (props: ContentfulDocument) => {
  return (
    <div className="rich-text">{documentToReactComponents(props, options)}</div>
  );
};

export default RichText;
