require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"KNtPNEUdhelHLO18VJUAWMOveuoermkhkFZ2ep4HEmY="},"public":{"type":"Buffer","data":"Ewc58HMQ0U/0EmkknkgcFvbiFWQaZHqsC1Ub7oU/QTY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6AhcqEU8pJTP5ebDjHbk+S/wQCI7ficBotegQtLzbVs="},"public":{"type":"Buffer","data":"cDAmXzRftOnUczKTC0oofKXHFXutPG4/QKH3sJsPzAs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GKZzmdLJehk8ys6NsG34Gkgcu7Pp3xA+70vSK70shnc="},"public":{"type":"Buffer","data":"lk5Ron8+VDSjEGTY40jI6E3qUbWLV7FYT/dwcVjShDc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qHDQ0DT9UvptEF8BpCgcZ7bERPLAfdDR1iiOUqZF+Xg="},"public":{"type":"Buffer","data":"mR4ZyPnnk50erLqRyj9dK06OKgHB7lBGY68bF0Ee/iU="}},"signature":{"type":"Buffer","data":"6GxsPHxgACZ6Pz1d1iQJ8BFfsz/EMXuNsqN4w/25IRS1qnBeOAF2uFn2eL7u9TSUG/tELPxmxYmRj1oSi5LYBA=="},"keyId":1},"registrationId":179,"advSecretKey":"qIJfxQCg+xekoCzGiaW9XfsmzpDqxP0nlG5ZqjHDgnQ=","processedHistoryMessages":[{"key":{"remoteJid":"254797438698@s.whatsapp.net","fromMe":true,"id":"41D5D4FFB2EE7A61FA1710ECB4A7887D"},"messageTimestamp":1754034864}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"ZKBE5RLZ","me":{"id":"254797438698:15@s.whatsapp.net","name":"kennympole39","lid":"66422273261744:15@lid"},"account":{"details":"CPuMjw8Qp+WxxAYYASAAKAA=","accountSignatureKey":"HGODjbNvIu/2VgDw7i5BF5sUt0MyKeD7fDSlzJ+8M1w=","accountSignature":"CwEX4WK0880D0UMkDexL01PFB5UUIt40gFb8t6FeYbCE0GamZtqP2dhA0WO3EO1mKwb6G9zLssXRz/BEeiWmDA==","deviceSignature":"Ka/3wT3bhNcgcG8plwLqV9twxI7tM+TWNtUfCj2RkzGt2b8wkMP+XqNjmMjtm8WPrTuWfKL8wadM6k8SeFy4Dw=="},"signalIdentities":[{"identifier":{"name":"254797438698:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRxjg42zbyLv9lYA8O4uQRebFLdDMing+3w0pcyfvDNc"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIEg=="},"lastAccountSyncTimestamp":1754034859,"lastPropHash":"2V77qU","myAppStateKeyId":"AAAAACRP"}';
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
