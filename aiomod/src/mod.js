const editBaseRagfair = require("./configs/ragfair");
const editBaseWeather = require("./configs/weather");
const editBaseLostOnDeath = require("./configs/lostondeath");
const editBaseLocation = require("./configs/location");
const editBasePMC = require("./configs/pmc");

const editBots = require("./database/bots");
const editLocations = require("./database/locations");
const editQuests = require("./database/quests");
const editItems = require("./database/items");
const editGlobals = require("./database/globals");
const wpndata = require('./database/weapondata.json');
		
class aiomod
{
	debug = false;
	
	preSptLoad(container)
	{
		const cfgs = container.resolve("ConfigServer").configs;
		const spt_ragfair = cfgs['spt-ragfair']
		const spt_weather = cfgs['spt-weather']
		const spt_lostondeath = cfgs['spt-lostondeath']
		const spt_location = cfgs['spt-location']
		const spt_pmc = cfgs['spt-pmc']
		
		editBaseRagfair(spt_ragfair);
		editBaseWeather(spt_weather);
		editBaseLostOnDeath(spt_lostondeath);
		editBaseLocation(spt_location);
		editBasePMC(spt_pmc);
	}

	postDBLoad(container)
	{	
		const db = container.resolve("DatabaseServer").getTables();
		const botTypes = db.bots.types;
		const scav = botTypes['assault'];
		const locations = db.locations;
		const items = Object.values(db.templates.items);
		const quests = Object.values(db.templates.quests);
		
		editBots(botTypes);
		editLocations(locations);
		editQuests(quests);
		editItems(items);
		editGlobals(db);
		this.MergeData(scav, wpndata);
		
		if (this.debug)
		{
			console.log(JSON.stringify(scav.inventory.equipment.Holster, null, 2)); 
		}
		
	}
	
	MergeData(bot, data)
	{
		for (const key in data) 
		{
			if (data[key] instanceof Object && key in bot) 
			{
				this.MergeData(bot[key], data[key]);
			} else 
			{
				bot[key] = data[key];
			}
		}
		return bot;
	}
}

exports.mod = new aiomod();
