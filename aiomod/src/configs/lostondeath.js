function editBaseLostOnDeath(lostondeath)
{
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
}

module.exports = editBaseLostOnDeath;