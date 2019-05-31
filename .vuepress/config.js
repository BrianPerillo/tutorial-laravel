module.exports = {
  title: 'Laravel',
  description: 'Aprende a utilizar Laravel en tus proyectos web',
  base: '/laravel',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:{
      '/':[
        '',
        '/bases-datos/'
      ]
    }
  }
 
}