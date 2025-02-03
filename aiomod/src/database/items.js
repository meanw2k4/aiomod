function editItems(items) 
{
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
}

module.exports = editItems;