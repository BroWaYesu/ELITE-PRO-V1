require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"SFN7I/QeSGm3xHDaVPgEchE8EM6RC3DQNuaDDwcnvmc="},"public":{"type":"Buffer","data":"LzP5S/zHrCEJjR+a2J+AGplwgskYv2nAvEnVSiFtxDk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uOjb5A5zDEUcQbV05uBW3fm9S95FJ9CBZy2euVTqQl4="},"public":{"type":"Buffer","data":"2UJ7nEgOd/LoD/VioAEZzx5XTe72rMZYANwXjYyeAWI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0HJHRGUFSJFo6zHb+7/S8jJflxMf/Z32rd1xQQSPBWU="},"public":{"type":"Buffer","data":"P9LVopVi8shkmwPPfZhLUPD30oPSFSJHe35wo4EEklA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4K576EEcwjniPpOglEb2GFhIoNJpEYZ0juMAmMMhYU8="},"public":{"type":"Buffer","data":"AsYv2WiEzPmTaZWWTgn64jCUuS7G9yWGaeg1Vxc0xk4="}},"signature":{"type":"Buffer","data":"RdN1jb56L8QjxRCpR89ZDnGTGcKfLDwVNNua1d8NkPFAXQjkqwsJQprU7O3zr/D3UKLpw7pENM9EvAbrt2oLCg=="},"keyId":1},"registrationId":37,"advSecretKey":"cUJQwsWKYgkgkU7icitcgZ/YglqhafvIy51aheUl948=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"KPH5KFSZ","me":{"id":"254751264164:14@s.whatsapp.net","lid":"31753330753654:14@lid"},"account":{"details":"COSq7OwCEM2FwcQGGAEgACgA","accountSignatureKey":"HYZLyc2Y3lalHh1IJeJ86YP3wr7e+vNQBTk3/5itjSc=","accountSignature":"6vM+opcfOSQU62lTsGya2cHEdQaXCXejI/kHx7EFeM4BZLp+Mt6EwZYzB65lGXy8t3IcIbDSpU3PcWedog0aCQ==","deviceSignature":"UnZzUc0nal71vSqQ2BN8nIz3WTtftR9LLci0mdWrCxCE3Gd00u4OMNNcdPI+62FE0/uBNkTmG6XMBdhE1UVgCA=="},"signalIdentities":[{"identifier":{"name":"254751264164:14@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BR2GS8nNmN5WpR4dSCXifOmD98K+3vrzUAU5N/+YrY0n"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAgIEg=="},"lastAccountSyncTimestamp":1754284752,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAALAo"}';
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
