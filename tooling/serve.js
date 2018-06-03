const LocalWebServer = require('local-web-server');
const chalk = require('chalk');
const moment = require('moment');
const getPort = require('get-port');
const rollup = require('rollup');
const options = require('../rollup.config.js');
const watcher = rollup.watch(options);
const notifier = require('node-notifier');
const pkg = require('../package.json');

function timestamp()
{
  return chalk.yellow(moment().format('HH:mm:ss '));
}

watcher.on('event', function(event)
{
  switch(event.code)
  {
    case 'END':
    {
      console.log(`${timestamp() + chalk.red('Rollup')} rebuild ${chalk.green('finished')}`);

      notifier.notify
      ({
        title: `${pkg.name} builder`,
        message: `finished rebuilding [${pkg.name}]`
      });
    } break;

    case 'ERROR':
    case 'FATAL':
    {
      console.log(`${chalk.red('Error: ')} ${event.error}`);
      console.log(event.error);
      notifier.notify
      ({
        title: `${pkg.name} builder`,
        message: `error rebuilding [${pkg.name}]`
      });
    } break;
  }
});

module.exports = (function()
{
  const localWebServer = new LocalWebServer();

  getPort({port: 3000}).then(port =>
  {
    const server = localWebServer.listen
    ({
      port: port
    , directory: '.'
    , maxConnections: 1000
    , rewrite:
      [ { from: '/lib/*'
        , to: '/node_modules/$1'
        }
      , { from: '/main.js'
        , to: `/build/${pkg.name}.js`
        }
      , { from: '',
          to: '/test/index.html'
        }
      ]
    });

    console.log(`${timestamp()}server running ${chalk.yellow('@')} ${chalk.green('http://localhost:' + port)}`);
  });
})();