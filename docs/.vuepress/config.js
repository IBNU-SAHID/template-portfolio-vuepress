module.exports = {
    base: '/',
    title: 'Portfolio',
    description: 'Porfolio Page',
    port: 8000,
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' }
        ]
    }
}