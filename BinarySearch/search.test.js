const search = require('./search')

test('tests bineary search', ()=> {
	const t_arr = [1,2,3,4,5,56];
	expect(search(4, t_arr)).toBe(4);
	expect(search(0, t_arr)).toBe(-1);
	expect(search(20, [30,20,-1,-2, 0])).toBe(20);
	expect(search(44, [41, 42,43,44,45])).toBe(44);
})