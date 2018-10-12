const fs = require('fs');
const readline = require('readline');
const filePath = 'css-complete.txt';
const os = require('os');

const keywords = [];
const rgxs = [
	'(^In\\s+CSS,\\s*{0}\\s*)',
	'(^The\\s+{0}\\s+(?:CSS)?\\s*pseudo\\-(?:element|class)(?:(?:\\s+\\w+\\s*)|(?:,[^,]+,\\s*)))',
	'(^The\\s+{0}\\s+(?:CSS)?\\s*at\\-rule\\s*)',
	'(^.+?(?:property|function|descriptor|(at\\-rule\\s+\\w+))\\s*)'
];
let index = 0;
let indexDescr = 0;
let xml = '';

function writeFile() {
	fs.writeFileSync('css-api.txt', xml, 'utf8');
	console.log(index, indexDescr);
}

function toRgx(input) {
	return input
		.replace(/\-/g, '\\-')
		.replace(/\(/g, '')
		.replace(/\)/g, '')
		+ '\\(?\\)?'
}

function parseProperty(prop, descr) {
	let newDescr = '';
	index++;
	if(descr) {
		for(let str of rgxs) {
			const rgx = new RegExp(str.replace('{0}', toRgx(prop)));
			const matches = descr.match(rgx);
			if(matches) {
				indexDescr++;
				newDescr = descr.substring(matches[1].length);
				newDescr = newDescr[0].toUpperCase() + newDescr.substring(1);
				break;
			}
		}
		if(!newDescr) {
			newDescr = descr;
		}
	}
	
	prop = prop.replace('::', ':');
	xml += `
<KeyWord name="${prop}" func="yes">
	<Overload retVal="" descr="${newDescr}">
	</Overload>
</KeyWord>`;
}


const rl = readline.createInterface({
	input: fs.createReadStream(filePath),
	crlfDelay: Infinity
});

rl
	.on('line', (line) => {
		parseProperty(...line.split('----'));
	})
	.on('close', () => {
		writeFile();
	});
