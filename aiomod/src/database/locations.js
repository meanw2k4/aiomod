function editLocations(locations)
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
			});
		}
	}
	
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
		
		if (loc === "factory4_day")
		{
			locations["factory4_day"].base.BossLocationSpawn.length = 0;
			locations["factory4_day"].base.BossLocationSpawn.push
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

module.exports = editLocations;