import express from 'express';
import config from '../../webpack/config';

const indexController = express.Router();

indexController.get('*', (req, res) => {
  let assets;

  if (config.useWebpack) {
    const stats = res.locals.webpackStats.toJson();
    assets = [].concat(stats.assetsByChunkName.main).map(path => `${config.assetPath}${path}`);
  } else {
    let manifest = require(`../../${config.BUILD}/${config.MANIFEST}`); // eslint-disable-line
    if (req.query.version) {
      manifest = require(`../../${config.BUILD}/${config.getManifest(req.query.version)}`); // eslint-disable-line
    }

    assets = Object.values(manifest);
  }

  const cssAssets = assets.filter(path => path.endsWith('.css'));
  const jsAssets = assets.filter(path => path.endsWith('.js'));

  const html = `<!doctype html>
    <html>
        <head>
            <title>My App</title>
            
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600" rel="stylesheet">
            
            ${
              cssAssets.map(path => `<link rel="stylesheet" href="${path}">`).join('')
            }
        </head>
        <body>
            <div id="root"></div>
            ${
              jsAssets.map(path => `<script src="${path}"></script>`).join('')
            }
        </body>
    </html>`;

  res.send(html);
});

export default indexController;
