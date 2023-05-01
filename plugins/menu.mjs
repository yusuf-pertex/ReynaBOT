export default {
    cmd: ['menu'],
    tag: 'info',
    info: '',
    response: async (msg, client, xt) => {
        let cmd = Object.values(db.data.plugins),
        tags = cmd.map(({ tag }) => tag).reduce((v, i) => (v.includes(i) ? v : [...v, i]), [])
        let send = '‣ *MENU FITUR*\n\n' +
        tags.map((c) =>`» *Menu ${c.charAt(0).toUpperCase()+c.slice(1)}*\n${cmd
              .filter(({ tag }) => tag == c)
              .map(({ cmd, info }) => `› .${cmd[0]} ${info=='' ? '' : `(${info})`}`)
              .join('\n')}`
        ).join('\n\n')

        msg.reply(send)
        console.log(cmd)
    }
}