function editGlobals(db)
{
	db.globals.config.AimPunchMagnitude = 0.1;
	db.globals.config.RestrictionsInRaid.length = 0;		
}

module.exports = editGlobals;