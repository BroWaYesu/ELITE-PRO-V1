require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"aHdCYMHCt3GKJ8rsc+IEKEY0yNSjRka7pEeWJJd8j20="},"public":{"type":"Buffer","data":"MszuXdUmlRrp2lS0RvxtLfR96tg3lqRKylDcgC/dmEw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"CBHSQezFWcvIwxN8XVvqJqmnotCY0BzmQ6XJQV8FWkA="},"public":{"type":"Buffer","data":"cRkOnMhGSfB6kHkI7OuuuATdyJhkbKa6aQrOZ2Aipn0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cHL+y1kxhwnheehmnFH5YEbcM7toCUgOkiGkOoo0f3I="},"public":{"type":"Buffer","data":"a10QaeIKmz/pbugXlD8PKF5mkn51YKzjU6XarKdI5xw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yMOKnNogpT8P4Y2fPuZxiyG3UlspjVzV4gO6Qg+HLEg="},"public":{"type":"Buffer","data":"ThAJ29lN7PV/cGNS/C7yHDOKcVKnAvMVyFCRQXOalgk="}},"signature":{"type":"Buffer","data":"0s/X6L+WHG5JN9LGd3A9hlZoANEKgTEEsrmz5+RXYDVTs5eoTBlnl4JnfsavAqwiDiZf8Ls1k4OzMwpqgwh3DQ=="},"keyId":1},"registrationId":150,"advSecretKey":"ouCgMEdqt2JacxykUsa1KUGAYBTwwfpu+gazilMj12Q=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"JRZT4CM1","me":{"id":"254790919376:84@s.whatsapp.net","name":"-𝔇.𝔢.𝔵.𝔱.𝔢.𝔯  𝔱.𝔯.𝔞.𝔭.𝔭.𝔢.𝔯-","lid":"214095764709515:84@lid"},"account":{"details":"CJfIkqgFELzYx8QGGAEgACgA","accountSignatureKey":"YgyqYmAjPZcDC5/rpRYo/onn9Q5jWl9hApwlgXyAvCc=","accountSignature":"bKTHTa8TuKMl5Ee9Lbum/qH3tGsFrgcP/fQwYj2zUkXqOLdCasJaXsN+5aju2lDHL563NHlQ5rAf9uar1ztgAg==","deviceSignature":"SEwCIEswNWb9GHCQnzme5k8QKvI8XkIsxRfy6OhsPCJKucjCKTsq5Xk3pVkVNao3CQcfNUa4h3VySdVp5CuxDA=="},"signalIdentities":[{"identifier":{"name":"254790919376:84@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWIMqmJgIz2XAwuf66UWKP6J5/UOY1pfYQKcJYF8gLwn"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CBIIBQ=="},"lastAccountSyncTimestamp":1754393664,"lastPropHash":"2V77qU"}';
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
