export const metadata = {
    title: "fx.codes",
    description: "portfolio site for FX",
    charSet: 'utf-8',
    icon: '/media/favicon.ico'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="../public/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
            <title>FX Wood</title>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">{children}</div>
          </body>
        </html>
    )
}
