import Link from 'next/link'
import { getSortedPostsData } from '../lib/content'

export default function Page() {
	const allPostsData = getSortedPostsData()
	return (
		<div>
			<h1 className="text-lg pb-5 text-red-700 font-semibold">Essays</h1>
			<div className="flex flex-col -my-1">
				{allPostsData.length === 0 && (
					<div className="text-gray-400">No essays yet</div>
				)}
				{allPostsData.map(({ id, date, title }) => (
					<Link
						href={`/${id}`}
						key={id}
						className="flex justify-between gap-3 flex-wrap py-1.5 hover:text-red-700 group"
					>
						<div className="font-medium group-hover:underline">
							{title}
						</div>
						<div className="text-gray-400">
							{new Date(date).toLocaleDateString()}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
