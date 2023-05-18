// eslint-disable-next-line no-undef
const config = require('../config');

const requestBodyCreateKit = {
	"productsList": [
        {
            "name": "Aaa",
            "cardId": 1
        }
    ]
}
const requestBodyUpdateKit = {
	"productsList": [
	  {
		"id": 0,
		"quantity": 0
	  }
	],
	"name": "Bbb"
  }

test('let status code be 200', async () => {
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
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyUpdateKit)
		});
		actualStatus = response.status;
		const postResponseBody = await response.json();
		actualBody = postResponseBody["ok"];
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(200);
	expect(actualBody).toBe(true);
});
