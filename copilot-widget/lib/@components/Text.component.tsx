import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  data: {
    message: string;
  };
  id: string;
};

/**
 * The Basic Text component
 */
export function Text(props: Props) {
  const {
    data: { message },
    id,
  } = props;

  return (
    <div className="space-y-2 flex-1">
      <div className=" w-fit">
        <div dir="auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-slate font-medium text-sm prose-sm prose-h1:font-medium prose-h2:font-normal prose-headings:my-1 max-w-full"
          >
            {message}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
