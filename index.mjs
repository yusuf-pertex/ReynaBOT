//process.on('uncaughtException', console.error)

import pkg from 'whatsapp-web.js'
const { Client, LocalAuth, MessageMedia } = pkg
import puppeteer from 'puppeteer'
import qrcode from 'qrcode-terminal'
import extra from './utils/extra.mjs'
import { intro, loading, online, log, delay, cekPlugins, watchPlugins } from './utils/functions.mjs'
import chalk from 'chalk'
import syntaxerror from 'syntax-error'
import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

await intro()
await cekPlugins()
await watchPlugins()
await start()

async function start(){
    const client = new Client({
        authStrategy: new LocalAuth({
            dataPath: './auth',
            userDataDir: './auth/session'
        }),
        puppeteer: {
            headless: true
        }
    })

    client.initialize()

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true})
        log('[!] Pindai kode QR', 'bgGreen')
    })

    client.on('loading_screen', (percent, message) => {
        loading(percent, message)
    })

    client.on('authenticated', () => {
        log('[!] Authenticated', 'bgGreen')
    })

    client.on('auth_failure', m => {
        log(`[!] Authenticated Failure ${m}`,'bgRed')
    })

    client.on('disconnected', (reason) => {
        log('Client was logged out '+reason, 'bgRed')
        start()
    })

    client.on('ready', () => {
        log('[!] BOT Aktif','bgGreen')
        //online(owner.ig)
        client.sendMessage(owner.numberId, '*[ ! ] BOT Aktif*')
    })

    await client.on('message_create', async (msg) => extra( msg, client ))

    /*client.on('message_revoke_everyone', async (af, be) => {
        //console.log(af)
        if (be) {
            //const contact = await be.getContact()
            const chat = await client.getChatById(be.from)

            const inCache = (await chat.fetchMessages({})).find(
            (m) => m.id._serialized === be.id._serialized
            )
            console.log(inCache)
            await client.sendMessage(be.from, 'Hello world!', { quotedMessageId: inCache._data.id._serialized })
            //client.sendMessage(msg.from, `*[ ! ] Anti hapus*\nText: ${msg.body}`, { quotedMessageId: msg.id._serialized })
        }
    })*/
}
/*
    const chat = await msg.getChat();
    const contact = await msg.getContact();
    const { _serialized } = contact.id

    let user = db.data.users[_serialized]
    if(typeof user!=='object')
        db.data.users[_serialized]={}
    if (user){
        if(!('level'in user))
        user.level=0
    }
    await db.write()

    let cmd = msg.body
    let cmd1 = cmd.trim()
    let cmd2 = ''
    if(cmd.includes(' ')){
        cmd1 = cmd.split(' ')[0].trim()
        cmd2 = cmd.split(cmd1)[1].trim()
    }
    const isowner = db.data.owner.includes(msg.from)
    const ispremium = db.data.premium.includes(msg.from)
    const isgrup = msg.from.includes('@g.us')
    //console.log(msg)

    switch (cmd1) {
    case '.cek':
        if(isgrup){
            msg.reply(`*[ ! ] Khusus Chat Pribadi*`)
        } else if (isowner) {
            msg.reply(`*[ ! ] API key saat ini*:\n${db.data.apikey}`)
        } else {
            msg.reply('*[ ! ] Anda Bukan Owner*')
        }
        break
    case '.new':
        if (isgrup){
            msg.reply(`*[ ! ] Khusus Chat Pribadi*`)
        } else if (cmd2===''){
            msg.reply(`*[ ! ] Masukkan API key*\nhttps://platform.openai.com/account/api-keys`)
        } else if (isowner){
            db.data.apikey = cmd2
            await db.write()
            msg.reply(`*[ ! ] API key berhasil diperbarui*:\n${db.data.apikey}`)
        } else {
            msg.reply(`*[ ! ] Anda bukan owner*`)
        }
        break
    case '.ai':
        if (cmd2==='') return msg.reply('*[ ! ] Masukkan teks*')
        try {
            msg.react('⏱️')

            const configuration = new Configuration({
                apiKey: db.data.apikey,
            })
            const openai = new OpenAIApi(configuration)
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: cmd2}],
            })
            msg.reply(completion.data.choices[0].message.content)
            msg.react('')
        }
        catch(err) {
            console.error('Error')
            msg.react('🚫')
            msg.reply('*[ ! ] Too Many Requests*')
        }
        break
    case '.img':
        if (cmd2==='') return msg.reply('*[ ! ] Masukkan teks*')
        try {
            msg.react('⏱️')

            const configuration = new Configuration({
                apiKey: db.data.apikey,
            })
            const openai = new OpenAIApi(configuration)
            const completion = await openai.createImage({
                prompt: cmd2,
                n: 1,
                size: "256x256"
            })
            const img = completion.data.data[0].url
            const media = await MessageMedia.fromUrl(img)
            msg.reply(media, msg.from, {caption: cmd2})
            msg.react('')
        }
        catch(err) {
            process.stdout.write('\r Error'+' '.repeat(100)+'\n\n')
            msg.react('🚫')
            msg.reply('*[ ! ] Gunakan bahasa indonesia untuk fitur .img*')
        }
        break
    case '.listpremium':
        let lp = db.data.premium.map((v, i) => `${i + 1}. @${v}`).join('\n')
        await chat.sendMessage(`${lp}`, {
            mentions: [db.data.premium[0]]
        })
        break
    case '.owner':
        await chat.sendMessage(`*Owner*: @${owner.nomor}`, {
            mentions: [contact]
        },{quoted:msg})
        break
    case '.sc':
        msg.reply('*[ ! ] Belum dirilis*')
        break
    case '.tanggal':
        const tanggal = new Date();
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        msg.reply(`*Tanggal*:\n${days[tanggal.getDay()]}, ${tanggal.getDate()} ${months[tanggal.getMonth()]} ${tanggal.getFullYear()}`)
        break
    case '.jam':
        let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        msg.reply(`*Jam*:\n${wib}`)
        break
    case '.hidetag': case 'tagall':
        if(isgrup) {
            let mentions = []
            for(let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized)
                mentions.push(contact);
            }
            await chat.sendMessage(cmd2, { mentions })
        } else {
            msg.reply('*[ ! ] Khusus Grup*')
        }
        break
    case '.report':
        client.sendMessage(owner.nomor+'@c.us', `*Report from @${contact.id.user}*:\n${cmd2}`,{mentions: [contact]})
        msg.reply('*[ ! ] Laporan berhasil terkirim✅*')
        break
    case '.s':
        const quotedMsg = await msg.getQuotedMessage()
        if (msg.type == 'image' || msg.type == 'video'){
            let media = await msg.downloadMedia()
            return msg.reply(media, msg.from, { sendMediaAsSticker: true, stickerName: bot.nama3, stickerAuthor: '@'+owner.ig })
        } else if (quotedMsg && (quotedMsg.type == 'image' || quotedMsg.type == 'video')) {
            let media = await (await msg.getQuotedMessage()).downloadMedia()
            return msg.reply(media, msg.from, { sendMediaAsSticker: true, stickerName: bot.nama3, stickerAuthor: '@'+owner.ig })
        } else {
            return msg.reply(`*[ ! ] Reply/kirim pesan media dengan caption '.s'*`)
        }
        break
    default:
        if(isgrup&&!(cmd1==='.menu'))return
        msg.reply(`*Menu Fitur*:

• *OpenAI*
  > *.ai* (ChatGPT)
  > *.img* (ImageGPT) [Beta]

• *APIkey*
  > *.cek* (Cek APIkey)
  > *.new* (Set new APIkey)

• *Lainnya*
  > *.jam*
  > *.tanggal*
  > *.hidetag*

• *Ingfo*
  > *.menu*
  > *.owner*
  > *.sc*

© ReynaBOT`)
    }
    function nm(a,b,c,d,e){
        let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(chalk.bold(
        chalk.bgGreen(`\r [${wib}] ${a} `)+chalk.bgYellow(` ${d} `)+' '.repeat(100)
        +chalk.bgCyan('\n '+b+' ')+chalk.blue(' ('+c+'): ')+chalk.green.underline('"'+e+'"\n\n')
        ))
    }
    nm(msg.from, _serialized, msg._data.notifyName, msg.type, msg.body)
})*/