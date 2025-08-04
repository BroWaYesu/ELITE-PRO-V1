require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"+KPRS/1Uyh9SlkXxX9GSDuxgzj5O5KSRfIQ6Iyt/f3E="},"public":{"type":"Buffer","data":"UzkXxFHgosR/hPnSzZEWSzFxgy/j2t4iRcAD16m141w="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aKnzJaPNWnKXExe3ao9BtJ4LZSu5gQfDLB03JK6MRUs="},"public":{"type":"Buffer","data":"jZqC2LgLP+1KshPNKMMS6JIh7OLbpqJ7ALxE2aGupEg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0PR0xake2SCeGkoeAnp4ck6XVJlgW8evd45cKEDQCmQ="},"public":{"type":"Buffer","data":"wFrpyxijcv4HWu5YBJ2ocw0OJ2DzS7vV/9wl1i/oAn8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gO0V/Imco98YwGi0ZI9NtZEzd287ibaRQVe0quF6iV4="},"public":{"type":"Buffer","data":"sXcIxaiY0IP9b/lcjtv5WdOsg41oLm8LNOUsYEnwqGc="}},"signature":{"type":"Buffer","data":"V3um76jhl/pJ8nmRl4xhKNEOnfQ6xOyurHmx9WAc4bgnEBmz+iySkb4Hn5nWhGu1glAVtxG53k2J9IUr0mLYjQ=="},"keyId":1},"registrationId":236,"advSecretKey":"ZtasIGRVIzdSdIvp/lN3a5cJ7g6uG9NK8huXG37d7DU=","processedHistoryMessages":[{"key":{"remoteJid":"254102425356@s.whatsapp.net","fromMe":true,"id":"F156FD5775A595FED516423FC9D9EF3C"},"messageTimestamp":1754288686},{"key":{"remoteJid":"254102425356@s.whatsapp.net","fromMe":true,"id":"6E6D881EF8CD1830A49D9D1F9165531C"},"messageTimestamp":1754288686},{"key":{"remoteJid":"254102425356@s.whatsapp.net","fromMe":true,"id":"B37C320A84E619D23B756843375E2E4A"},"messageTimestamp":1754288688}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"T81GW76C","me":{"id":"254102425356:4@s.whatsapp.net","lid":"253012899569799:4@lid","name":"😂😂😂😂"},"account":{"details":"CIPt0c8CEKmkwcQGGAQgACgA","accountSignatureKey":"vc3KjVlF55BjAV96TPNrPb7hWfJUd1tw0zCaAlVdX0M=","accountSignature":"wIRR+L7/4hJIaDcMhBTO+CiEuoJPUOKC0lPiQL9loyQKHyshC72Q/Fy+WWBIm2K+2P+/XgfgnJew87GTD3x3CA==","deviceSignature":"ginQBndji/seF4cnmzw/afZGp2j5fqppdOmrRGEI5HWoiV5XaqgatG1skbKuk2buEeSpY0vdSyrOh7YgP6N1jg=="},"signalIdentities":[{"identifier":{"name":"254102425356:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb3Nyo1ZReeQYwFfekzzaz2+4VnyVHdbcNMwmgJVXV9D"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAgIDQ=="},"lastAccountSyncTimestamp":1754288684,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAPR9"}';
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
