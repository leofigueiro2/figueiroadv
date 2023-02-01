module.exports = {
  siteUrl: 'figueiroadv-kq7b.vercel.app',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  //exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://figueiroadv-kq7b.vercel.app/server-sitemap.xml'],
  },
};