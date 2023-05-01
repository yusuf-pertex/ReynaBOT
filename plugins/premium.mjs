export default {
    cmd: ['listpremium'],
    tag: 'info',
    info: '',
    response: async (msg, client, xt) => {
    	let text = '*Premium Users*:'
        let mentions = []
        for(let i of db.data.premiums) {
            const contact = await client.getContactById(i)
            await mentions.push(contact);
            text += `\n‣ @${i.split('@')[0]}`
        }
        await client.sendMessage(xt.from, text, {
            quotedMessageId: msg.id._serialized,
            mentions
        })
    }
}