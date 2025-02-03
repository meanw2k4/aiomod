function editQuests(quests)
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
}

module.exports = editQuests;