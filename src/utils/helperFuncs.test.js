import { convertTo12Hr, getCurrentHour, getIconPath } from './helperFuncs';

test('gets correct current hour', () => {
	const d = new Date();
	const hr = d.getHours();

	expect(getCurrentHour()).toEqual(hr);
});

test('converts 24 to 12 hour time format', () => {
	const midnight = convertTo12Hr('00:00');
	const thirteenHundredHours = convertTo12Hr('13:00');
	const twentyFourHundredHours = convertTo12Hr('24:00');

	expect(midnight).toEqual('12 AM');
	expect(thirteenHundredHours).toEqual('1 PM');
	expect(twentyFourHundredHours).toEqual('12 PM');
});

test('trim icon paths', () => {
	expect(
		getIconPath('//cdn.weatherapi.com/weather/64x64/day/116.png')
	).toEqual('/weather/64x64/day/116.png');
});
