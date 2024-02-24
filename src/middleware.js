import { NextResponse } from 'next/server'

export function middleware(request) {
	if (process.env.NODE_ENV === 'production') {
		// redirect https
		console.log(request.headers)
		console.log(request.url)
		console.log('path', request.path)
		console.log(request.nextUrl)
		if (request.headers['x-forwarded-proto'] !== 'https') {
			const redirectURL = new URL(`https://${request.headers['host']}${request.nextUrl.pathname}`)
			console.log('redirectURL', redirectURL.toString())
			return NextResponse.redirect(redirectURL.toString())
		}
	}
}

