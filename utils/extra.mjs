import event from './event.mjs'
import moment from 'moment-timezone'
import chalk from 'chalk'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import PhoneNumber from'awesome-phonenumber'

let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let xt = {}

export default async (msg, client) => {

    await db.read()

	let info = client.info
	const chat = await msg.getChat()
    const contact = await msg.getContact()
    let prefixs = [ '.', '/', '#' ]

    xt.from = msg.from
    xt.number = contact.number
    xt.numberId = contact.id._serialized
    xt.phoneNumber = await PhoneNumber(`+${xt.number}`).getNumber('international')
    xt.name = contact.pushname
    xt.type = msg.type
    xt.body = msg.body.trim()
    xt.prefix = xt.body.split``[0]
    xt.cmd = prefixs.includes(xt.prefix) ? xt.body.substring(1).split` `[0].toLowerCase() : ''
    xt.args = xt.body.split` `.slice(1)
    xt.text = xt.args.join` `
    //xt.contact = await client.getContactById(xt.numberId)

    xt.is = {}
        xt.is.group = chat.isGroup
        xt.is.owner = db.data.owners.includes(xt.numberId)
        xt.is.premium = db.data.premiums.includes(xt.numberId)
        xt.is.business = contact.isBusiness
        xt.is.media = msg.hasMedia
        xt.is.quoted = msg.hasQuotedMsg
        xt.is.viewOnce = msg._data.isViewOnce || false
        xt.is.noBody = xt.body == ''
        xt.is.noText = xt.text == ''
        xt.is.fromMe = msg.fromMe
        xt.is.reg = xt.numberId in db.data.users
        xt.is.unreg = xt.is.reg == false
        xt.is.cmd = db.data.cmds.includes(xt.cmd)

    xt.group = {}
    if (chat.isGroup) {
        xt.group.name = chat.name
        xt.group.id = chat.id._serialized
        xt.group.owner = chat.groupMetadata.owner ? chat.groupMetadata.owner._serialized : chat.groupMetadata.descOwner._serialized
        xt.group.participants = chat.groupMetadata.participants
        let admin = []
        let superAdmin = []
        for ( let participant of xt.group.participants ) {
            if ( participant.isAdmin == true ) await admin.push(participant)
            if ( participant.isSuperAdmin == true ) await superAdmin.push(participant)
        }
        xt.group.admin = admin
        xt.group.superAdmin = superAdmin
    }

    xt.media = {}
    if (xt.is.media) {
        xt.media.msg = await msg.downloadMedia()
    }

    xt.quoted = {}
    if (xt.is.quoted) {
        xt.quoted.msg = await msg.getQuotedMessage()
        xt.quoted.media = await xt.quoted.msg.downloadMedia()
        xt.quoted.id = xt.quoted.msg.id._serialized
    }

	await event(msg, client, xt)
}

export { xt }