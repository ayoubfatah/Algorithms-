// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  const ccClown = cc.toString().length;
  const fourNumbers = cc.toString().slice(-4);
  console.log(ccClown - 4);

  return fourNumbers.padStart(ccClown, "#");
}

console.log(maskify(12345678912345));
