import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import { notif } from './functions.mjs'

export default async (msg, client, xt) => {

    notif()

    let files = fs.readdirSync('./plugins')
    for (let file of files) {
        let module = await import('../plugins/'+file+'?update='+Date.now())
        if (!module.default||typeof module.default !== 'object'||!module.default.cmd) continue
        let plugin = module.default
        if (plugin.cmd.includes(xt.cmd)) {
            if (!(xt.is.fromMe)&&xt.is.unreg) {
                let module = await import('../plugins/daftar.mjs?update='+Date.now()),
                plugin = module.default
                if(plugin.cmd.includes(xt.cmd)) return plugin.response(msg, client, xt)
                else return msg.reply('*[ ! ] Anda belum daftar*\nKetik .daftar untuk daftar')
            }
            await msg.react('⏱')
            await plugin.response(msg, client, xt)
            await msg.react('✅')
        }
    }
}