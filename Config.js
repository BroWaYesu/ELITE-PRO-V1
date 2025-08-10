require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"6GMhvcHwE0fImaIR0A3c2RqboUlRyICmb7ZJ5HtypX0="},"public":{"type":"Buffer","data":"D5KgLZW3o8kEezWtn9Ac0CNKkHPLT144PW/u1rFjwQU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0I94UTlRUIZOXJZlmSBWE/aISsECEMnw9MvPUkeu1W4="},"public":{"type":"Buffer","data":"98bfRbpNLynYe44j+7dE1t0jCagOIrh1QOX/uonUeAE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QGGzmF0YbIT3N93Hf4WSJHqRPYXnYMxSIBTXdGjqykw="},"public":{"type":"Buffer","data":"gyL3FgAlBWy3HXkFgIZ5A88iknCP6R21lAk89y/3whc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CJbCp4BZV0ZnmDDRIu1U9ERO3t0aki/rDLD4xlBsJ3g="},"public":{"type":"Buffer","data":"KRqeHThPph+v66KVPgBvpXnxmDgxYYKvRxFBnRjMxGE="}},"signature":{"type":"Buffer","data":"501/ens0z2iaj1ofyHeA/+7+/N/gBndnFTIpvIz5E6lJ5qWQt0LSZZMDZG4goZrPx1p8/u9ivx+M5m+KcbzCDQ=="},"keyId":1},"registrationId":22,"advSecretKey":"RM0FMdrh4qoAB80wAZ5YBtRHrnEgNvHDuN7SB+gZ9nU=","processedHistoryMessages":[{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"F196194D9AB6ED9C1682E0925F7EA0B7"},"messageTimestamp":1754828958},{"key":{"remoteJid":"254102112771@s.whatsapp.net","fromMe":true,"id":"3A63541B62DE6163D2B83878E8DCBC59"},"messageTimestamp":1754828958}],"nextPreKeyId":33,"firstUnuploadedPreKeyId":33,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"652QJDX8","me":{"id":"254102112771:41@s.whatsapp.net","lid":"69750906458192:41@lid","name":"Biden"},"account":{"details":"CILKiMwCEIyh4sQGGAUgACgA","accountSignatureKey":"/GhjCbIp3c3waD4LyTGtv1o4RW+2UKjyHX9exQ9gIVc=","accountSignature":"hTL8g6Eyw7FjKhTILKAA96QTR8svV1w0khNjfuFcr7MLBE1xAZyEKpuAsiiC6m2qmcvZB2BVnzE7VbduXlu+Ag==","deviceSignature":"04o1mvLsbs5E/scmERuc8+dnKtx3wfdatWoXG0VWAB/G9tDRIz7Q/HpKwAfWbsc+s8ECugcLXMjKBc3Bh3nRCA=="},"signalIdentities":[{"identifier":{"name":"254102112771:41@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfxoYwmyKd3N8Gg+C8kxrb9aOEVvtlCo8h1/XsUPYCFX"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IEg=="},"lastAccountSyncTimestamp":1754828954,"lastPropHash":"1K4hH4","myAppStateKeyId":"AAAAACOP"}';
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
