const flag = ['0x33', '0x39', '0x63', '0x65']

function hexToAscii(flag) {

  let asciiString = '';

  for (let i = 0; i < flag.length; i++) {

    let hexCharCode = flag[i];

    asciiString += String.fromCharCode(hexCharCode);

  }

  return asciiString;

}

console.log(hexToAscii(flag))