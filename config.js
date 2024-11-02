const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_25_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ1A3emVtd2N6TThYTTlqcXJXRzJyQXRpcnhjZDdEL004WFE3VmNqSjdlcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVZmZDNfcTRRby1KaEdSTWo2VG56UVwiLFxuICBcInBob25lSWRcIjogXCIyNDU5MWZmYS1lOGJkLTQ0YjYtOTM1Ny05M2Y5MTQ2ZjA0MGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgNTQsXG4gICAgICAxMzgsXG4gICAgICAxNjYsXG4gICAgICA0LFxuICAgICAgMTMsXG4gICAgICAxMjYsXG4gICAgICA0LFxuICAgICAgODAsXG4gICAgICAxMTUsXG4gICAgICAyMjUsXG4gICAgICAxMixcbiAgICAgIDIzMyxcbiAgICAgIDE1LFxuICAgICAgNDUsXG4gICAgICA0LFxuICAgICAgMjI2LFxuICAgICAgMjE5LFxuICAgICAgMTc2LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDI0NyxcbiAgICAgIDQ3LFxuICAgICAgNSxcbiAgICAgIDIwOSxcbiAgICAgIDE3NixcbiAgICAgIDg1LFxuICAgICAgMTAzLFxuICAgICAgMjIyLFxuICAgICAgMzksXG4gICAgICA4NyxcbiAgICAgIDE0NSxcbiAgICAgIDQ2LFxuICAgICAgNjEsXG4gICAgICAxMzMsXG4gICAgICAxNjcsXG4gICAgICA1OCxcbiAgICAgIDU4LFxuICAgICAgODgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzg2R1g3N0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQxMjIwNDg6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDM0OTM4MjMzMjQ4MjozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT1JoWUFIRUxtWW1Ma0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkQ5aytSQjRHQkdGZzIvMHRhYUE4Mm45VldnUHRpeFhpMlQraElVUzQva009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV2ZzL0pQMXVhWGV3Z2trcFc4dVJQM2pyK1F6dlpXckc0ait3QUcwTFlzOG9vemx2MVhSYTJTR0RXZ0ExaEhpRmN6OC95SS9HTy8zMTRVOWVrbjhEQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemRVWTVGYlA5S0pMbzlwdE1yaUc0cm9xYnpxeEg2MXB1TW84bW8wTzNwdFhCRVJWRjcrM040ZjBiKzhSKzJXbWlzV0E5TVVIY3pGdCtORk8zUE4zamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNDEyMjA0ODozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU0Njc0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhXbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFdsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSTlqQ1c1bmpnU3MxMnRPbnkxWFhwMzAxK2RkTXBIRDNtNXIvZGFWMzArbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc5MTMyMzU1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NDY2ODAzOTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
