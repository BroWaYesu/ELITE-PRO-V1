require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"mPgLCNbTLCeXsQrnByfSXBFTUmxvfxFSCJYjrlficU8="},"public":{"type":"Buffer","data":"n0KjDvPHt//DqZFabIN+GxM3X5qtmXrxkqc8e1uaWiw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0FZcCvy8R/5z7HwNAiScNp01hSVtWCkmYd0TRIMytFQ="},"public":{"type":"Buffer","data":"knfkkUL7Sk7DtQ8kCUwCwq8d/o04usZf8JbqxVJ40QU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"SEqQRPOYrFMSM4ebAvMkD/eBnAudfJqFMzGzwxa4D2M="},"public":{"type":"Buffer","data":"PShLgM6CVxSg11+h3swqZwPIqmye5Gay5hyIRR64qgU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"ANHKoKaj6Tr5dIyjQS5O3uVlx0HaI4TBvY4Urk96LVA="},"public":{"type":"Buffer","data":"+2QAm+vAqvfK8EdClYQMPlKZWlmPKxc5ssA1NYw0LXU="}},"signature":{"type":"Buffer","data":"GLmStPxp8GgKzmQK2GQrZdE2vGE11p8xzg7D22R1Npg/uQkn1sE56Fu82Y0mcNkRP6rWzS4NVpLkiNEBo53jDA=="},"keyId":1},"registrationId":230,"advSecretKey":"qBfwonK1keiamHi+FQ9xka87g23W9fwGQBq8g1QdKOs=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"35W8LTAN","me":{"id":"254746432359:54@s.whatsapp.net","name":"Bro Wa Yesu†","lid":"11420636807389:54@lid"},"account":{"details":"CL7HzboFEO781cQGGDwgACgA","accountSignatureKey":"AEulgFn9oBNRiP5RbBWWw8kuvDq+JeO+KP9bS9F1bX0=","accountSignature":"/hTpRexoCD3yNywoiDjaWY8t2S8s843ioeo1d6k/kC1wiEwgUOensQ58HvYbAiNBiWmoJP59WF/OzEMAXMrCCg==","deviceSignature":"Amfg7QN5ZWv98N6yHhaOdPR84AzOrlwdZmsYQOUIXadZD5jbCZONSTjzOvPTV9SFwrBFb9fC8hTaecQ/bvliDA=="},"signalIdentities":[{"identifier":{"name":"254746432359:54@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQBLpYBZ/aATUYj+UWwVlsPJLrw6viXjvij/W0vRdW19"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUICA=="},"lastAccountSyncTimestamp":1754627697,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAKK6"}';
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
