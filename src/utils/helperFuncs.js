export const currentHour = () => {
	const date = new Date();
	const currentHour = date.getHours();

	return currentHour;
};
