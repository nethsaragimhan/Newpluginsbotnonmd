/* # Exclusively from DATA THIEVES 
# script original owner gos to @lasiya99X 
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command එකට පස්සේ වචනයක් ලියන්න ඕන"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'tff ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=5OL4ma89DDedVKW59XEXIKivsII&text=${encodeURIComponent(match[1])}&text2=RAVANA`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by DATA THIEVES🇱🇰' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'tff ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=5OL4ma89DDedVKW59XEXIKivsII&text=${encodeURIComponent(match[1])}&text2=RAVANA`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by DATA THIEVES🇱🇰' })

    }));
    
}
