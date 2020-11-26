<script>
  export let value = ['Hello', 'World'];
	export let spread = {};
	export let required;
</script>

<select multiple {required} {value} {...spread}>
  <option>Hello</option>
  <option>World</option>
</select>
