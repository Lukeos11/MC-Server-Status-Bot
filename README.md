# MC Server Status Bot

A simple Minecraft server status bot with auto updating embeds and client status.
Spigot URL: https://www.spigotmc.org/resources/mc-discord-server-status-bot.96831/

# TODO:
- Make the message reset once the status has switched to online.
- Create a plugin so the status can update fast or learn more about Minecraft servers to remove caching.
- Maybe add a pinging system when the status updates.

# Start The Bot:
1. Run `npm i`
2. Run `node .` or `node index.js`

# Installation:
1. Run `npm i` if you havent already.
2. Rename `.env.sample` to `.env`
3. Rename `config.json.sample` to `config.json`
4. Edit the `config.json` file to your liking (I recommend setting this up fully before you start the bot to minimise errors)
5. Fill in the Discord bot's Token, Server IP, Port, Display IP and the channel where you want the message embed to go in the `.env` file.
6. Start the bot using `node .`
7. Stop the bot once the message has been sent.
8. Copy the message ID and paste it into the .env file.
9. Start the bot again.

# Credits
Made by <a href="https://github.com/Lukeos11">Lukeos11</a> with ♥ for Hyperbolt and edited for the world to use! 😀
