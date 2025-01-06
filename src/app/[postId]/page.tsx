// import Link from 'next/link'
import Content from '@/components/Content'
import { getPost, getSortedPostsData } from '../../lib/content'
import { permanentRedirect } from 'next/navigation'
import { redirects } from '../../../content/redirects'

// Return a list of `params` to populate the [postId] dynamic segment
export async function generateStaticParams() {
	const posts = getSortedPostsData()
	return [
		...posts.map(post => ({
			pageId: post.id
		})),
		...redirects.map(([from]) => {
			return {
				pageId: from
			}
		})
	]
}

export default async function Page({
	params
}: {
	params: Promise<{
		postId: string
	}>
}) {
	for (const [from, to] of redirects) {
		if (from === (await params).postId) {
			permanentRedirect(`/${to}`)
		}
	}
	const { postId } = await params
	if (typeof postId !== 'string') throw new Error('Page not found')
	const post = getPost(postId)
	return (
		<div>
			<h1 className="text-2xl text-red-700 font-semibold">
				{post.title}
			</h1>
			<div className="text-gray-400 shrink-0 mt-2 text-sm">
				{new Date(post.date).toLocaleDateString()}
			</div>
			<Content html={post.content} />
		</div>
	)
}
