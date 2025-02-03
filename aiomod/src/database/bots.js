function editBots(botTypes) 
{
	const mods = ["mod_sight_front", "mod_sight_rear"];
	
	for (const botType in botTypes) 
	{
		const bot = botTypes[botType];

		if (bot?.health?.BodyParts?.[0]?.Head) 
		{
			bot.health.BodyParts[0].Head.min = 5;
			bot.health.BodyParts[0].Head.max = 5;
		}
		if (bot?.health?.BodyParts?.[0]?.Chest) 
		{
			bot.health.BodyParts[0].Chest.min = 50;
			bot.health.BodyParts[0].Chest.max = 50;
		}
		if (bot?.health?.BodyParts?.[0]?.Stomach) 
		{
			bot.health.BodyParts[0].Stomach.min = 50;
			bot.health.BodyParts[0].Stomach.max = 50;
		}
		if (bot?.health?.BodyParts?.[0]?.LeftArm) 
		{
			bot.health.BodyParts[0].LeftArm.min = 50;
			bot.health.BodyParts[0].LeftArm.max = 50;
		}
		if (bot?.health?.BodyParts?.[0]?.LeftLeg) 
		{
			bot.health.BodyParts[0].LeftLeg.min = 50;
			bot.health.BodyParts[0].LeftLeg.max = 50;
		}
		if (bot?.health?.BodyParts?.[0]?.RightArm) 
		{
			bot.health.BodyParts[0].RightArm.min = 50;
			bot.health.BodyParts[0].RightArm.max = 50;
		}
		if (bot?.health?.BodyParts?.[0]?.RightLeg) 
		{
			bot.health.BodyParts[0].RightLeg.min = 50;
			bot.health.BodyParts[0].RightLeg.max = 50;
		}
		
		if (bot?.generation?.items?.grenades?.weights) 
		{
			for (const key in bot.generation.items.grenades.weights) 
			{
				bot.generation.items.grenades.weights[key] = 0;
			}
		}

		if (bot?.chances?.weaponMods) 
		{
			for (const mod of mods) 
			{
				if (bot.chances.weaponMods[mod] != 100) 
				{
					bot.chances.weaponMods[mod] = 100;
				}
			}
		}
		
	}
}

module.exports = editBots;
