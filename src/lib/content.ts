import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.resolve('content/posts')

export interface Post {
	id: string
	title: string
	date: string
	content: string
}

export function getSortedPostsData(): Post[] {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			content: marked.parse(matterResult.content) as string,
			...(matterResult.data as {
				title: string
				date: string
			})
		}
	})
	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})
}

export function getPost(id: string): Post {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const matterResult = matter(fileContents)
	return {
		id,
		content: marked.parse(matterResult.content) as string,
		...(matterResult.data as {
			title: string
			date: string
		})
	}
}

export function getAboutPageData(): Post {
	const fullPath = path.resolve('content/about.md')
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const matterResult = matter(fileContents)
	return {
		id: 'about',
		content: marked.parse(matterResult.content) as string,
		...(matterResult.data as {
			title: string
			date: string
		})
	}
}
