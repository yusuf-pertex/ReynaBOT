import'../config.mjs'
import fs from 'fs'
import moment from 'moment-timezone'
import chalk from 'chalk'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import check from 'syntax-error'
import { xt } from './extra.mjs'
import { db } from './databases.mjs'

export function intro(){
    let flag = ' '.repeat(8)
    console.log(chalk.bold(chalk.bgRed('\n'+flag)+chalk.red(' '+bot.name3)
    +chalk.bgWhite('\n'+flag)+chalk.white(' Created by ')+chalk.green('@'+owner.ig+'\n')))
}

export async function loading(a,b){
    const P = [
    ' [|] Loading Screen.    ',
    ' [⁄] Loading Screen..   ',
    ' [—] Loading Screen.... ',
    ' [\\] Loading Screen.....'
    ]
    let x = 0;
    const loader = setInterval(() => {
        process.stdout.write(chalk.yellow(`\r${P[x++]} ${a}% ${b}`)+' '.repeat(100))
    x %= P.length
    }, 250)

    setTimeout(() => {
        clearInterval(loader)
    }, 5000)
}

export async function online(i){
    const P = [
    '[|] Online.   ',
    '[⁄] Online .  ',
    '[—] Online  . ',
    '[\\] Online   .'
    ]
    let x = 0;
    const loader = setInterval(() => {
        process.stdout.write(chalk.bold.bgGreen(`\r ${P[x++]} `)+chalk.bold.bgCyan(` Follow Instagram @${i} `)+' '.repeat(100))
    x %= P.length
    }, 250)
}

export async function log(a,b){
    switch (b){
    case 'bgGreen':
        process.stdout.write(chalk.bgGreen.bold('\r '+a+' ')+' '.repeat(100)+'\n\n')
        break
    case 'bgYellow':
        process.stdout.write(chalk.bgYellow.bold('\r '+a+' ')+' '.repeat(100)+'\n\n')
        break
    case 'bgRed':
        process.stdout.write(chalk.bgRed.bold('\r '+a+' ')+' '.repeat(100)+'\n\n')
        break
    case 'bgCyan':
        process.stdout.write(chalk.bgCyan.bold('\r '+a+' ')+' '.repeat(100)+'\n\n')
        break
    }
}

export async function notif(){
    let time = new Date().toLocaleTimeString()
    await process.stdout.write(
        chalk.bold.bgGreen(`\r [${time}] Pesan Masuk `) + chalk.bold.bgYellow(` ${xt.type} `) + ' '.repeat(100)
        + (xt.is.group ? chalk.bold.bgCyan(`\n Grup: `) + ` ${xt.group.id} ` + chalk.cyan(`${xt.group.name}`) : '')
        + chalk.bold.bgCyan(`\n Kontak: `) + ` ${xt.phoneNumber} ` + chalk.cyan(`${xt.name}`)
        + (xt.is.noBody ? '\n\n' : chalk.bold.bgYellow(`\n Pesan: `) + (xt.is.cmd ? chalk.yellow(` "${xt.body}"\n\n`) : ` "${xt.body}"\n\n`))
    )
}

export async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function cekPlugins(){
    let files = fs.readdirSync('./plugins/'),
    time = new Date().toTimeString(),
    errors = []
    process.stdout.write(chalk.bgGreen.bold(`\r [!] CHECK PLUGINS `)+' '.repeat(100)+'\n\n')
    await delay(500)
    for (let file of files) {
        await delay(250)
        let err = check(fs.readFileSync('./plugins/'+file), file, { sourceType: 'module' }),
        plugin = await import('../plugins/'+file),
        handler = plugin.default,
        filename = file.split`.`[0]

        if (err) {
            process.stdout.write(chalk.bgRed.bold('\r [!] ERROR ')+` ${time} `+chalk.red.bold(`${file} `)+chalk.red(err)+' '.repeat(100)+'\n')
            errors.push(file)
        } else {
            process.stdout.write(chalk.bgGreen.bold(`\r [!] INFO `)+` ${time} `+chalk.cyan(`${file} `)+' '.repeat(100)+'\n')
        }

        if (!plugin.default||typeof plugin.default !== 'object') continue

        if (!(filename in db.data.plugins)) {
            db.data.plugins[filename] = {
                cmd: handler.cmd ? handler.cmd : [],
                tag: handler.tag ? handler.tag : 'lainnya',
                info: handler.info ? handler.info : ''
            }
            db.data.cmds.push(...handler.cmd ? handler.cmd : [])
            await db.write()
        }
    }
    if (errors.length > 0) {
        process.stdout.write(chalk.bgRed.bold(`\r [!] ERROR PLUGIN: ${errors.length} `)+chalk.red.bold(` [ ${errors} ]`)+' '.repeat(100)+'\n')
    }
    process.stdout.write(chalk.bgGreen.bold(`\r\n [!] Cek plugins selesai `)+' '.repeat(100)+'\n\n')
}

export async function watchPlugins(){
    let time = new Date().toTimeString()
    await fs.watch('./plugins/', (a, b) => {
        let err = check(fs.readFileSync('./plugins/'+b), b, { sourceType: 'module' })
        if (err) {
            process.stdout.write(chalk.bgRed.bold('\r [!] ERROR ')+` ${a} `+chalk.red.bold(`${b} `)+chalk.red(err)+' '.repeat(100)+'\n')
        } else {
            process.stdout.write(chalk.bgGreen.bold(`\r [!] INFO `)+` ${a} `+chalk.cyan(`${b} `)+' '.repeat(100)+'\n')
        }
    })
}