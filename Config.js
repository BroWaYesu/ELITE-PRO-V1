require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"CCdji3zxyZdtpOoyq/RTw7Ip0+npffA1giTY7Zd1E1M="},"public":{"type":"Buffer","data":"kO47Ueqett1/y8yuC3XSCcSM51euuk+aWtIYeGypX2I="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ANTjt/xTO/n5+bLXMPpVE641RoNau7GkadItchcoB3s="},"public":{"type":"Buffer","data":"NmEC+4Q3pueioO8d6sErxXaXD2QARIcqsM32pmXrNQ4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cJaEcD9+XaOMdRxzxBysRGxr71WpRsV+BoxSjn4yDWE="},"public":{"type":"Buffer","data":"JYaN0ePX+oaM+40XjvA39I0PqFThNOWspg1vOSDNd1s="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sDG+9kCFvy+IMQOG3RZLukp1QhD+c2JY+eiquRzn028="},"public":{"type":"Buffer","data":"+/xMJGBIV7YSMUJPUy68NBLVn7MF3BA48zZg1W7FYns="}},"signature":{"type":"Buffer","data":"v7sYMnFYpjnc/4wbARkgEMPNkE3agmBRCEK/ddNCVTkz7+CtzD2jwSHVY9QassSASzfmvOEvkiz8nzuEFV6RhA=="},"keyId":1},"registrationId":26,"advSecretKey":"sQ90rqrJpxNvRSokAHLzIHctTYEntr6IsDk4VWxnxOQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"A58XHY5C","me":{"id":"254790919376:83@s.whatsapp.net","name":"-𝔇.𝔢.𝔵.𝔱.𝔢.𝔯  𝔱.𝔯.𝔞.𝔭.𝔭.𝔢.𝔯-","lid":"214095764709515:83@lid"},"account":{"details":"CJbIkqgFELSXxMQGGAEgACgA","accountSignatureKey":"YgyqYmAjPZcDC5/rpRYo/onn9Q5jWl9hApwlgXyAvCc=","accountSignature":"Lpu8NQr8QwkxWfSgwXuo79bCbZhQTspkpHZaLt5LHjUK46I9kp6ocwPI8jWybco5usklkTZ2HQgLvq36iJ0/DQ==","deviceSignature":"Is6Y19txznnEwkO6MiMIg9VJK/FaMfHcpgyrrCa0giZqyf6utMtMCyWqNxK7N7CFZ4N6DZ8i7MvnCe+wJhKkgQ=="},"signalIdentities":[{"identifier":{"name":"254790919376:83@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWIMqmJgIz2XAwuf66UWKP6J5/UOY1pfYQKcJYF8gLwn"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CBIIBQ=="},"lastAccountSyncTimestamp":1754336184,"lastPropHash":"2V77qU"}';
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
