class aiomod
{
	debug = false;
	
	preSptLoad(container)
	{
		const cfgs = container.resolve("ConfigServer").configs;	
		
		const ragfair = cfgs['spt-ragfair']
		ragfair.dynamic.purchasesAreFoundInRaid = true;
		ragfair.dynamic.blacklist.enableBsgList = false;
		ragfair.dynamic.blacklist.enableQuestList = false;
		ragfair.dynamic.stackablePercent.min = 999;
		ragfair.dynamic.stackablePercent.max = 999;
		ragfair.dynamic.nonStackableCount.min = 999;
		ragfair.dynamic.nonStackableCount.max = 999;
		ragfair.dynamic.barter.itemCountMin = 999;
		ragfair.dynamic.barter.itemCountMax = 999;
		ragfair.dynamic.pack.chancePercent = 0;
		ragfair.dynamic.pack.itemCountMin = 999;
		ragfair.dynamic.pack.itemCountMax = 999;
		ragfair.dynamic.unreasonableModPrices = {};
		ragfair.dynamic.itemPriceOverrideRouble = {};
		ragfair.dynamic.itemPriceMultiplier = {};
		if (this.debug)
		{
			console.log("edited -> configs/ragfair.json");
		}
		
		const weather = cfgs['spt-weather']
		weather.seasonDates.length = 0;
		weather.seasonDates.push
		(
			{
            "seasonType": 0,
            "name": "SUMMER",
            "startDay": "1",
            "startMonth": "1",
            "endDay": "31",
            "endMonth": "12"
			}		
		);
		if (this.debug)
		{
			console.log("edited -> configs/weather.json");
		}
		
		const lostondeath = cfgs['spt-lostondeath']
		lostondeath.equipment.ArmBand = false;
		lostondeath.equipment.Compass = false;
		lostondeath.equipment.Headwear = false;
		lostondeath.equipment.Earpiece = false;
		lostondeath.equipment.FaceCover = false;
		lostondeath.equipment.ArmorVest = false;
		lostondeath.equipment.Eyewear = false;
		lostondeath.equipment.TacticalVest = false;
		lostondeath.equipment.PocketItems = false;
		lostondeath.equipment.Backpack = false;
		lostondeath.equipment.Holster = false;
		lostondeath.equipment.FirstPrimaryWeapon = false;
		lostondeath.equipment.SecondPrimaryWeapon = false;
		lostondeath.equipment.Scabbard = false;
		lostondeath.equipment.SecuredContainer = false;
		lostondeath.questItems = false;
		lostondeath.specialSlotItems = false;
		if (this.debug)
		{
			console.log("edited -> configs/lostondeath.json");
		}
		
		const serverlocation = cfgs['spt-location']
		serverlocation.customWaves.boss = {};
		serverlocation.customWaves.normal = {};
		if (this.debug)
		{
			console.log("edited -> configs/location.json");
		}
		
		const pmc = cfgs['spt-pmc']
		pmc.convertIntoPmcChance.default.assault.min = 0;
		pmc.convertIntoPmcChance.default.assault.max = 0;
		pmc.convertIntoPmcChance.default.cursedassault.min = 0;
		pmc.convertIntoPmcChance.default.cursedassault.max = 0;
		pmc.convertIntoPmcChance.default.pmcbot.min = 0;
		pmc.convertIntoPmcChance.default.pmcbot.max = 0;
		pmc.convertIntoPmcChance.default.exusec.min = 0;
		pmc.convertIntoPmcChance.default.exusec.max = 0;
		pmc.convertIntoPmcChance.default.arenafighter.min = 0;
		pmc.convertIntoPmcChance.default.arenafighter.max = 0;
		pmc.convertIntoPmcChance.default.arenafighterevent.min = 0;
		pmc.convertIntoPmcChance.default.arenafighterevent.max = 0;
		pmc.convertIntoPmcChance.default.crazyassaultevent.min = 0;
		pmc.convertIntoPmcChance.default.crazyassaultevent.max = 0;
		pmc.convertIntoPmcChance.factory4_day.assault.min = 0;
		pmc.convertIntoPmcChance.factory4_day.assault.max = 0;
		pmc.convertIntoPmcChance.laboratory.pmcbot.min = 0;
		pmc.convertIntoPmcChance.laboratory.pmcbot.max = 0;
		pmc.convertIntoPmcChance.rezervbase.pmcbot.min = 0;
		pmc.convertIntoPmcChance.rezervbase.pmcbot.max = 0;
		if (this.debug)
		{
			console.log("edited -> configs/pmc.json");
		}
	}

