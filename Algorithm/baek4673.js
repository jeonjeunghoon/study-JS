function selfNumber(num) {
	let res = num;
	while (num !== 0) {
		res += num % 10;
		num = parseInt(num / 10);
	}
	return res;
}

const numArr = new Array(10001);
let idx = 1;
for (let i = 1; i <= 10000; i++) {
	idx = selfNumber(i);
	if (idx < 10000)
		numArr[idx] = idx;
}

for (let i = 1; i < 10000; i++) {
	if (numArr[i] === undefined)
		console.log(i);
}