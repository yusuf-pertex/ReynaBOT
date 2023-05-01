export default {
    cmd: ['daftar'],
    tag: 'lainnya',
    response: async (msg, client, xt) => {
        if (xt.is.reg) {
            await msg.reply('*[ ! ] Anda sudah terdaftar*')
        } else {
            await msg.reply('*[ ! ] Berhasil daftar*')
            db.data.users[xt.numberId] = {
                name: xt.name,
                number: xt.number,
                numberId: xt.numberId,
                level: 0
            }
            await db.write()
        }
    }
}