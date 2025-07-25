require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"MPtoOPAh3IgJgQA9VsrUVulQlvOyldprT8Ln3esI83g="},"public":{"type":"Buffer","data":"nxztADhdkTRNcTgx/qpoFr7cdVUv+UKmGlBBUaYESzA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qGGdHcMYagtYUYd8GVojKwaQuq6xnDVHfqib9piLCXw="},"public":{"type":"Buffer","data":"6vPlfL8IWi8PPK6GwFcICKsTLB8PHqlTN44H6yeApEU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+E5VnZIY16ABhfALcujANUlLwWLAl1cYNApLBgBk3Vc="},"public":{"type":"Buffer","data":"aMG27WxPCQ3dt9hJdytKt8KAT5ihh1/9IzgnoqNS2B8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WMo1pLG59G6eeNe2f7CGlhg2D7UIpM0YkcA0JTEYyHM="},"public":{"type":"Buffer","data":"snXtXWOruPYKLRdWaGvcN4UPvE2l4ATZ/UIsognt3F0="}},"signature":{"type":"Buffer","data":"NhXYLlfqcJwBKWA+5bNH9DE7uI9/XG3CJ+DxnTXnLMzVGpAsbRviSywDCanFZUr+mR65fDy1eccNnNMPlXudjw=="},"keyId":1},"registrationId":150,"advSecretKey":"ppildOp46BJdFKMEV90a4JKNJTHjA8R6vOqEkR0vH1w=","processedHistoryMessages":[],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"C47APTW8","me":{"id":"254115994134:20@s.whatsapp.net","name":"ceo MESHACK","lid":"235364610474091:20@lid"},"account":{"details":"CPythfQCEL/WjMQGGAogACgA","accountSignatureKey":"/fldO8f5OzwbBPij8u4F6GKImkfhx4WBBIvLT9uODl8=","accountSignature":"MfT2hUM3LaEq2HeskHHayxwsKJhWTxonkQAD0ag6tVN+ZrZP8WlxkbAgifZXMkLVuZ6ZgZABmQBPKR0M7u0qBg==","deviceSignature":"Th3Wrix1RWh7I37DI65Vd296xUzsZWfkKw4pCeNcEO1OBnHpTL1Z0o579ktRcP9ODd7KylRiW8WEfz1O6uaBiA=="},"signalIdentities":[{"identifier":{"name":"254115994134:20@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bf35XTvH+Ts8GwT4o/LuBehiiJpH4ceFgQSLy0/bjg5f"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CA0ICA=="},"lastAccountSyncTimestamp":1753426754,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAMQ8"}';
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
