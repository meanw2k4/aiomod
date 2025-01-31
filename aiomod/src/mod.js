class aiomod
{
	debug = false;
	loggedQuests = new Set();
	numberOfScavQuestsReplaced = 0;
	numberOfPmcQuestsReplaced = 0;
	totalNumberOfQuests = 0;
	totalNumberOfQuestsReplaced = 0;

	postDBLoad(container)
	{
		/*
		Quests (Scavs4All)
		BotGenerator (Grenades & Health)
		Items (Weights, Ergo, Mouse, Speed, AI-2, CMS/Surv12)
		Locations (Chance & EscapeTimeLimit)
		
		
		Shit. Server throws an error xD.
		container.resolve("ConfigServer").configs['spt-trader'].fence.blacklist.length = 0;		
		TODO: ragfair blacklist & purchases=FIR
		TODO: clear "seasonDates" array and use single seasonType (SUMMER) for 1.1-31.12
		TODO: lostondeath.json maybe? might be convenient.
		
		TODO: "AimPunchMagnitude": 0 [db > globals > config]
		TODO: "RestrictionsInRaid" array [db > globals]
		*/
		
		
		const db = container.resolve("DatabaseServer").getTables();
		const quests = db.templates.quests;
		const questsText = container.resolve("LocaleService").getLocaleDb();
		const globalLocales = db.locales.global;
		const botTypes = db.bots.types;
		const locations = db.locations;
		const items = Object.values(db.templates.items);
		
		this.changeTargets(quests);
		this.changeBots(botTypes);
		this.changeLocations(locations);
		
		//this.logToFile(db);
		
		for (const item of items)
		{
			if (item._name === "medkit")
			{
				item._props.MaxHpResource = 9999;
				item._props.hpResourceRate = 9999;
				item._props.medUseTime = 1;
				if (!item._props.effects_damage)
				{
					item._props.effects_damage = {};
				}
				item._props.effects_damage["RadExposure"] = {
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				item._props.effects_damage["LightBleeding"] = {
					cost: 0,
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				item._props.effects_damage["HeavyBleeding"] = {
					cost: 0,
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				item._props.effects_damage["Fracture"] = {
					cost: 0,
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				item._props.effects_damage["Contusion"] = {
					cost: 0,
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				
				if (this.debug)
				{
					console.log(`${item._name.toUpperCase()} - ${item._props.MaxHpResource} - ${item._props.hpResourceRate} - ${item._props.medUseTime}`);
				}
			}
			
			if (item._name === "survival_first_aid_rollup_kit")
			{
				item._props.MaxHpResource = 50;
				item._props.medUseTime = 1;
				if (this.debug)
				{
					console.log(`${item._name.toUpperCase()} - ${item._props.MaxHpResource} - ${item._props.hpResourceRate} - ${item._props.medUseTime}`);
				}
			}
			
			if (item._name === "core_medical_surgical_kit")
			{
				item._props.MaxHpResource = 50;
				item._props.medUseTime = 1;
				if (!item._props.effects_damage)
				{
					item._props.effects_damage = {};
				}
				item._props.effects_damage["DestroyedPart"] = {
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				item._props.effects_damage["Fracture"] = {
					delay: 0,
					duration: 0,
					fadeOut: 0
				};
				
				if (this.debug)
				{
					console.log(`${item._name.toUpperCase()} - ${item._props.MaxHpResource} - ${item._props.hpResourceRate} - ${item._props.medUseTime}`);
				}
			}
			
			if (item._props.Weight)
			{
				item._props.Weight *= 0.05;
			}
			
			if (item._props.mousePenalty)
			{
				item._props.mousePenalty = 0;
			}
			
			if (item._props.speedPenaltyPercent)
			{
				item._props.speedPenaltyPercent = 0;
			}
			
			if (item._props.weaponErgonomicPenalty)
			{
				item._props.weaponErgonomicPenalty = 0;
			}
		}
	}
	
	logToFile(diibii) 
	{
		// Lister handles the 117mb file like butter B)
		const fs = require('fs');
		const path = require('path');
		const logFilePath = path.join(__dirname, 'debug.json');
		fs.appendFileSync(logFilePath, JSON.stringify(diibii, null, "\t"));
	}

	changeQuestText(questTextID)
	{
		for (let eachLocale in this.globalLocales) 
		{
			const currentLocale = this.globalLocales[eachLocale];
			if (currentLocale[questTextID] != null) 
			{
				currentLocale[questTextID] += " (EDITED)";
			}
		}
	}
	
	changeBots(botTypes) 
	{
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
			
			if (this.debug)
			{
				console.log(`${botType.toUpperCase()} - ${bot.health.BodyParts[0].Head.min} - ${bot.health.BodyParts[0].Chest.min} - ${bot.health.BodyParts[0].Stomach.min} - ${bot.health.BodyParts[0].LeftArm.min} - ${bot.health.BodyParts[0].LeftLeg.min} - ${bot.health.BodyParts[0].RightArm.min} - ${bot.health.BodyParts[0].RightLeg.min}`);
			}
		
		}
	}
	
	changeLocations(locations)
	{
		for (const loc in locations)
		{
			if (loc === "base") continue; // base.json in locations folder
			const baseConfig = locations[loc].base; 	
			
			baseConfig.EscapeTimeLimit = 480;
			baseConfig.EscapeTimeLimitCoop = 480;
			baseConfig.EscapeTimeLimitPVE = 480;

			if (Array.isArray(baseConfig.exits)) 
			{
				baseConfig.exits.forEach(exit => 
				{
					exit.Chance = 100;
					exit.ExfiltrationTime = 5;
					if (this.debug)
					{
						console.log(`${loc.toUpperCase()} - ${exit.Name.toUpperCase()} - ${exit.Chance}`);
					}
				});
			}
		}
	}

	changeTargets(quests)
	{
		for (let eachQuest in quests)
		{
			this.totalNumberOfQuests++;
			const currentQuest = quests[eachQuest];
			for (let eachCondition in currentQuest.conditions.AvailableForFinish)
			{
				const currentCondition = currentQuest.conditions.AvailableForFinish[eachCondition];
				if (currentCondition.conditionType === 'CounterCreator')
				{
					for (let eachSubCondition in currentCondition.counter.conditions)
					{
						const specificCondition = currentCondition.counter.conditions[eachSubCondition];
						

						if (specificCondition.conditionType === 'Kills' && (specificCondition.target === 'Savage' || specificCondition.target === 'AnyPMC')) 
						{
							quests[eachQuest].conditions.AvailableForFinish[eachCondition].counter.conditions[eachSubCondition].target = 'Any';
							const questTextID = quests[eachQuest].conditions.AvailableForFinish[eachCondition].id;
						
							if (!specificCondition.savageRole || specificCondition.savageRole.length === 0) 
							{
							this.changeQuestText(questTextID);
							this.totalNumberOfQuestsReplaced++;
							this.numberOfScavQuestsReplaced++;
							} 
							else 
							{
							this.changeQuestText(questTextID);
							this.totalNumberOfQuestsReplaced++;
							this.numberOfPmcQuestsReplaced++;
							}
						
							if (this.debug) 
							{
								const questName = quests[eachQuest].QuestName.toUpperCase();
								if (!this.loggedQuests.has(questName)) 
								{
									console.log(`${questName}`);
									this.loggedQuests.add(questName);
								}
							}
						}
					}
				}
			}
		}
	}
}
exports.mod = new aiomod();
