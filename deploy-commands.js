const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Replace with your bot's client ID
const clientId = '1381727719246663770';
const token = 'MTM4MTcyNzcxOTI0NjY2Mzc3MA.GPpAFj.Q8xbwgw40lV3dqZspkriIvc11kki5uRM0N5YvU';

// Load commands
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

// Initialize REST client
const rest = new REST({ version: '10' }).setToken(token);

// Register commands
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    
    // Register global commands
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );
    
    console.log('Successfully registered application (/) commands globally.');
  } catch (error) {
    console.error(error);
  }
})();