import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const adapter = new JSONFile('./databases.json')
const defaultData = {
    apikey: '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',
    owners: [owner.numberId, bot.numberId],
    premiums: [owner.numberId, bot.numberId],
    users: {},
    plugins: {},
    cmds: []
}
const db = new Low(adapter, defaultData)
global.db = db
await db.read()
await db.write()

export { db }