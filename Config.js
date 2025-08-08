require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"kDrCFV6+mLnzTVhCkm5qAkItWFlgzJ6qV8CY9CZD9Gs="},"public":{"type":"Buffer","data":"ZAOcraVDqBjxPUCzv6FP1h1k9dcwelFQUTCYiDQUqBA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kK+MNDY4YRsD1kWXyuHNRqTp+Kn3GK3YyQYE2vQVC00="},"public":{"type":"Buffer","data":"JpAZQL8qspc12ttTxrCfzJYiOczIS8836SatVjb/G3Q="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4Jb0Yj+PJwRlCyDnjLcVX2uQqp6mRqX5B8XqIA3q2Vg="},"public":{"type":"Buffer","data":"MDBZWBqlrV1D43YgC11xIoq71Fyp+7DEERkhTN8hx2Y="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kFxoE/H06DmsIOlBcxfg6vFRPBJutVbcO+ZNPtSslk8="},"public":{"type":"Buffer","data":"MS1KmLi/RaanclWyTgGqKn6jIcdp9nF/2c+e6yV9DBA="}},"signature":{"type":"Buffer","data":"QtDkD6DvEObeqilBfA0L2GmWODedLPpyoQcs51wtYJeofaAVkRp8OjgkKndt0bgh5USaqXik6dpiy+ljLriHDg=="},"keyId":1},"registrationId":67,"advSecretKey":"jh6rC5ue23JCR5O3DfK5QV72lFduJR/8CSXnfflLClY=","processedHistoryMessages":[{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"E846E9D74C7B2A9D04A4DFCF071E0DAE"},"messageTimestamp":1754636138},{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"B88B509A3336793ADEB245C0616B7672"},"messageTimestamp":1754636138}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"EX5H7F7E","me":{"id":"254102112771:36@s.whatsapp.net","lid":"69750906458192:36@lid","name":"Biden"},"account":{"details":"CIHKiMwCEOG+1sQGGAEgACgA","accountSignatureKey":"/GhjCbIp3c3waD4LyTGtv1o4RW+2UKjyHX9exQ9gIVc=","accountSignature":"NHfWKD+n5vyqA60C7RxXw9TZBa2ZDEKVRNlSy5mmS2U1cDfVjeRI+gGsrtALt14/HVsvaCuMjex2vflcUxuCBA==","deviceSignature":"6QjJFHci6x4S7CckQhN8KOu67U7fNSq+i9Tius6UF6Gk4pWflQ0ESl90b4ZKIS6SDaYE1g+4iZ23GPW3CqBJBQ=="},"signalIdentities":[{"identifier":{"name":"254102112771:36@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfxoYwmyKd3N8Gg+C8kxrb9aOEVvtlCo8h1/XsUPYCFX"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IEg=="},"lastAccountSyncTimestamp":1754636133,"lastPropHash":"1K4hH4","myAppStateKeyId":"AAAAAPMy"}';
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
