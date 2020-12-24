#!/usr/local/bin/node

const { Command } = require('commander');
const program = new Command();

program
    .version(require('./package').version)

program
  .command('create <app-name>')
  .description('create a new project powered by vue-cli-service')
  .action(() => {
    // require('./test')()
    console.log('asdas')
  })


program.parse(process.argv)