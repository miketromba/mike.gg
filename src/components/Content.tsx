export default function Content({ html }: { html: string }) {
	return (
		<div
			className="flex flex-col -my-1 gap-1 mt-5 prose-sm prose-a:text-red-700 prose-a:underline prose-h2:text-lg prose-headings:text-red-700 prose-headings:font-semibold prose-p:my-2 prose-p:text-[15px] prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2 prose-ul:my-2 prose-ol:my-2 prose-blockquote:my-2 prose-blockquote:border-red-700 prose-li:text-[15px] prose-blockquote:text-[15px]"
			dangerouslySetInnerHTML={{
				__html: html
			}}
		></div>
	)
}
