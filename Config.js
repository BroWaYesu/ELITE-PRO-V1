require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"WMgCi+Ag7apGVX+GgLS6wCVVNUnWGMDUVRX59WbKnUQ="},"public":{"type":"Buffer","data":"FRX+84kq+nzppjkzteetkECOnV9wANsGa16vyYMmTyw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MGDLXiwJWsC0QvaO9kwUCShJfhd2Wmt1eYeRmNTS+2Q="},"public":{"type":"Buffer","data":"Z5/2vQKPbhkhAUJB4Osvr8qI3lYMyisxhZcb93tZjEw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YEN3la500mLXNAJBx5ut5XtvBvAEDF3mvJxN5iv9HHk="},"public":{"type":"Buffer","data":"uzned8E4x9WzMPxQ0824qPFqoTpA/CsQmKK/Yg4zEjM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2CbMak2Njrq9GLn9PO3p4urQmYbq6TgbvA+IRysJsFk="},"public":{"type":"Buffer","data":"BbOe30otBav64LwsK/RdajljqI+zQ4lXoQX96Y+hTUs="}},"signature":{"type":"Buffer","data":"DqRyicvNGtSwTj5YVgyZ5BGwe+SNk7ApxdaoWfWYSUYzW4DU83Y+akUoa4atCTM+iklGz2Vo3z2bfblo2qqoDQ=="},"keyId":1},"registrationId":169,"advSecretKey":"EsXoiuPhes00Je8XJvwUfLh78W/xgUzhJA1G2FVUv8Y=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"XR7EHPSR","me":{"id":"254707094014:2@s.whatsapp.net","name":"Lucas","lid":"155280901947396:2@lid"},"account":{"details":"CJ7Rjr0FEK7vqMgGGAEgACgA","accountSignatureKey":"//bpZiBPdBybQKJz2eq0OVvOhQ1p3TMDDEgdIol6ZRE=","accountSignature":"DANEwFhLCSDqb3FKXrQmtJcMwB8VuLpzyT0ntaMXXcCpHARvqazlqA54dY6jj6nmLEnA3ayPVM2DsKDbZHGbDg==","deviceSignature":"ekVlgAPz6dzp6npBQMqFCDHVmBbJC/QaqilvDfIgCFvE0ov3oinnj6KtwYb7JsICl5rd5GL6ObekFsSWpnxgAw=="},"signalIdentities":[{"identifier":{"name":"254707094014:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bf/26WYgT3Qcm0Cic9nqtDlbzoUNad0zAwxIHSKJemUR"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1762277303,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAKTb"}';
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
