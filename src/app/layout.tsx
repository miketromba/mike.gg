import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Michael Tromba | Mike.gg',
	description: "Michael Tromba's website"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="bg-white text-black">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center mx-5`}
			>
				<header className="my-3 flex items-center flex-wrap gap-3.5 flex-col sm:flex-row sm:gap-6 border-b pb-3 justify-center sm:justify-between w-full max-w-lg border-gray-200">
					<Link href="/" className="flex items-center gap-3.5 group">
						<Image
							src="/mike-headshot.jpg"
							alt="Michael Tromba"
							width={40}
							height={40}
							className="rounded-full border border-gray-600 group-hover:border-red-700"
						/>
						<div className="font-medium group-hover:text-red-700 group-hover:underline">
							Michael Tromba
						</div>
					</Link>
					{/* <div className="w-0.5 h-4 rounded-full bg-gray-300 hidden sm:block"></div> */}
					<div className="flex items-center -m-2.5">
						<Link
							className="hover:text-red-800 hover:underline transition-colors p-2.5"
							href="/"
						>
							Essays
						</Link>
						<Link
							className="hover:text-red-800 hover:underline transition-colors p-2.5"
							href="/about"
						>
							About
						</Link>
						<Link
							className="hover:text-red-800 hover:underline transition-colors p-2.5"
							href="mailto:mike@flamelab.io"
						>
							Email
						</Link>
						<Link
							className="hover:text-red-800 hover:underline transition-colors p-2.5"
							href="https://x.com/miketromba"
							target="_blank"
						>
							Twitter
						</Link>
					</div>
				</header>
				<div className="rounded mx-5 mt-5 mb-20 w-full max-w-lg">
					{children}
				</div>
			</body>
		</html>
	)
}
