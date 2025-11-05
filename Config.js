require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"gAIwrlMO90F/cOqfyA91I2OKtEvFYo6YdmLtFMYcZFk="},"public":{"type":"Buffer","data":"bkYLFwjNvDHooNxQ9FmYBwKvsvAjGhHDuY6cQ05EIjc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4M+Irr9w9ASXY7UIqSY+DKwa2LGZ3tEPhBrCnxpSYWY="},"public":{"type":"Buffer","data":"VXnjsLJoZrUBRYnGbYLfYTVVTfY1lON4+rYrhuzZ22Q="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eLmvv4u1bnhbX5wY+xbDhZYpgIiSZDGOWJAaP1NSYEU="},"public":{"type":"Buffer","data":"Zjp2/u9bHnN1EURSq8G+M2mEWwzlCPQUdYXenX8XpUY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uF3jMw/Zfq5Z77lBVqXj/Ff43hN7mz+bXd1UqrKw5kc="},"public":{"type":"Buffer","data":"ijqdxHOch6JBN3dZGYyVsm5wjegE/rsdW9v3AAHhhk4="}},"signature":{"type":"Buffer","data":"Nk29UkkfxBRJ9nMP22FlviWEV8BJodYz1aBd0ivMYiyrKmJBmtUFkjtDCDndQx2Ypkf3WAkAHd0RrGEBjE/DAA=="},"keyId":1},"registrationId":131,"advSecretKey":"j2fwIp73Dc49UGmOkAHMmf2I0pbpRcLXasDqzVDTKvM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"GZXE7ZFK","me":{"id":"254707094014:3@s.whatsapp.net","name":"Lucas","lid":"155280901947396:3@lid"},"account":{"details":"CJ/Rjr0FEOS0rsgGGAEgACgA","accountSignatureKey":"//bpZiBPdBybQKJz2eq0OVvOhQ1p3TMDDEgdIol6ZRE=","accountSignature":"zsgIVm9TiJp6CT9Pt1VyYv7CpDEdmmD8OPn2zNmUpO+/W0nPmc1nkU3QnS7dtWRpdimPY0zKYkVeXqydQ6w6Ag==","deviceSignature":"6VmNl0RdPDObiGI2vxwwLlCubLIdFLrPtpSn/I22apHq2spU9vICfubGmNdhvWQt/a4w6ETumy3AUAW3qiLtDw=="},"signalIdentities":[{"identifier":{"name":"254707094014:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bf/26WYgT3Qcm0Cic9nqtDlbzoUNad0zAwxIHSKJemUR"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1762368109,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAALS6"}';
global.ytname = process.env.YT_NAME || "YT: @Elite
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
