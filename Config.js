require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"wLyUk2HrduMWAwsl2/azXYaMuzNTiVz/F57nvu/tPG4="},"public":{"type":"Buffer","data":"zZRfssklgMdzg4NxpY2wTufyYVnTKPUEVgoi70pbfA8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cFfO+dJQADVZeKyYzgVH0LN293gCSOglkur/FPqyk3U="},"public":{"type":"Buffer","data":"wI7nET2mVay7ccgHHj+P9j81tHe5RUoWmQeb06lsdGc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cJp8GhfZM+Bfme0Q4vNMJhvMIQLWAjiunlnQ6KishVk="},"public":{"type":"Buffer","data":"nIbA0RbDpg1ooBZX5n4hNLlff7Bh5pKmeDYhD0xrK3k="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CAGSeL11Ljgfgu/1PsI4GoPzTovH0uXBfpz8+UtK0VM="},"public":{"type":"Buffer","data":"tr0ldLa9jlAXPchoxQVhfD7kbNFffwMcPPwQb7cEnXc="}},"signature":{"type":"Buffer","data":"44fQ00mAZCODpjnndWMKSBQnkTrLh/NnyF9W10ZtULT4S3bAWi6LFHM//TbIMl7QnX0YWlv0IbLu35O8n6OjhA=="},"keyId":1},"registrationId":110,"advSecretKey":"ep/k6XRJRAdLDRS0Aq2QjQSic2hB2KUs/UvERUAmnfQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"51HHJ7H4","me":{"id":"254754394251:5@s.whatsapp.net","lid":"173693426749612:5@lid"},"account":{"details":"CMjb1pABENzd8sMGGAIgACgA","accountSignatureKey":"8VB/hrqtvt5V6tSHtLa/CAn/PXwG8Et7QqqBckLGUG4=","accountSignature":"J8YWnLTk18oD5RkGt8B5yIwVL1a8Cr+0perR+i2qMqRiawNjSuwBRk1GIB3d5IELh+eAKlA2b6pHQ4jFZI7xDw==","deviceSignature":"5n/Ff7a6Jjkl40kFVPLLlxhtVNurd0wnwkpwnJIbnzYVTcKaZbQX+PlLJ6gYuubL+s/221v0IzD+0f61QqAajQ=="},"signalIdentities":[{"identifier":{"name":"254754394251:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfFQf4a6rb7eVerUh7S2vwgJ/z18BvBLe0KqgXJCxlBu"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIIDQ=="},"lastAccountSyncTimestamp":1753001696,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAAGdu"}';
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
