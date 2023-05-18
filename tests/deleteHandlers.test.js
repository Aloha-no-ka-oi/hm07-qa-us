// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyCreateKit = {
	"name": "aaaaaaaaaaaaaaaa",
	"cardId": 1
}

test('Status code should be 201', async () => {
	let kitId;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreateKit)
		});
		const postResponseBody = await response.json();
		kitId = postResponseBody.id;
	} catch (error) {
		console.error(error);
	}
	let actualStatus;
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
		const postResponseBody = await response.json();
		actualBody = postResponseBody["ok"];
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 200 
	expect(actualStatus).toBe(200);
	expect(actualBody).toBe(true);

});



