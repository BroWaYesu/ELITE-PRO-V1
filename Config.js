require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"WAA/ditRkyIpF0ylzSMM41CP+zuFnHl95FdpUWvX/XY="},"public":{"type":"Buffer","data":"xQDtnqiMgR3g2CQglJ3E0n2ym6AFi/5jgMphdVpoOSI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SKcuD1QlfNTYZ1FrTX2sIMcOxorTeE3Utuwk66rTCHc="},"public":{"type":"Buffer","data":"ADPMnKZhzaOgd3f6C98GvQDoT2Iy7ukYFAf9dJz/A0s="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"2K8G0Us2dZA9W0RKBX6lYjXDr/H7LFGRWZx1ApoVq1Q="},"public":{"type":"Buffer","data":"DtLOL17E7Ot0nC/lxfWdKgrRZhd5Iw92/LZSMk1duVM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"6PszlUwmYyWCnJJ/emNvWKhAksolYXQVK5lVednXW24="},"public":{"type":"Buffer","data":"XAwR0xlALRCy9SQBiNMdG3Kkkiqc+5HG8zjhnDONEDk="}},"signature":{"type":"Buffer","data":"xrswJg5jylTNxG373TsCwnqxoPSPG6vrUfbHs73hC7A7phr9Xu16tnA2cElrRlfgEabiMEXW6fNolSbax66gCQ=="},"keyId":1},"registrationId":69,"advSecretKey":"nqeHsWdybwm8zPdB7bNO8knYSB7gNosfOfozTwj0r+Y=","processedHistoryMessages":[{"key":{"remoteJid":"254746432359@s.whatsapp.net","fromMe":true,"id":"0D0CF4C86D853194C87E4F08E13E1DBB"},"messageTimestamp":1752926810}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"ZQ7VYAY8","me":{"id":"254746432359:48@s.whatsapp.net","name":"Bro Wa Yesu","lid":"11420636807389:48@lid"},"account":{"details":"CL7HzboFENGU7sMGGDYgACgA","accountSignatureKey":"AEulgFn9oBNRiP5RbBWWw8kuvDq+JeO+KP9bS9F1bX0=","accountSignature":"8+dFBGXZXd5s3eSMJFhcEPuT5/F/600hLkV01cVR6h5AoeubIVc9dfPRUPMMr3PrhS8sDEvVttITicN4SRRLDg==","deviceSignature":"TPy+uZCMO/n7TdTG8m1gmUYo3DmjbJC0v4wYSd0tbDiSh4xD7bbCFA/NPtTT9VtY6+QyiRQSMYA/L+aMhIQcCg=="},"signalIdentities":[{"identifier":{"name":"254746432359:48@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQBLpYBZ/aATUYj+UWwVlsPJLrw6viXjvij/W0vRdW19"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUICA=="},"lastAccountSyncTimestamp":1752926805,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAKK6"}';
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
