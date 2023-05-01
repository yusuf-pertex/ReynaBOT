export default {
    cmd: ['owner'],
    tag: 'info',
    info: '',
    response: async (msg, client, xt) => {
        let author = await client.getContactById(owner.numberId)
        client.sendMessage(xt.from, `*Owner*: @${owner.number}`, {
            quotedMessageId: msg.id._serialized,
            mentions: [author]
        })
    }
}