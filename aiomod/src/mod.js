class aiomod
{
	debug = false;

	postDBLoad(container)
	{
		/*
		
		Server throws an error xD.
		
		TODO: container.resolve("ConfigServer").configs['spt-trader'].fence.blacklist.length = 0;	
		TODO: Ragfair purchases=FIR
		TODO: Clear "seasonDates" array and use single seasonType (SUMMER) for 1.1-31.12
		TODO: lostondeath.json maybe?
		
		*/
		
		const db = container.resolve("DatabaseServer").getTables();
		const botTypes = db.bots.types;
		const locations = db.locations;
		const items = Object.values(db.templates.items);
		
		this.editBots(botTypes);
		this.editLocations(locations);
		this.editBosses(locations)
		
		db.globals.config.AimPunchMagnitude = 0.1;
		db.globals.config.RestrictionsInRaid.length = 0;
		
		// this.dumpDatabase(db);
		
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
	
	dumpDatabase(db) 
	{
		// Lister handles the 117mb file like butter B)
		const fs = require('fs');
		const path = require('path');
		const logFilePath = path.join(__dirname, 'debug.json');
		fs.appendFileSync(logFilePath, JSON.stringify(db, null, "\t"));
	}
	
	editBots(botTypes) 
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
	
	editLocations(locations)
	{
		for (const loc in locations)
		{
			if (loc === "base") continue;
			locations[loc].base.EscapeTimeLimit = 480;
			locations[loc].base.EscapeTimeLimitCoop = 480;
			locations[loc].base.EscapeTimeLimitPVE = 480;

			if (Array.isArray(locations[loc].base.exits)) 
			{
				locations[loc].base.exits.forEach(exit => 
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
	
	editBosses(locations)
	{
		for (const loc in locations)
		{
			if (loc === "base") continue;
			
			if (loc === "bigmap")
			{
				locations["bigmap"].base.BossLocationSpawn.length = 0;
				locations["bigmap"].base.BossLocationSpawn.push
				(
					{
						BossChance: 100,
						BossDifficult: 'normal',
						BossEscortAmount: '0',
						BossEscortDifficult: 'normal',
						BossEscortType: 'sectantWarrior',
						BossName: 'bossPartisan',
						BossPlayer: false,
						BossZone: '',
						Delay: 0,
						DependKarma: true,
						DependKarmaPVE: false,
						ForceSpawn: false,
						IgnoreMaxBots: true,
						RandomTimeSpawn: false,
						SpawnMode: [ 'regular', 'pve' ],
						Supports: null,
						Time: -1,
						TriggerId: 'PARTISAN_TRIGGER',
						TriggerName: 'botEvent'
					},
					{
						BossChance: 100,
						BossDifficult: 'normal',
						BossEscortAmount: '4',
						BossEscortDifficult: 'normal',
						BossEscortType: 'followerBully',
						BossName: 'bossBully',
						BossPlayer: false,
						BossZone: 'ZoneDormitory',
						Delay: 0,
						DependKarma: false,
						DependKarmaPVE: false,
						ForceSpawn: false,
						IgnoreMaxBots: true,
						RandomTimeSpawn: false,
						SpawnMode: [ 'regular', 'pve' ],
						Supports: null,
						Time: -1,
						TriggerId: '',
						TriggerName: ''
					},
					{
						BossChance: 100,
						BossDifficult: 'normal',
						BossEscortAmount: '4',
						BossEscortDifficult: 'normal',
						BossEscortType: 'sectantWarrior',
						BossName: 'sectantPriest',
						BossPlayer: false,
						BossZone: 'ZoneScavBase',
						Delay: 0,
						DependKarma: false,
						DependKarmaPVE: false,
						ForceSpawn: false,
						IgnoreMaxBots: true,
						RandomTimeSpawn: false,
						SpawnMode: [ 'regular', 'pve' ],
						Supports: null,
						Time: -1,
						TriggerId: '',
						TriggerName: ''
					}
				);
			}
			
			if (loc === "factory4_night")
			{
				locations["factory4_night"].base.BossLocationSpawn.length = 0;
				locations["factory4_night"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerBully",
					"BossName": "bossTagilla",
					"BossPlayer": false,
					"BossZone": "BotZone",
					"IgnoreMaxBots": true,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "sectantPriest",
					"BossPlayer": false,
					"BossZone": "BotZone",
					"IgnoreMaxBots": true,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "interchange")
			{
				locations["interchange"].base.BossLocationSpawn.length = 0;
				locations["interchange"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerTagilla",
					"BossName": "bossKilla",
					"BossPlayer": false,
					"BossZone": "ZoneGoshan",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "laboratory")
			{
				locations["laboratory"].base.BossLocationSpawn.length = 0;
				locations["laboratory"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 60,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor1",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 900,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 60,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 300,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 45,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneBasement",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 450,
					"TriggerId": "autoId_00008_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 45,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneBasement",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 800,
					"TriggerId": "autoId_00010_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 40,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneBasement",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00007_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 45,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00007_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor1",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 600,
					"TriggerId": "autoId_00632_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 600,
					"TriggerId": "autoId_00632_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor1",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00012_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00012_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor1",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 1200,
					"TriggerId": "autoId_00014_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,2,2,1,1,2,2,2,2,1,1,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 1200,
					"TriggerId": "autoId_00014_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,2,2,1,1,2,2,2,2,1,1,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor1",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00009_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneFloor2",
					"Delay": 0,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00009_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 35,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneGate2",
					"Delay": 8,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00014_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 45,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "BotZoneGate1",
					"Delay": 8,
					"IgnoreMaxBots": false,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00632_EXFIL",
					"TriggerName": "interactObject"
					}
				);
			}
			
			if (loc === "lighthouse")
			{
				locations["lighthouse"].base.BossLocationSpawn.length = 0;
				locations["lighthouse"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerZryachiy",
					"BossName": "bossZryachiy",
					"BossPlayer": false,
					"BossZone": "Zone_Island",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "bossPartisan",
					"BossPlayer": false,
					"BossZone": "",
					"Delay": 0,
					"DependKarma": true,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "PARTISAN_TRIGGER",
					"TriggerName": "botEvent"
					},
					{
					"BossChance": 80,
					"BossDifficult": "normal",
					"BossEscortAmount": "1",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_Blockpost",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 80,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_RoofContainers",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 50,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_TreatmentRocks",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 50,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,1,2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_TreatmentBeach",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 0,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_Island",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 80,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_RoofRocks",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 80,
					"BossDifficult": "normal",
					"BossEscortAmount": "1",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_RoofBeach",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 20,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "exUsec",
					"BossName": "exUsec",
					"BossPlayer": false,
					"BossZone": "Zone_Hellicopter",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "rezervbase")
			{
				locations["rezervbase"].base.BossLocationSpawn.length = 0;
				locations["rezervbase"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerGluharSecurity",
					"BossName": "bossGluhar",
					"BossPlayer": false,
					"BossZone": "ZoneSubStorage",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": [
						{
						"BossEscortAmount": "2",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerGluharAssault"
						},
						{
						"BossEscortAmount": "2",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerGluharSecurity"
						},
						{
						"BossEscortAmount": "2",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerGluharScout"
						}
					],
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "ZoneRailStrorage",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": 1470,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "ZoneRailStrorage",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00632_EXFIL",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "ZoneSubCommand",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "autoId_00000_D2_LEVER",
					"TriggerName": "interactObject"
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2,2,2,2,3",
					"BossEscortDifficult": "normal",
					"BossEscortType": "pmcBot",
					"BossName": "pmcBot",
					"BossPlayer": false,
					"BossZone": "ZoneSubCommand",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": 3,
					"TriggerId": "raider_simple_patroling",
					"TriggerName": "interactObject"
					}
				);
			}
			
			if (loc === "sandbox")
			{
				locations["sandbox"].base.BossLocationSpawn.length = 0;
				locations["sandbox"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerKolontaySecurity",
					"BossName": "bossKolontay",
					"BossPlayer": false,
					"BossZone": "ZoneSandbox",
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "3,4",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "sectantPriest",
					"BossPlayer": false,
					"BossZone": "ZoneSandbox",
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "sandbox_high")
			{
				locations["sandbox_high"].base.BossLocationSpawn.length = 0;
				locations["sandbox_high"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerKolontaySecurity",
					"BossName": "bossKolontay",
					"BossPlayer": false,
					"BossZone": "ZoneSandbox",
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "3,4",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "sectantPriest",
					"BossPlayer": false,
					"BossZone": "ZoneSandbox",
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "shoreline")
			{
				locations["shoreline"].base.BossLocationSpawn.length = 0;
				locations["shoreline"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "bossPartisan",
					"BossPlayer": false,
					"BossZone": "",
					"Delay": 0,
					"DependKarma": true,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "PARTISAN_TRIGGER",
					"TriggerName": "botEvent"
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerSanitar",
					"BossName": "bossSanitar",
					"BossPlayer": false,
					"BossZone": "ZoneGreenHouses",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "3,4",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "sectantPriest",
					"BossPlayer": false,
					"BossZone": "ZoneForestSpawn",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"pve",
						"regular"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
			
			if (loc === "tarkovstreets")
			{
				locations["tarkovstreets"].base.BossLocationSpawn.length = 0;
				locations["tarkovstreets"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerKolontaySecurity",
					"BossName": "bossKolontay",
					"BossPlayer": false,
					"BossZone": "ZoneClimova",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": [
						{
						"BossEscortAmount": "2",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerKolontayAssault"
						},
						{
						"BossEscortAmount": "2",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerKolontaySecurity"
						},
						{
						"BossEscortAmount": "0",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerGluharScout"
						}
					],
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "6",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerBoar",
					"BossName": "bossBoar",
					"BossPlayer": false,
					"BossZone": "ZoneCarShowroom",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": [
						{
						"BossEscortAmount": "4",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerBoar"
						},
						{
						"BossEscortAmount": "1",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerBoarClose1"
						},
						{
						"BossEscortAmount": "1",
						"BossEscortDifficult": [
							"normal"
						],
						"BossEscortType": "followerBoarClose2"
						}
					],
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "1,2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "bossBoarSniper",
					"BossName": "bossBoarSniper",
					"BossPlayer": false,
					"BossZone": "ZoneSnipeCarShowroom",
					"Delay": 0,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": 99999,
					"TriggerId": "BossBoarBorn",
					"TriggerName": "botEvent"
					}
				);
			}
			
			if (loc === "woods")
			{
				locations["woods"].base.BossLocationSpawn.length = 0;
				locations["woods"].base.BossLocationSpawn.push
				(
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "0",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "bossPartisan",
					"BossPlayer": false,
					"BossZone": "",
					"Delay": 0,
					"DependKarma": true,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "PARTISAN_TRIGGER",
					"TriggerName": "botEvent"
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "2",
					"BossEscortDifficult": "normal",
					"BossEscortType": "followerKojaniy",
					"BossName": "bossKojaniy",
					"BossPlayer": false,
					"BossZone": "ZoneWoodCutter",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					},
					{
					"BossChance": 100,
					"BossDifficult": "normal",
					"BossEscortAmount": "4",
					"BossEscortDifficult": "normal",
					"BossEscortType": "sectantWarrior",
					"BossName": "sectantPriest",
					"BossPlayer": false,
					"BossZone": "ZoneBrokenVill",
					"Delay": 0,
					"DependKarma": false,
					"DependKarmaPVE": false,
					"ForceSpawn": false,
					"IgnoreMaxBots": true,
					"RandomTimeSpawn": false,
					"SpawnMode": [
						"regular",
						"pve"
					],
					"Supports": null,
					"Time": -1,
					"TriggerId": "",
					"TriggerName": ""
					}
				);
			}
		}
	}
}
exports.mod = new aiomod();
