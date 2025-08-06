require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"oFmWp44I9f5+jz7G47enRXfV/4bU91CQYDxbpyl+VHU="},"public":{"type":"Buffer","data":"8UksCwo0ORhsngOcf3DwRJdN0qpNzMqlhQY/vM38IVg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ODR55f+wIA7qR99C+qbwTL13/VbPvrh7izd2/6gW/Fs="},"public":{"type":"Buffer","data":"7Xfc0C1FAW0kioUEgAMPk+EZZuIWEOxRYf1aMW9crTo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MNsBZK7fMkToje0yO7l5xJmulvlYLDinKxtEREl7olE="},"public":{"type":"Buffer","data":"swXDad/6gKrJQg88a+3I6dXDr+ZCPaAhjPEbHHq4wCI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WEWJ0qBsKpr59QsabxGURAeRdfvWRLQ97a5+KFIHl1Y="},"public":{"type":"Buffer","data":"+ygpt4EBm3adEZPDBn2ajsGHl0L5sveiGtxfoZURlh4="}},"signature":{"type":"Buffer","data":"yRV21rA68qlfX5zWuhRY88OoyjEyyH5iMygVRU7BqMnOIqdnVu7J6OJojgsvRNfjvI6p0k+qnXeV4f3u2g11Aw=="},"keyId":1},"registrationId":245,"advSecretKey":"4QKFMIoXkHnfYyzo77oEQaM1FTudBmGhyw2I0Pdc7vw=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"T66SGGVY","me":{"id":"254725939806:4@s.whatsapp.net","lid":"83249787367560:4@lid","name":"Alpha"},"account":{"details":"CIrb2fkEELaHzMQGGAEgACgA","accountSignatureKey":"1mILa45nh1gC+lqmB6HQUSJ4q0x6AgqLR/q4hl/qTyU=","accountSignature":"yAtk18htKC8S8I52I3SVN/S2bD2dTZ/ZEHEzQrcy/AgFBvnoMrpeIJ/L3YED+sF8A99i4XeR84OZMiU2Yg0CCg==","deviceSignature":"Q8YXzNg6OD3F9RfLJ/CIWgeiE/RY5hfOfZ3ug2GxuJwk0ZqcT5+pHLzfGIM1w7OpxKwecer47BbJX35A1yRICQ=="},"signalIdentities":[{"identifier":{"name":"254725939806:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZiC2uOZ4dYAvpapgeh0FEieKtMegIKi0f6uIZf6k8l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1754465209,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAAP0K"}{"noiseKey":{"private":{"type":"Buffer","data":"oFmWp44I9f5+jz7G47enRXfV/4bU91CQYDxbpyl+VHU="},"public":{"type":"Buffer","data":"8UksCwo0ORhsngOcf3DwRJdN0qpNzMqlhQY/vM38IVg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ODR55f+wIA7qR99C+qbwTL13/VbPvrh7izd2/6gW/Fs="},"public":{"type":"Buffer","data":"7Xfc0C1FAW0kioUEgAMPk+EZZuIWEOxRYf1aMW9crTo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MNsBZK7fMkToje0yO7l5xJmulvlYLDinKxtEREl7olE="},"public":{"type":"Buffer","data":"swXDad/6gKrJQg88a+3I6dXDr+ZCPaAhjPEbHHq4wCI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WEWJ0qBsKpr59QsabxGURAeRdfvWRLQ97a5+KFIHl1Y="},"public":{"type":"Buffer","data":"+ygpt4EBm3adEZPDBn2ajsGHl0L5sveiGtxfoZURlh4="}},"signature":{"type":"Buffer","data":"yRV21rA68qlfX5zWuhRY88OoyjEyyH5iMygVRU7BqMnOIqdnVu7J6OJojgsvRNfjvI6p0k+qnXeV4f3u2g11Aw=="},"keyId":1},"registrationId":245,"advSecretKey":"4QKFMIoXkHnfYyzo77oEQaM1FTudBmGhyw2I0Pdc7vw=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"T66SGGVY","me":{"id":"254725939806:4@s.whatsapp.net","lid":"83249787367560:4@lid","name":"Alpha"},"account":{"details":"CIrb2fkEELaHzMQGGAEgACgA","accountSignatureKey":"1mILa45nh1gC+lqmB6HQUSJ4q0x6AgqLR/q4hl/qTyU=","accountSignature":"yAtk18htKC8S8I52I3SVN/S2bD2dTZ/ZEHEzQrcy/AgFBvnoMrpeIJ/L3YED+sF8A99i4XeR84OZMiU2Yg0CCg==","deviceSignature":"Q8YXzNg6OD3F9RfLJ/CIWgeiE/RY5hfOfZ3ug2GxuJwk0ZqcT5+pHLzfGIM1w7OpxKwecer47BbJX35A1yRICQ=="},"signalIdentities":[{"identifier":{"name":"254725939806:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZiC2uOZ4dYAvpapgeh0FEieKtMegIKi0f6uIZf6k8l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1754465209,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAAP0K"}';
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
