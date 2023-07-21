import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button } from "@/components/ui/button";

interface TextMarkdownProps {
	content?: string;
}

const TextMarkdown: React.FC<TextMarkdownProps> = ({ content }) => {
	const onCopy = (code: string) => {
		navigator.clipboard.writeText(code);
		toast.success("Copied!");
	};

	return (
		<ReactMarkdown
			components={{
				pre: ({ node, ...props }) => (
					<div className="overflow-auto w-full my-2 p-0 bg-[#1e1e1e] rounded-lg">
						<pre {...props} />
					</div>
				),
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					const codeChildren = String(children).replace(/\n$/, "");
					return !inline && match ? (
						<div className="relative">
							<Button
								variant="ghost"
								size="icon"
								className="absolute right-4 top-2 w-7 h-7"
								onClick={() => onCopy(codeChildren)}
							>
								<Copy className="text-muted-foreground w-4 h-4" />
							</Button>
							<SyntaxHighlighter
								{...props}
								// eslint-disable-next-line react/no-children-prop
								children={codeChildren}
								style={vscDarkPlus}
								language={match[1]}
								PreTag="div"
								showLineNumbers={false}
								wrapLongLines={false}
							/>
						</div>
					) : (
						<code {...props} className={className}>
							{children}
						</code>
					);
				},
			}}
			className="text-sm overflow-hidden leading-7"
		>
			{content || ""}
		</ReactMarkdown>
	);
};

export default TextMarkdown;
