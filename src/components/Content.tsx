export default function Content({ html }: { html: string }) {
	return (
		<div
			className="flex flex-col -my-1 gap-1 mt-5 prose-sm prose-a:text-red-700 prose-a:underline prose-h2:text-lg prose-headings:text-red-700 prose-headings:font-semibold prose-p:my-2 prose-p:text-[15px] prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2"
			dangerouslySetInnerHTML={{
				__html: html
			}}
		></div>
	)
}
