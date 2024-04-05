import markdownStyles from "./markdown-styles.module.css";

type Props = {
	content: string;
};

export function PostBody({ content }: Props) {
	return (
		<div className="text-base font-light">
			<div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
