export default {
	solo: true,
	async test({ assert, component, target }) {
		const select = target.querySelector('select');
		const [option1, option2] = select.childNodes;

		let selections = Array.from(select.selectedOptions);
		assert.equal(selections.length, 2);
		assert.ok(selections.includes(option1));
		assert.ok(selections.includes(option2));

		component.required = true;
		selections = Array.from(select.selectedOptions);
		assert.equal(selections.length, 2, 'required');
		assert.ok(selections.includes(option1));
		assert.ok(selections.includes(option2));
		assert.ok(select.required);

		component.spread = { id: 'id' };
		selections = Array.from(select.selectedOptions);
		assert.equal(selections.length, 2, 'spread');
		assert.ok(selections.includes(option1));
		assert.ok(selections.includes(option2));
	}
};
