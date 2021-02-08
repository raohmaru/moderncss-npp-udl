const fs = require('fs');
const readline = require('readline');
const filePath = 'mdn-css-list.txt';
const http = require('https');
const os = require('os');

const properties = [];
const descriptions = [];
const rgx = /<meta\s+name\s*=\s*"description"\s+content\s*=\s*"([^>]+)"\s*>/i;
let request;
let index = 0;

function onRequestData(response) {
	let str = '';

	//another chunk of data has been recieved, so append it to `str`
	response.on('data', (chunk) => {
		const matches = str.match(rgx);
		if(matches) {
			request.abort();
			str = matches[1];
		}
	});

	//the whole response has been recieved, so we just print it out here
	response.on('end', () => {
		writeProperty(str);
	});

	response.on('abort', () => {
		writeProperty(str);
	});

	response.on('timeout', () => {
		console.log(properties[index][0], ' timeout!');
		writeProperty('');
	});

	response.on('error', () => {
		console.log(properties[index][0], ' error!');
		writeProperty('');
	});
}

function getProperty() {
	const url = properties[index][1];
	if(url.indexOf('#') === -1) {
		console.log('Requesting ', url, '...');
		request = http.request(url, onRequestData);
		request.end();
	} else {
		writeProperty('');
	}
}

function writeProperty(descr) {
	console.log('Added property ', properties[index][0]);
	descriptions.push([properties[index][0], descr]);
	
	if(++index < properties.length) {
		getProperty();
	} else {
		console.log(descriptions);
		const formatted = descriptions.map((it) => it.join('----'));
		fs.writeFileSync('css-complete.txt', formatted.join(os.EOL), 'utf8');
	}
}

const rl = readline.createInterface({
	input: fs.createReadStream(filePath),
	crlfDelay: Infinity
});

rl
	.on('line', (line) => {
		const parts = line.split('@@@@');
		properties.push([parts[0].trim(), parts[1].trim()]);
	})
	.on('close', () => {
		getProperty();
	});
