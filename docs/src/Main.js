import { player } from './class/player.js'
import { monster } from './class/monster.js'
import { Battle } from './class/Actor.js'
import { Firebase } from './../../src/firebaseConfig'

async function addUserBilly() {
  let db = new Firebase()
  const user = new player('billy', '', 200, 100)
  const newUser = await db.addUser(user)
  return newUser
}
