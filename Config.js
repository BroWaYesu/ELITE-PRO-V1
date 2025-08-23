require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"0EUdwCkfOQ4HoNJndrULtN0tX83sx6B7gINIz3k2hFE="},"public":{"type":"Buffer","data":"+CP7x6oZfUIu/4j1Llc7Hj+RU8fDxFLMoT1W2Bwdols="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EINcbIcxzqGeOVU+GANyAUhJk/eyIa4o895FGP6KRE8="},"public":{"type":"Buffer","data":"G9rbHcItMWoLvzrVSAE7LuoZ5Tq8MHHVBn89sNVcx1k="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YMCFYKPatu2kpHt1zEFNzGGa5D4h8/Z4MqV0AK2M5UU="},"public":{"type":"Buffer","data":"xffrIBW3CLus2uZk7qBNhBQoLLbrfOJlpNh3PKrIy3w="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kF7pF5jI8WRt5mmtow42nkenV0i/n6/ch08g59DCNmM="},"public":{"type":"Buffer","data":"HXCdER6YfNhir+yvkmCarB9BjjERKiLkVf7B/0VgbUo="}},"signature":{"type":"Buffer","data":"EI7IUPx5+VEOyWOaWDQPj9Kger3Vmfr2HR+7NlVVgD4SlwgVMfwdGg2s+89j97Hts/OFtVnPE2z9ErKOu9/YhQ=="},"keyId":1},"registrationId":176,"advSecretKey":"v5GCF/K63Hr3WgoimugCj1y7CT7mF6q10QUIfwSc+PY=","processedHistoryMessages":[{"key":{"remoteJid":"254725939806@s.whatsapp.net","fromMe":true,"id":"3264F802B49711B5749354241063FD43"},"messageTimestamp":1755947792}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"QD1C614A","me":{"id":"254725939806:15@s.whatsapp.net","lid":"83249787367560:15@lid","name":"Alpha"},"account":{"details":"CJLb2fkEEILGpsUGGAEgACgA","accountSignatureKey":"1mILa45nh1gC+lqmB6HQUSJ4q0x6AgqLR/q4hl/qTyU=","accountSignature":"0sNSgmmiWyi0Cuhg9wOseLFa6aYSacC1UaSyhy1fEaTSedn3/NRXebSihX/O275V71P/GCyIFUFhrBHnmcoFAA==","deviceSignature":"OYDJB8YMNXlkaACHubA1xjI4QqKbYwmQW2Qui9J78mMs1C0MYE9ezVk336BoZLLjKOIk+XXz23dndo1UipY8hw=="},"signalIdentities":[{"identifier":{"name":"254725939806:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZiC2uOZ4dYAvpapgeh0FEieKtMegIKi0f6uIZf6k8l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1755947786,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAAC7k"}';
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
