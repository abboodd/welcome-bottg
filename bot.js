const Discord = require('discord.js');
const client = new Discord.Client();
 
var fs = require('fs');
var Canvas = require('canvas')
var jimp = require('jimp')
client.on('guildMemberAdd', member => {
     
        if (member.guild.id === "419494096420470784") {
        var w = ['./img.png'];
           let Image = Canvas.Image,
               canvas = new Canvas(700, 300),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
 
   
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 700, 202);
   })
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);
//AVATAR
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(55, 110, 88, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 25, 135, 190);                    
   client.channels.get("419494096420470786").sendFile(canvas.toBuffer())
  client.channels.get("419494096420470786").send(`Welcome ${member} To __${member.guild.name}__`)
   })})  }
   });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
