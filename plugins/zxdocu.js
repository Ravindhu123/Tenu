/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'feetggif ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/feetg?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Asena.addCommand({pattern: 'pussygif ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/pussy?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Asena.addCommand({pattern: 'kunigif ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/kuni?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Asena.addCommand({pattern: 'analgif ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/anal?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

Asena.addCommand({pattern: 'spankgif ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/spank?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));