	postDBLoad(container)
	{	
		const db = container.resolve("DatabaseServer").getTables();
		const botTypes = db.bots.types;
		const locations = db.locations;
		const items = Object.values(db.templates.items);
		const quests = Object.values(db.templates.quests);
		this.editBots(botTypes);
		this.editLocations(locations);
		this.editBosses(locations);
		this.editQuests(quests);
		
		// --FirstPrimaryWeapon---------------------------------------------------------
		// MP5, MP5SD, MP5K, UMP, MP9N, P90, AUGA1, SCARLH, DVL10, AA12GEN1, SAKOTRG	
		// --Holster--------------------------------------------------------------------
		// Five-seveN, G17, G19X, RHINO50DS, DEAGLEL6, DEAGLEMKXIX, RSH12, USP			
		// -----------------------------------------------------------------------------
		
		const scav = botTypes['assault'];
		const fun = 
		{
			"inventory": {
				"equipment": {
					"FirstPrimaryWeapon": {
						"5926bb2186f7744b1c6c6e60": 4430,
						"5d2f0d8048f0356c925bc3b0": 4430,
						"5fc3e272f8b6a877a729eac5": 4430,
						"5de7bd7bfd6b4e6e2276dc25": 4430,
						"5cc82d76e24e8d00134b4b83": 4430,
						"62e7c4fba689e8c9c50dfc38": 4430,
						"6184055050224f204c1da540": 4430,
						"588892092459774ac91d4b11": 4430,
						"66ffa9b66e19cc902401c5e8": 4430,
						"6183afd850224f204c1da514": 4430,
						"673cab3e03c6a20581028bc1": 4430,
					},
					"Holster": {
						"5d3eb3b0a4b93615055e84d2": 4430,
						"5a7ae0c351dfba0017554310": 4430,
						"6193a720f8ee7e52e42109ed": 4430,
						"633ec7c2a6918cb895019c6c": 4430,
						"61a4c8884f95bc3b2c5dc96f": 4430,
						"669fa39b48fc9f8db6035a0c": 4430,
						"668fe5a998b5ad715703ddd6": 4430,
						"63088377b5cd696784087147": 4430
					}
				},
				"Ammo": {
				},
				"mods": {
					"673cab3e03c6a20581028bc1": {
						"mod_magazine": ["673cbdfad0453ba50c0f76d6"],
						"mod_charge": ["673cb4054ff4aa8f86076f4a"],
						"mod_stock": ["673cb212e695740be0047a46"],
						"mod_reciever": ["673cb491280680de5e02ff36"],
						"patron_in_weapon": ["5fc382a9d724d907e2077dab","5fc275cf85fd526b824a571a","5fc382c1016cce60e8341b20","5fc382b6d6fa9c00c571bbc3"]
					},
					"673cb5d1280680de5e02ff3b": {
						"mod_foregrip": ["673cb81f5b1511adb10cd326"],
						"mod_sight_front": ["5c18b90d2e2216152142466b"],
						"mod_mount_000": ["673dd617912f68467c0615b6","673dd5f73f92dc7e120d20a9"],
						"mod_mount_001": ["673dd617912f68467c0615b6","673dd5f73f92dc7e120d20a9"]
					},
					"67405ef125beb509e8070276": {
						"mod_foregrip": ["673cb81f5b1511adb10cd326"],
						"mod_sight_front": ["5c18b90d2e2216152142466b"],
						"mod_mount_000": ["673dd617912f68467c0615b6","673dd5f73f92dc7e120d20a9"],
						"mod_mount_001": ["673dd617912f68467c0615b6","673dd5f73f92dc7e120d20a9"]
					},
					"673cb491280680de5e02ff36": {
						"mod_handguard": ["673cb5d1280680de5e02ff3b","67405ef125beb509e8070276"],
						"mod_barrel": ["673cb551093e0ea7fd0b874a","67405d760098dcb5940ea1a6","67405e3b83ac5c69ae025406"],
						"mod_mount": ["673cb51e093e0ea7fd0b8746"],
					},
					"67405d760098dcb5940ea1a6": {
						"mod_muzzle": ["673f3ef1259f5945d70e43a8","673f4046259f5945d70e43ab","673f3f5eef7545280c00f026","673f3f9840aeca974e0b5c68","673f0a9370a3ddcf0d0ee0b8"]
					},
					"67405e3b83ac5c69ae025406": {
						"mod_muzzle": ["673f3ef1259f5945d70e43a8","673f4046259f5945d70e43ab","673f3f5eef7545280c00f026","673f3f9840aeca974e0b5c68","673f0a9370a3ddcf0d0ee0b8"]
					},
					"673cb51e093e0ea7fd0b8746": {
						"mod_scope": ["5b3b99265acfc4704b4a1afb","5aa66a9be5b5b0214e506e89"],
						"mod_sight_rear": ["5c18b9192e2216398b5a8104"]
					},
					"673cb212e695740be0047a46": {
						"mod_mount_000": ["673ddbb567c759b3c90e5f76"]
					},
					"6183afd850224f204c1da514": {
						"mod_pistol_grip": ["55802f5d4bdc2dac148b458f"],
						"mod_magazine": ["618168dc8004cc50514c34fc"],
						"mod_reciever": ["6165adcdd3a39d50044c120f"],
						"mod_stock": ["61816734d8e3106d9806c1f3"],
						"mod_charge": ["6181688c6c780c1e710c9b04"],
						"patron_in_weapon": ["5e023e53d4353e3302577c4c","5e023e88277cce2b522ff2b1","5e023e6e34d52a55c3304f71","6768c25aa7b238f14a08d3f6","58dd3ad986f77403051cba8f","5a6086ea4f39f99cd479502f"]
					},
					"6165adcdd3a39d50044c120f": {
						"mod_barrel": ["618168b350224f204c1da4d8","6183b0711cb55961fa0fdcad","6183b084a112697a4b3a6e6c"],
						"mod_sight_rear": ["61817865d3a39d50044c13a4"],
						"mod_sight_front": ["61816fcad92c473c770215cc"],
						"mod_mount_000": ["61816df1d3a39d50044c139e"],
						"mod_mount_001": ["61816dfa6ef05c2ce828f1ad", "66ffe66a20771d839f0fb4a9"]
					},
					"61816734d8e3106d9806c1f3": {
						"mod_stock_001": ["618167528004cc50514c34f9"],
						"mod_stock_002": ["618167441cb55961fa0fdc71"]
					},
					"66ffa9b66e19cc902401c5e8": {
						"mod_stock": ["66ffac9e316b08f6840a73e6", "670fd23798663bc4b10e911a", "6719023b612cc94b9008e78c"],
						"mod_magazine": ["66ffaab91f7492c901027bb8"],
						"mod_barrel": ["66ffac601f7492c901027bbb","670fced86a7e274b1a0964e8"]
					},
					"588892092459774ac91d4b11": {
						"mod_magazine": ["5888988e24597752fe43a6fa"],
						"mod_scope": ["5b3b99265acfc4704b4a1afb","5aa66a9be5b5b0214e506e89"],
						"mod_barrel": ["5888945a2459774bf43ba385","5888956924597752983e182d"],
						"mod_pistol_grip": ["57c55f092459772d291a8463","57c55f172459772d27602381"],
						"mod_stock": ["58889d0c2459775bc215d981"],
						"patron_in_weapon": ["5e023e53d4353e3302577c4c","5e023e88277cce2b522ff2b1","5e023e6e34d52a55c3304f71","6768c25aa7b238f14a08d3f6","58dd3ad986f77403051cba8f","5a6086ea4f39f99cd479502f"]
					},
					"5aa66a9be5b5b0214e506e89": {
						"mod_scope": ["56ea70acd2720b844b8b4594","5aa66be6e5b5b0214e506e97","61714eec290d254f5e6b2ffc","62850c28da09541f43158cca"]
					},
					"5b3b99265acfc4704b4a1afb": {
						"mod_scope": ["5b2388675acfc4771e1be0be","5b3b99475acfc432ff4dcbee","5a37cb10c4a282329a73b4e7","57c5ac0824597754771e88a9","618ba27d9008e4636a67f61d","617151c1d92c473c770214ab","6567e7681265c8a131069b0f"]
					},
					"5888956924597752983e182d": {
						"mod_muzzle": ["5888996c24597754281f9419"],
						"mod_handguard": ["5888976c24597754281f93f5"]
					},
					"5888945a2459774bf43ba385": {
						"mod_muzzle": ["58889c7324597754281f9439"],
						"mod_bipod": ["5888961624597754281f93f3"]
					},
					"6184055050224f204c1da540": {
						"mod_pistol_grip": ["571659bb2459771fb2755a12"],
						"mod_magazine": ["61840d85568c120fdd2962a5"],
						"mod_reciever": ["618426d96c780c1e710c9b9f"],
						"mod_stock": ["61825d06d92c473c770215de"],
						"mod_charge": ["6181688c6c780c1e710c9b04"],
						"patron_in_weapon": ["59e6918f86f7746c9f75e849","59e68f6f86f7746c9f75e846","59e6927d86f77411da468256","59e6920f86f77411d82aa167","5c0d5ae286f7741e46554302","54527a984bdc2d4e668b4567","54527ac44bdc2d36668b4567","59e6906286f7746c9f75e847","60194943740c5d77f6705eea","59e690b686f7746c9f75e848","601949593ae8f707c4608daa"]
					},
					"61825d06d92c473c770215de": {
						"mod_stock_001": ["61825d136ef05c2ce828f1cc"],
						"mod_stock_002": ["61825d24d3a39d50044c13af"]
					},
					"618426d96c780c1e710c9b9f": {
						"mod_barrel": ["6183fc15d3a39d50044c13e9", "6183fd911cb55961fa0fdce9", "6183fd9e8004cc50514c358f"],
						"mod_sight_rear": ["61817865d3a39d50044c13a4"],
						"mod_sight_front": ["61816fcad92c473c770215cc"],
						"mod_mount_000": ["61816df1d3a39d50044c139e"],
						"mod_mount_001": ["61816dfa6ef05c2ce828f1ad", "66ffe6916f11538c7d0581e1"]
					},
					"62e7c4fba689e8c9c50dfc38": {
						"mod_magazine": ["62e7c98b550c8218d602cbb4"],
						"mod_charge": ["62e7c880f68e7a0676050c7c"],
						"mod_reciever": ["62ea7c793043d74a0306e19f"],
						"patron_in_weapon": ["59e6918f86f7746c9f75e849","59e68f6f86f7746c9f75e846","59e6927d86f77411da468256","59e6920f86f77411d82aa167","5c0d5ae286f7741e46554302","54527a984bdc2d4e668b4567","54527ac44bdc2d36668b4567","59e6906286f7746c9f75e847","60194943740c5d77f6705eea","59e690b686f7746c9f75e848","601949593ae8f707c4608daa"]
					},
					"62ea7c793043d74a0306e19f": {
						"mod_barrel": ["62e7c7f3c34ea971710c32fc", "630e39c3bd357927e4007c15", "6333f05d1bc0e6217a0e9d34"]
					},
					"5cc82d76e24e8d00134b4b83": {
						"mod_magazine": ["5cc70093e4a949033c734312"],
						"mod_stock": ["5cc700b9e4a949000f0f0f25", "5cebec10d7f00c065703d185"],
						"mod_reciever": ["5cc70102e4a949035e43ba74", "5cf7acfcd7f00c1084477cf2"],
						"mod_barrel": ["5cc701aae4a949000e1ea45c", "5cc701d7e4a94900100ac4e7"],
						"mod_charge": ["5cc6ea78e4a949000e1ea3c1", "5cc6ea85e4a949000e1ea3c3"],
						"patron_in_weapon": ["5cc80f53e4a949000e1ea4f8","5cc86832d7f00c000d3a6e6c","5cc86840d7f00c002412c56c","5cc80f67e4a949035e43bbba","5cc80f38e4a949001152b560","5cc80f8fe4a949033b0224a2","5cc80f79e4a949033c7343b2"]
					},
					"5cc701aae4a949000e1ea45c": {
						"mod_muzzle": ["5cc82796e24e8d000f5859a8"]
					},
					"5cf7acfcd7f00c1084477cf2": {
						"mod_mount_000": ["5cebec38d7f00c00110a652a", "5cc7015ae4a949001152b4c6"],
						"mod_mount_001": ["5cc70146e4a949000d73bf6b"],
						"mod_mount_002": ["5cc70146e4a949000d73bf6b"]
					},
					"5cc70102e4a949035e43ba74": {
						"mod_mount_000": ["5cebec38d7f00c00110a652a", "5cc7015ae4a949001152b4c6"],
						"mod_mount_001": ["5cc70146e4a949000d73bf6b"],
						"mod_mount_002": ["5cc70146e4a949000d73bf6b"]
					},
					"5cc700b9e4a949000f0f0f25": {
						"mod_stock_000": ["5cc700d4e4a949000f0f0f28", "5cc700cae4a949035e43ba72"]
					},
					"5cebec10d7f00c065703d185": {
						"mod_stock_000": ["5cc700d4e4a949000f0f0f28", "5cc700cae4a949035e43ba72"]
					},
					"5de7bd7bfd6b4e6e2276dc25": {
						"mod_magazine": ["5de8e8dafd6b4e6e2276dc32","5de8ea8ffd6b4e6e2276dc35","5de8eaadbbaf010b10528a6d","5de8eac42a78646d96665d91"],
						"mod_muzzle": ["5de8f237bbaf010b10528a70"],
						"mod_stock": ["5de910da8b6c4240ba2651b5"],
						"mod_foregrip": ["5de8fbad2fbe23140d3ee9c4"],
						"mod_reciever": ["5de8e67c4a9f347bc92edbd7"],
						"mod_charge": ["5de922d4b11454561e39239f"],
						"patron_in_weapon": ["58864a4f2459770fcc257101","64b7bbb74b75259c590fa897","5c3df7d588a4501f290594e5","56d59d3ad2720bdb418b4577","5efb0e16aeb21837e749c7ff","5a3c16fe86f77452b62de32a","5efb0da7a29a85116f6ea05f","5c0d56a986f774449d5de529"]
					},
					"5de8e67c4a9f347bc92edbd7": {
						"mod_sight_rear": ["5de8fb539f98ac2bc659513a"],
						"mod_mount": ["5de8fc0b205ddc616a6bc51b"]
					},
					"5fc3e272f8b6a877a729eac5": {
						"mod_magazine": ["5fc3e466187fea44d52eda90"],
						"mod_stock": ["5fc3e4ee7283c4046c5814af"],
						"mod_barrel": ["5fc3e4a27283c4046c5814ab"],
						"mod_mount_000": ["5fc53954f8b6a877a729eaeb"],
						"mod_mount_001": ["5fc5396e900b1d5091531e72"],
						"mod_mount_002": ["5fc5396e900b1d5091531e72"],
						"patron_in_weapon": ["5efb0d4f4bc50b58e81710f3","5efb0fc6aeb21837e749c801","5e81f423763d9f754677bf2e","5efb0cabfb3e451d70735af5"]
					},
					"5d2f0d8048f0356c925bc3b0": {
						"mod_magazine": ["5d2f213448f0355009199284"],
						"mod_reciever": ["5d2f261548f03576f500e7b7"],
						"mod_charge": ["5d2f2d5748f03572ec0c0139"],
						"patron_in_weapon": ["58864a4f2459770fcc257101","64b7bbb74b75259c590fa897","5c3df7d588a4501f290594e5","56d59d3ad2720bdb418b4577","5efb0e16aeb21837e749c7ff","5a3c16fe86f77452b62de32a","5efb0da7a29a85116f6ea05f","5c0d56a986f774449d5de529"]
					},
					"5d2f261548f03576f500e7b7": {
						"mod_handguard": ["5d2f259b48f0355a844acd74"],
						"mod_sight_rear": ["5926d2be86f774134d668e4e"],
						"mod_stock": ["5d2f25bc48f03502573e5d85"]
					},
					"5926bb2186f7744b1c6c6e60": {
						"mod_magazine": ["5926c3b286f774640d189b6b"],
						"mod_reciever": ["5926f2e086f7745aae644231","5926c0df86f77462f647f764"],
						"mod_charge": ["5926c32286f774616e42de99"],
						"patron_in_weapon": ["58864a4f2459770fcc257101","64b7bbb74b75259c590fa897","5c3df7d588a4501f290594e5","56d59d3ad2720bdb418b4577","5efb0e16aeb21837e749c7ff","5a3c16fe86f77452b62de32a","5efb0da7a29a85116f6ea05f","5c0d56a986f774449d5de529"]
					},
					"5926c0df86f77462f647f764": {
						"mod_handguard": ["5926c36d86f77467a92a8629"],
						"mod_sight_rear": ["5926d2be86f774134d668e4e"],
						"mod_stock": ["5926d40686f7740f152b6b7e"],
						"mod_muzzle": ["5926e16e86f7742f5a0f7ecb"]
					},
					"5926f2e086f7745aae644231": {
						"mod_handguard": ["5926f34786f77469195bfe92"],
						"mod_sight_rear": ["5926d2be86f774134d668e4e"],
						"mod_stock": ["5926d3c686f77410de68ebc8"],
						"mod_muzzle": ["5926d33d86f77410de68ebc0"]
					},
					"63088377b5cd696784087147": {
						"mod_barrel": ["630764fea987397c0816d219"],
						"mod_reciever": ["63075cc5962d0247b029dc2a"],
						"mod_magazine": ["630767c37d50ff5e8a1ea71a", "630769c4962d0247b029dc60", "63076701a987397c0816d21b"],
						"patron_in_weapon": ["58864a4f2459770fcc257101","64b7bbb74b75259c590fa897","5c3df7d588a4501f290594e5","56d59d3ad2720bdb418b4577","5efb0e16aeb21837e749c7ff","5a3c16fe86f77452b62de32a","5efb0da7a29a85116f6ea05f","5c0d56a986f774449d5de529"]
					},
					"63075cc5962d0247b029dc2a": {
						"mod_sight_rear": ["630765cb962d0247b029dc45"],
						"mod_sight_front": ["630765777d50ff5e8a1ea718"]
					},
					"668fe5a998b5ad715703ddd6": {
						"mod_barrel": ["668fe5f62a0f85eea407cc18"],
						"mod_pistolgrip": ["668fe5d42a0f85eea407cc16","66a0da76b6f47fcfeb025e96"],
						"mod_reciever": ["668fe60b56984d93550462c6"],
						"mod_magazine": ["668fe5c5f35310705d02b696"],
						"patron_in_weapon": ["66a0d1c87d0d369e270bb9de","668fe62ac62660a5d8071446","66a0d1e0ed648d72fe064d06"]
					},
					"668fe60b56984d93550462c6": {
						"mod_sight_rear": ["668fe5e1800f0244f9036e46"]
					},
					"669fa39b48fc9f8db6035a0c": {
						"mod_barrel": ["669fa47da0bab4e8510d9526"],
						"mod_pistolgrip": ["668fe5d42a0f85eea407cc16","66a0da76b6f47fcfeb025e96"],
						"mod_reciever": ["669fa4d97a09bc295603b496"],
						"mod_magazine": ["668fe5c5f35310705d02b696"],
						"patron_in_weapon": ["66a0d1c87d0d369e270bb9de","668fe62ac62660a5d8071446","66a0d1e0ed648d72fe064d06"]
					},
					"669fa4d97a09bc295603b496": {
						"mod_sight_rear": ["668fe5e1800f0244f9036e46"]
					},
					"61a4c8884f95bc3b2c5dc96f": {
						"mod_magazine": ["619f54a1d25cbd424731fb99"],
						"mod_sight_rear": ["619f4cee4c58466fe1228435"],
						"mod_sight_front": ["619f4d304c58466fe1228437"],
						"mod_pistol_grip": ["619f4ab2d25cbd424731fb95", "619f4bffd25cbd424731fb97"]
					},
					"633ec7c2a6918cb895019c6c": {
						"mod_magazine": ["633ec6ee025b096d320a3b15"],
						"mod_pistol_grip": ["633ec8e4025b096d320a3b1e"]
					},
					"6193a720f8ee7e52e42109ed": {
						"mod_barrel": ["6194ef39de3cdf1d2614a768","6194efe07c6c7b169525f11b","6194eff92d2c397d6600348b","6194f017ed0429009f543eaa","6194f02d9bb3d20b0946d2f0"],
						"mod_reciever": ["6194f5d418a3974e5e7421ef","6194f5722d2c397d6600348f","6194f5a318a3974e5e7421eb","6194f41f9fb0c665d5490e75","6193d382ed0429009f543e65"],
						"mod_magazine": ["6193d338de3cdf1d2614a6fc","6193d3149fb0c665d5490e32","671d8b8c0959c721a50ca838"],
						"mod_trigger": ["6193d3cded0429009f543e6a"],
						"mod_hammer": ["6193d3be7c6c7b169525f0da"],
						"mod_catch": ["6193d5d4f8ee7e52e4210a1b"],
						"mod_mount_000": ["619621a4de3cdf1d2614a7a7","619624b26db0f2477964e6b0","6196255558ef8c428c287d1c"],
						"patron_in_weapon": ["5efb0d4f4bc50b58e81710f3","5efb0fc6aeb21837e749c801","5e81f423763d9f754677bf2e","5efb0cabfb3e451d70735af5"]
					},
					"6194efe07c6c7b169525f11b": {"mod_muzzle": ["6194f1f918a3974e5e7421e4"]
					},
					"6194f5d418a3974e5e7421ef": {
						"mod_sight_rear": ["6194f2912d2c397d6600348d"],
						"mod_sight_front": ["6194f35c18a3974e5e7421e6"]
					},
					"6194f5722d2c397d6600348f": {
						"mod_sight_rear": ["6194f2912d2c397d6600348d"],
						"mod_sight_front": ["6194f35c18a3974e5e7421e6"]
					},
					"6194f5a318a3974e5e7421eb": {
						"mod_sight_rear": ["6194f2912d2c397d6600348d"],
						"mod_sight_front": ["6194f35c18a3974e5e7421e6"]
					},
					"6194f41f9fb0c665d5490e75": {
						"mod_sight_rear": ["6194f2912d2c397d6600348d"],
						"mod_sight_front": ["6194f35c18a3974e5e7421e6"]
					},
					"6193d382ed0429009f543e65": {
						"mod_sight_rear": ["6194f2912d2c397d6600348d"],
						"mod_sight_front": ["6194f35c18a3974e5e7421e6"]
					},
					"5a7ae0c351dfba0017554310": {
						"mod_barrel": ["5a6b5f868dc32e000a311389"],
						"mod_reciever": ["5a6f5e048dc32e00094b97da"],
						"mod_magazine": ["5a718b548dc32e000d46d262"],
						"patron_in_weapon": ["58864a4f2459770fcc257101","64b7bbb74b75259c590fa897","5c3df7d588a4501f290594e5","56d59d3ad2720bdb418b4577","5efb0e16aeb21837e749c7ff","5a3c16fe86f77452b62de32a","5efb0da7a29a85116f6ea05f","5c0d56a986f774449d5de529"]
					},
					"5d3eb3b0a4b93615055e84d2": {
						"mod_barrel": ["5d3eb5b6a4b9361eab311902"],
						"mod_reciever": ["5d3eb44aa4b93650d64e4979"],
						"mod_magazine": ["5d3eb5eca4b9363b1f22f8e4"],
						"patron_in_weapon": ["5cc80f53e4a949000e1ea4f8","5cc86832d7f00c000d3a6e6c","5cc86840d7f00c002412c56c","5cc80f67e4a949035e43bbba","5cc80f38e4a949001152b560","5cc80f8fe4a949033b0224a2","5cc80f79e4a949033c7343b2"]
					}
				}
			}
		};
		this.MergeData(scav, fun);	
		
		if (this.debug)
		{
			console.log(JSON.stringify(scav.inventory.equipment.Holster, null, 2)); 
		}
		
		db.globals.config.AimPunchMagnitude = 0.1;
		db.globals.config.RestrictionsInRaid.length = 0;		
		if (this.debug)
		{
			console.log("edited -> database/globals.json");
		}
		
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
			}
			
