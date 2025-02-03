function editBaseRagfair(ragfair)
{
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
}

module.exports = editBaseRagfair;