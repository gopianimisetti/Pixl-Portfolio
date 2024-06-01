// sitemap-generator.js

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
  });
  
  const router = require('./src/sitemap-routes').default;
  const Sitemap = require('react-router-sitemap').default;
  
  const generateSitemap = () => {
    return (
      new Sitemap(router)
        .build('https://pixldesigners.com') // Replace with your domain
        .save('./public/sitemap.xml') // The output directory for the sitemap
    );
  };
  
  generateSitemap();
  