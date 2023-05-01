import { Configuration, OpenAIApi } from 'openai'
import pkg from 'whatsapp-web.js'
const { MessageMedia } = pkg

export default {
    cmd: ['img'],
    tag: 'openai',
    info: 'ImageGPT',
    response: async (msg, client, xt) => {
        if (xt.is.noText) return msg.reply('*[ ! ] Masukkan teks*')
        try {
            const config = new Configuration({
                apiKey: db.data.apikey,
            })
            const openai = new OpenAIApi(config)
            const res = await openai.createImage({
                prompt: xt.text,
                n: 1,
                size: "256x256"
            })
            const media = await MessageMedia.fromUrl(res.data.data[0].url)
            await msg.reply(media, msg.from, {caption: xt.text})
        }
        catch(err) {
            console.error(err)
            await msg.reply('*[ ! ] Too Many Requests*')
        }
    }
}