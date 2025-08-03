require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"kAB7o+Y3vycCb3rpNAhzA+KcPeJC8sd8intK4Ww2520="},"public":{"type":"Buffer","data":"+drxAJtg5aT8YOgMY8kZeQURcSz+VPWmiiwxFq2YmnM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6G7EMimo6tYT5j7zRRT9h3masx+exBhW3p95yfM1RGo="},"public":{"type":"Buffer","data":"yNx6R23NG2TFw4m4oDNlC7lVYVnJTy8UBIidzh5Yx3E="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wPLJEakpsvjirO5pwrawjHHOoVTT7yCxJGAobyXftmc="},"public":{"type":"Buffer","data":"6nKmgHUpw2KLmAZBmdYV95ebn8Dc4sIH6ZwVQW/0RjE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"eNcN7ggcvY6Bqbud2fpq1g/w6rvMfIfQp11KXd+7SmQ="},"public":{"type":"Buffer","data":"tlgwWrPj5TU4MSthXK+YOrF87tNj5/Fq6ykauIH6Ay8="}},"signature":{"type":"Buffer","data":"4nTDJj/lgiFLI7/HEZGM7yGQvpS7jgMBQCujUPjzjysF3OV7JQ4zCzApirgFNLS+4ceNDZc/7R5X4BZxFAZwBQ=="},"keyId":1},"registrationId":139,"advSecretKey":"Itn7hdbTmZ+/pPgOHxPi16dG+HmO3R5r38n0mgfdgzM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"AWGKAJSV","me":{"id":"254725939806:3@s.whatsapp.net","lid":"83249787367560:3@lid","name":"Alpha"},"account":{"details":"CInb2fkEEK6Gv8QGGAEgACgA","accountSignatureKey":"1mILa45nh1gC+lqmB6HQUSJ4q0x6AgqLR/q4hl/qTyU=","accountSignature":"sMgfObrl2lBtbxpA0Pz0zGyiEL97ChVhANVCFdR7FhrW3a83MwjffKU9Qi3DPB9NTXqW9nWR7yvBj3fOcREJBQ==","deviceSignature":"K3umUtBeIWv1cKVNXaJg+Tek763KloiXHVOx3Ke6M+b+e54R7AzsTl1NWWCpAF0pkU83aokuwUGJc3+1DHDPBg=="},"signalIdentities":[{"identifier":{"name":"254725939806:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZiC2uOZ4dYAvpapgeh0FEieKtMegIKi0f6uIZf6k8l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1754252083,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAANHG"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
