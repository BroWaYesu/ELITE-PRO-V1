require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"6PaKRGj7scs/NOdceF4TIGCeUm4Dt7cVTu7Kdm0v0XY="},"public":{"type":"Buffer","data":"BfjLej3vQdm65JaM6rjDA02zT5xXFeMCyjWGrz79QQo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EFvvmqQ+vZ140KdcqIz8HrL1Iu5ar9EiYQParMUAtWc="},"public":{"type":"Buffer","data":"3zWK+ekKF68si0cl38dlgA1ev9lNu4WTM6WYLrH/YDQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MDf7m8dPpzC2TJ94zPQYpRIyhlfojCARKBwY83+H3m8="},"public":{"type":"Buffer","data":"qHwXKZKSUCvt3OmTSDx2yxfD4Egprn7BYYf+kjZ/9kk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4I/j0He+iQflEqA68rtTCZnfyN7l9nSPC8gzgYCLzm8="},"public":{"type":"Buffer","data":"9dnZhur+hvM8UOPrdtGLt2LEB1Q/Ky7NVDIvEPJgh10="}},"signature":{"type":"Buffer","data":"XNWYbN5xFwmSvcPhyXQ/0rEWIqbandCxKnEQsecXGMi1U5XgMnh3vjgWtUqcaBDCRoiKK7dME65rIZGdKhMyDw=="},"keyId":1},"registrationId":25,"advSecretKey":"2s1P2A6GOqhn32EpzbqHeF8+nBN2pYObjUqesrRTVGU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"DAPG9RKP","me":{"id":"254725939806:6@s.whatsapp.net","lid":"83249787367560:6@lid"},"account":{"details":"CIvb2fkEELSBzcQGGAEgACgA","accountSignatureKey":"1mILa45nh1gC+lqmB6HQUSJ4q0x6AgqLR/q4hl/qTyU=","accountSignature":"BqI1nrEg9EEB1BCqJ8as9f8J53CcHcOi5PXP7BWeZCIdvFemY9UJlhRhewsmqfbtT7ysPUjmYeP9gLOMWPdpBA==","deviceSignature":"+kjYn+BZwUCxoueFQukh/+PHYi4atv3savNYWz7XtOb80gf7M8t1akxnGaIF6xXpDNtLeU3ZlnPKFlo5y2I9Cg=="},"signalIdentities":[{"identifier":{"name":"254725939806:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZiC2uOZ4dYAvpapgeh0FEieKtMegIKi0f6uIZf6k8l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1754480824,"lastPropHash":"PWk5B"}';
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
