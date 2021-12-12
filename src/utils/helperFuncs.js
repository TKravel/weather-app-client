export const getCurrentHour = () => {
	const date = new Date();
	const currentHour = date.getHours();

	return currentHour;
};

export const convertTo12Hr = (string) => {
	const stringLength = string.length;
	const hour = string.slice(stringLength - 5, stringLength - 3);

	const amOrPm = hour > 12 ? 'PM' : 'AM';
	let time = hour % 12 || 12;
	time += ':00 ' + amOrPm;

	return time;
};

export const getIconPath = (string) => {
	const path = string.slice(20);

	return path;
};
