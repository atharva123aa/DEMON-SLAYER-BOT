const hashiras= require("./hashiras");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
app.command("/demon_slayer_bot-help", async({ack,respond})=>{
    await ack();
    await respond({text:
        `Availaible commands:
        /demon_slayer_bot-ping -Latency
        /demon_slayer_bot-knowledge- know more about demon.
        /demon_slayer_bot-summonhashira- Get a hashira meet.`
    });
});
app.command("/demon_slayer_bot-summonhashira",async(( {
    ack,respond
})=>{
    await ack();
    const random =Math.floor(Math.random() * hashiras.length);
    await respond({
        text:`Hashira came(manners)\n\n${hashiras[random]}`
    });
    
    

   } )
);
app.command("/demon_slayer_bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();