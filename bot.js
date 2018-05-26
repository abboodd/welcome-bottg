const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By spark');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
LOka.on('ready',  () => {   
 
});

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : spark ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  KBOOOOOOOOSH-YT " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
 
});
       
var prefix = "-"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    LOka.user.setStatus(argresult);
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
 
 
LOka.login("bot-token")
