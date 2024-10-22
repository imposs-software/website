export async function load({ cookies }) {
	return {
		darkmode: cookies.get('darkmode') ? true : false,
	};
}
