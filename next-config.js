const withPlugins = require('next-compose-plugins');
const withStyledComponents = require('next-plugin-styled-components');

module.exports = withPlugins([withStyledComponents], {
  // Otras configuraciones de Next.js aquí...
});
