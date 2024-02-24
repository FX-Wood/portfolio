import { NextResponse } from 'next/server'

export function middleware(request) {
	if (process.env.NODE_ENV === 'production') {
		// redirect https
		console.log(request.headers)
		if (request.headers['x-forwarded-proto'] !== 'https') {
			NextResponse.redirect(`https://${request.headers['host']}${request.url}`)
		}
	}
}

