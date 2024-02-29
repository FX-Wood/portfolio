import { NextResponse } from 'next/server'

export function middleware(request) {
	if (process.env.NODE_ENV === 'production') {
		// redirect https
		if (request.headers.get('x-forwarded-proto') !== 'https') {
			const redirectURL = new URL(`https://${request.headers.get('host')}${request.nextUrl.pathname}`)
			return NextResponse.redirect(redirectURL.toString(), 301)
		}
	}
}

