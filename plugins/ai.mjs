import { Configuration, OpenAIApi } from 'openai'

export default {
    cmd: ['ai'],
    tag: 'openai',
    info: 'ChatGPT',
    response: async (msg, client, xt) => {
        if (xt.is.noText) return msg.reply('*[ ! ] Masukkan teks*')
        try {
            const config = new Configuration({
                apiKey: db.data.apikey,
            })
            const openai = new OpenAIApi(config)
            const res = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: xt.text}],
            })
            await msg.reply(res.data.choices[0].message.content)
        }
        catch(err) {
            console.error(err)
            await msg.reply('*[ ! ] Too Many Requests*')
        }
    }
}