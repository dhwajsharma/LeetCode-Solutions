var intToRoman = function(num) {
	const config = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C',  500: 'D', 1000: 'M' };
	const getRoman = (num, limit) => {
		if (config.hasOwnProperty(num)) return config[num];
		const check = num > limit * 5;
		num = check ? num - limit * 5 : num;
		return (check ? config[limit * 5] : '') + config[limit].repeat(num / limit);
	};
	num = `${num}`;

	return [...num].reduce((roman, str, index) => {
		const digit = num.length - 1 - index;
		const limit = 10 ** digit;
		const number = str * limit;

		roman += ['4', '9'].includes(str) 
			? config[limit] + config[number + limit]
			: getRoman(number, limit);

		return roman;
	}, '');
};
