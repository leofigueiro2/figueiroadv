module.exports = {
  siteUrl: 'https://figueiroadvocacia.com.br',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/blog/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://figueiroadvocacia/server-sitemap.xml'],
  },
};