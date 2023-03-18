import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import chalk from "chalk"
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts

const rl = createInterface(process.stdin, process.stdout)
const startColor = chalk.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
console.log(startColor('❤️ Iniciando...'));

try {
function getRandomColor() {
  const colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright', 'brightRed', 'brightGreen', 'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'rainbow', 'zebra', 'america'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomHexColor() {
  const hexColors = ['#3456ff', '#f80', '#f00808', '#fefe62', '#ff00ff', '#00ffff', '#ffffff', '#00ff00', '#8b00ff', '#ff5733', '#00ced1', '#f5a623', '#8e44ad', '#3498db', '#2ecc71', '#f39c12', '#d35400', '#c0392b', '#1abc9c', '#16a085', '#27ae60', '#2980b9', '#e74c3c', '#e67e22', '#2c3e50', '#34495e', '#7f8c8d', '#95a5a6', '#bdc3c7', '#ecf0f1', '#9b59b6', '#d35400', '#2980b9', '#8e44ad', '#e74c3c', '#16a085', '#f1c40f', '#f39c12', '#3498db', '#c0392b', '#1abc9c', '#2ecc71', '#e67e22', '#2c3e50', '#34495e', '#7f8c8d', '#95a5a6', '#bdc3c7', '#ecf0f1', '#9b59b6', '#f1c40f', '#3498db', '#e74c3c', '#34495e', '#f39c12', '#16a085', '#2980b9', '#8e44ad', '#c0392b', '#1abc9c', '#2ecc71', '#e67e22', '#2c3e50', '#95a5a6', '#7f8c8d', '#bdc3c7', '#ecf0f1', '#9b59b6', '#f1c40f', '#3498db', '#e74c3c', '#34495e', '#f39c12', '#16a085', '#2980b9', '#8e44ad', '#c0392b', '#1abc9c', '#2ecc71', '#e67e22', '#2c3e50', '#95a5a6', '#7f8c8d', '#bdc3c7', '#ecf0f1', '#9b59b6', '#f1c40f', '#3498db', '#e74c3c', '#34495e', '#f39c12', '#16a085', '#2980b9', '#8e44ad', '#c0392b', '#1abc9c', '#2ecc71', '#e67e22', '#2c3e50', '#95a5a6', '#7f8c8d', '#bdc3c7', '#ecf0f1', '#9b59b6', '#f1c40f', '#3498db', '#e74c3c', '#34495e', '#f39c12', '#16a085', '#2980b9', '#8e44ad', '#c0392b', '#1abc9c', '#2ecc71', '#e67e22', '#2c3e50', '#95a5a6', '#7f8c8d', '#bdc3c7']
  const randomIndex = Math.floor(Math.random() * hexColors.length);
  return hexColors[randomIndex];
}

function getRandomGradient() {  
  const useRandomHexColors = Math.random() < 0.5; // 50% colors
  if (useRandomHexColors) {
    return [getRandomHexColor(), getRandomHexColor()];
  } else {
    return [getRandomColor(), getRandomColor()];
  }
}

const options = {
  font: 'block',
  align: 'center',
  colors: getRandomGradient(),
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
}

  cfonts.say('gatabot\nlite\nmd'.trim(), options);
} catch (err) {
  say('GataBot\nLite\nMD', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'magenta']
  });
}

say(`Gracias a @gata_dios`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
});


var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Error Inesperado ⚠️', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (process.env.pm_id) {
process.exit(1)
} else {
process.exit()
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')
