const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By S Codes
`);

});







function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = "^play"







function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

client.on("ready", () => {
    console.log(` bot is in ${client.guilds.size} servers `)
});

var PREFIX = "$";



//sowar


client.on("message", message => {

                        if (message.content === q1 ) {  //لا تلعب بيه
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**يرجي ان تكون في روم صوتي اولا**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('هنا رابط الفيديو اللي بيشتغل بالروم', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }



  if(message.content === "$stop" ) {
                  var servers = {};

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

  }

  if(message.content === "$help") {
    message.channel.send(` 


 `)
}


});



client.login(process.env.BOT_TOKEN);
