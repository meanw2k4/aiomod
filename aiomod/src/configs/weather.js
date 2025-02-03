function editBaseWeather(weather)
{
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
}

module.exports = editBaseWeather;