			if (item._name === "survival_first_aid_rollup_kit")
			{
				item._props.MaxHpResource = 50;
				item._props.medUseTime = 1;
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
		if (this.debug)
		{
			console.log("edited -> database/templates/items.json");
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
	
	editQuests(quests)
	{
		for (const questId in quests)
		{
			const quest = quests[questId];
			
			if (quest.conditions && quest.conditions.AvailableForStart)
			{
				for (const condition of quest.conditions.AvailableForStart)
				{
					if (condition.hasOwnProperty('availableAfter'))
					{
						condition.availableAfter = 0;
					}
				}
			}
		}
		if (this.debug)
		{
			console.log("edited -> database/quests.json");
		}
		
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
			if (bot?.chances?.weaponMods?.mod_sight_rear) 
			{
				for (const key in bot.chances.weaponMods.mod_sight_rear) 
				{
					bot.chances.weaponMods.mod_sight_rear[key] = 100;
				}
			}
			if (bot?.chances?.weaponMods?.mod_sight_front) 
			{
				for (const key in bot.chances.weaponMods.mod_sight_front) 
				{
					bot.chances.weaponMods.mod_sight_front[key] = 100;
				}
			}
		}
		if (this.debug)
		{
			console.log("edited -> database/bots/types/");
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
				});
			}
		}
		if (this.debug)
		{
			console.log("edited -> configs/locations/");
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
		if (this.debug)
		{
			console.log("edited -> configs/locations/");
		}
	}
}
exports.mod = new aiomod();
