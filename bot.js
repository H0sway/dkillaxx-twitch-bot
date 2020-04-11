const tmi = require("tmi.js");

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [process.env.CHANNEL_NAME]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  if (commandName.indexOf("!") !== 0) {
    return;
  }

  // If the command is known, let's execute it
  if (commandName === "!d20") {
    const num = rollDice(commandName);
    client.say(target, `You rolled a ${num}.`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!uptime") {
    client.say(
      target,
      `DKillaXX has been live for however the fuck long it's been. I don't know I'm not keeping track.`
    );
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!hi") {
    client.say(target, `Shut the fuck up.`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!help") {
    client.say(
      target,
      `I'm still learning how to get twitch bots to work. I need help more than you do.`
    );
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!song") {
    client.say(
      target,
      `I'm literally just lines of code. I have no ears. How can I tell what song is playing?`
    );
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!rules") {
    client.say(
      target,
      `1. Catch the first pokemon you encounter in each area. 2. If already caught you may catch the first uncaught pokemon you encounter. 3. All caught pokemon must be given nicknames. 4. If a pokemon faints it's dead and must be released. 5. If all your pokemon die you lose. 6. Only use pokeballs to catch pokemon because using anything else goes against DK's religion. We're not sure what that religion is.`
    );
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!420") {
    client.say(target, `SMOKE WEED EVERY DAY`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!graveyard") {
    client.say(target, `The graveyard currently consists of Aqua the Vaporeon and Gatorade the Poliwag.`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!z00fle") {
    client.say(target, `Zooie Nova in the flesh!`);
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!hosway") {
    client.say(
      target,
      `Is that the real twitch dot teevee slash hosway underscore gaming?`
    );
    console.log(`* Executed ${commandName} command`);
  }
  if (commandName === "!commands") {
    client.say(
      target,
      `Current commands are !help, !rules, !graveyard, !hi, !uptime, and !song. There are also a few hidden commands. None of them do much right now because I'm bad at programming.`
    );
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice() {
  const sides = 20;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
