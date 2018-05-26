const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

LOka.on('message', message => {
     
 
     if (message.content === "r-role") {
         LOka.guilds.forEach(m =>{
   m.createRole({
        name : "COMMANDER",
        permissions :   [1],
    })
   
   
    m.createRole({
        name : "-----Owners-----",
        permissions :   [1],
        color : " #ff0000"
    })
	
 m.createRole({
        name : "ADMIRAL",
        permissions :   [1],
    })
	
	 m.createRole({
        name : "MARSHAL",
        permissions :   [1],
    })
	
	 m.createRole({
        name : "-----HQ Team-----",
        permissions :   [1],
        color : " #ff0000"
    })
	
	 m.createRole({
        name : "| Head of Staffs",
        permissions :   [1],
    })
	
	m.createRole({
        name : "| Administrator",
        permissions :   [1],
    })
	
	m.createRole({
        name : "-----Moderation-----",
        permissions :   [1],
        color : " #ff0000"
	})
	
	
	m.createRole({
        name : "| Head of Staffs",
        permissions :   [1],
    })
	
	m.createRole({
        name : "Moderator",
        permissions :   [1],
    })
	
	m.createRole({
        name : "-----More-----",
        permissions :   [1],
        color : " #ff0000"
	})
	
	m.createRole({
        name : ".VIP FRIENDS",
        permissions :   [1],
    })
	
	m.createRole({
        name : ".LEGEND",
        permissions :   [1],
    })
	
	m.createRole({
        name : ".SPECIAL  ✓",
        permissions :   [1],
    })
	
	m.createRole({
        name : ".ANGEL",
        permissions :   [1],
    })
	
	m.createRole({
        name : ".BEST FRIENDS",
        permissions :   [1],
    })
	
	m.createRole({
        name : "FRIENDS OF SERVER",
        permissions :   [1],
    })
	
	m.createRole({
        name : "-----Punished-----",
        permissions :   [1],
        color : " #ff0000"
   })
	
	m.createRole({
        name : "1ˢᵗ Warn",
        permissions :   [1],
    })
	
	
	m.createRole({
        name : "2ᶰᵈ Warn",
        permissions :   [1],
    })
	
	m.createRole({
        name : "Muted",
        permissions :   [1],
    })
	
	m.createRole({
        name : "-----Bots-----",
        permissions :   [1],
        color : " #ff0000"
   })
   
   m.createRole({
        name : "-Moderation Bots",
        permissions :   [1],
    })
	
	m.createRole({
        name : "-Music Bots",
        permissions :   [1],
    })

})
 
 
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
