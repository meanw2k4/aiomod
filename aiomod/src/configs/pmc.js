function editBasePMC(pmc)
{
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
}

module.exports = editBasePMC;