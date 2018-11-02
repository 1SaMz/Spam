const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === 'سام') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`آنيكك خواتككم لعيوون ساام`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDczNzQzMzU0NjQ4MzMwMjYw.DqqrwQ.RnA59HkyCktl3CLNGThcTx-cI-w")
