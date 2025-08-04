require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"AETHnFJNnbbrFc3MbcI0M3HFzda8UtV9MycvW7iFCE8="},"public":{"type":"Buffer","data":"HOPr0Q2SKq7o0Revd1IzY7x4/ateDj+j9bysXnWL/RA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ALg3m+/qKwa+Wk0z9SsP6hDwCU5J2kUmlf13qWfKpHU="},"public":{"type":"Buffer","data":"7on5AcFRwNQGJuxa62FlXYFySDg3urTI5PoECGHlMXw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QNqxTJxSaGMjmhoIdiu6IfzSaqvf3LFLXEs836Q0B28="},"public":{"type":"Buffer","data":"UnNLStUC0BwPXpf9v6L3HNpyUJDakG27plgxneIzS0U="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8BqgI/JMuoz3iXYF3o+S9+PNgS18hzaVqO2LKUWUY38="},"public":{"type":"Buffer","data":"EEaHUfXjsj/BEKxyYSGTtnpXEU/kD2vABEK8PHMXrg0="}},"signature":{"type":"Buffer","data":"M8CFAXNTBVzAFGsYKkrtEAe4oWV3NZxBiYDlFaNgHXuTq+rwI9zv+3oU6lo+p5SzZGkaqpRzwEbYAjTo8Km3Cw=="},"keyId":1},"registrationId":252,"advSecretKey":"EKUVnIDY6nK4U/8TPG5Qt8yWus1FsENcfC3iomFWsTM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"G3RCFTBD","me":{"id":"254751264164:13@s.whatsapp.net","lid":"31753330753654:13@lid"},"account":{"details":"COOq7OwCEP33wMQGGAEgACgA","accountSignatureKey":"HYZLyc2Y3lalHh1IJeJ86YP3wr7e+vNQBTk3/5itjSc=","accountSignature":"BL//6cwCjeu0nwWBa/R1W0v2BRpUo4r21rCqSlIGELFJ9mvRLyzdb+n83ZS+kPDYzLFp5GPkExJtgZ5L2wb7Dw==","deviceSignature":"Myb3dVKPR1hVzLswsdqoz0ggyZuuvG4dVl5SUkT7DnEJs4tMo2xUw9pNC+OtsD18XdLUT7ugFd/ByGStSsj5Aw=="},"signalIdentities":[{"identifier":{"name":"254751264164:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BR2GS8nNmN5WpR4dSCXifOmD98K+3vrzUAU5N/+YrY0n"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAgIEg=="},"lastAccountSyncTimestamp":1754283009,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAALAo"}';
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
