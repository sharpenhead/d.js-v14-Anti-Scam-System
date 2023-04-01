# d.js-v14-Anti-Scam-System
This repository has an anti-scam system for your Discord bot, in addition to the power to enable and disable it for your Discord server.

### `❓` **Purpose:**
This is a multi-guild anti-scam system that you may enable and disable for your server, as well as log any violations in a specified channel.

### `⚠️` **Warning:**
When copying over the files from this repository, remember to adjust the file paths to match the files on your bot. Also remember to modify the embed colors to your preference.

### `❗` **Requirements:**
You need the antiscam schema for this command to work.

**⤷ Location:** [d.js-v14-Anti-Scam-System/Models/antiscam.js](https://github.com/sharpenhead/d.js-v14-Anti-Scam-System/blob/main/Models/antiscam.js)

**⤷ Location:** d.js-v14-Anti-Scam-System/Models/antiscamLogChannel.js

**⤷** `📁` Place these two in the folder where you keep all your schemas.

Then you need the messageCreate event.
**⤷ Location:** d.js-v14-Anti-Scam-System/Events/Client/antiscammessageCreate.js
**⤷** `📁` Place in `Events > Client`.

Finally, download the scamLinks.json file or paste the contents into a new file.
**⤷ Location:** d.js-v14-Anti-Scam-System/scamLinks.json
**⤷** `📁` Place outside of all the folders; where you keep your `index.js` file.

### `🔧` **Command:**
- /setup-antiscam **➜** Allows admins to enable or disable the anti-scam system.

### `💳` **Credits:**
- Credits to NotNate#0278 (Discord ID: 667925612274384908) for supplying the messageCreate and scamLinks.json files.
- Credits to shoczy#9003 (Discord ID: 709393455519891486) for providing the foundation for the enable and disable system.

### `📝` **Side note:**
Please contact me via Discord, RexoPlays's brother#3085, if you have any questions, problems with the system, or if a step is unclear, and I will try my best to assist you!
