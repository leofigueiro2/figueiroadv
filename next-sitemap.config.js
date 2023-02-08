module.exports = {
  siteUrl: 'figueiroadvocacia.com.br',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  //exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://figueiroadvocacia/server-sitemap.xml'],
  },
};