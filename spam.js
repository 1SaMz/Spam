const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '5') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`5`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDczNzQzMzU0NjQ4MzMwMjYw.DqqrwQ.RnA59HkyCktl3CLNGThcTx-cI-w")
