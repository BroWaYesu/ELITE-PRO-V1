require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"cEv88sGeTqyicw3Mrfj4jVLlVDnWniLe3Za4pIG+rVM="},"public":{"type":"Buffer","data":"f0S9w4Kh3z7NG06CBVn1iB5SwIrpDVa9e7lUyvk3GGI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uIakCKt/E0WLy12RWDWcXBruYeDSNy5Z7oDBnMYtiGE="},"public":{"type":"Buffer","data":"zlOt/LU2w9N1qwKq+SEJObaO4lHyGIPIOcPAh3L0d30="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iCXrAMs7irXO7GUhhdbRVN4ZA/ctBL8oRpy/mIW1Rn4="},"public":{"type":"Buffer","data":"z9g+iC+hPhs1iKwNww4tv05y3MExsv9UoCE9jAyINmg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yIY9hvk/Pyc9IiwI6WjvLQudUPY0DPbS7en/6M0XgFM="},"public":{"type":"Buffer","data":"7PQeTa1yQA0LTT8L63MZ1uWcS+CnKDqEW37fTUKJRVU="}},"signature":{"type":"Buffer","data":"ebDBGvm5gwJ07xeqy26m+CrePoX3TrIE/oMwjhTfSSr1Btmjbq4RXsYEB77fgxxBNCU+mnQn5lyZQRymFNfHDQ=="},"keyId":1},"registrationId":233,"advSecretKey":"+a3G7f3tBCoCZMZGePrtIC1poqOf7pewF/cDgyyvREs=","processedHistoryMessages":[{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"A0B768B713B2719F38CB671133F79A38"},"messageTimestamp":1754678613},{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"45751DF0D9BE85728248292D2E27DD87"},"messageTimestamp":1754678613}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"TJ8X9S94","me":{"id":"254102112771:37@s.whatsapp.net","lid":"69750906458192:37@lid","name":"Biden"},"account":{"details":"CILKiMwCEM+K2cQGGAEgACgA","accountSignatureKey":"/GhjCbIp3c3waD4LyTGtv1o4RW+2UKjyHX9exQ9gIVc=","accountSignature":"jlMXN6+A0oVQa2sMTCYFYXDZvA4neoKrk5v3lgIe04meAh8N6Ph4FUoixoOvvVxMKYpxNO6jOIc1ghhzlvxCAw==","deviceSignature":"LR8AYp9zri2bC8yxkCe8466sAcc09JDQ400gUbQhG4dJ46lDLSe82CRqIO/BsfxoFqii1a7nOsAWXqjJXKH4Aw=="},"signalIdentities":[{"identifier":{"name":"254102112771:37@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfxoYwmyKd3N8Gg+C8kxrb9aOEVvtlCo8h1/XsUPYCFX"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IEg=="},"lastAccountSyncTimestamp":1754678609,"lastPropHash":"1K4hH4","myAppStateKeyId":"AAAAACOO"}';
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
