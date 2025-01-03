import Content from '@/components/Content'
import { getAboutPageData } from '@/lib/content'
import Image from 'next/image'

export default function Page() {
	const post = getAboutPageData()
	return (
		<div>
			<h1 className="text-lg pb-5 text-red-700 font-semibold">About</h1>
			<Image
				src="/mike.jpg"
				alt="Michael Tromba"
				className="rounded-lg shadow-lg"
				width={600}
				height={600}
			/>
			<Content html={post.content} />
		</div>
	)
}
