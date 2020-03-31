/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const chalk = require('chalk');

const { log } = console;
const error = (...message) => log(chalk.bgRedBright('ERROR:'), chalk.bold.red(...message));
const warning = (...message) => log(chalk.bgYellowBright('WARNING:'), chalk.yellow(...message));
const info = (...message) => log(chalk.bgGreenBright('INFO:'), chalk.green(...message));
const config = (...message) => log(chalk.bold.keyword('orange')('CONFIG:'), chalk.underline.keyword('orange')(...message));

module.exports = {
    error,
    warning,
    info,
    config,
};
