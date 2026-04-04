import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const auth = req.headers.get('authorization')
    const password = process.env.ADMIN_PASSWORD ?? 'admin123'
    const expected = 'Basic ' + Buffer.from(`admin:${password}`).toString('base64')

    if (auth !== expected) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Kamperownia Admin", charset="UTF-8"',
        },
      })
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
