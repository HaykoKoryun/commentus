const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify').uglify;
const pkg = require('./package.json');

const output = process.env.PROD ? 'dist' : 'build';

module.exports =
{ input: 'index.js',
  output:
  { file: `./${output}/${pkg.name}${process.env.PROD ? '.min' : ''}.js`
  , format: 'iife'
  , sourcemap: process.env.PROD ? false : true
  , strict: false
  , name: 'Commentus'
  },
  plugins:
  [ babel()
  , process.env.PROD ? uglify() : () => {}
  ]
}
