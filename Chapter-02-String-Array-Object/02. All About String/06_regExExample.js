function sendOTP(phone) {
  const cheaking = /(\+88-)?01[3-9]\d{8}/g;

  if (cheaking.test(phone)) {
    let otp = Math.floor(Math.random() * 999999);
    let matchNumber = phone.match(cheaking);
    console.log(`\nPhone: ${matchNumber}\nSend OTP: ${otp}`);
  } else {
    console.log("Invaild Number");
  }
}

const phone = `+88-01923456788`;
sendOTP(phone);

function regexCheaker(colorCode) {
  let regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

  const index = colorCode.search(regex);
  const condition = regex.test(colorCode);
  const matchs = colorCode.match(regex);
  const replaced = colorCode.replace(regex, "solid");

  console.log(
    "\nfind index no :",
    index,
    "\ncondition :",
    condition,
    "\nreplace :",
    replaced
  );
  console.log(matchs);
}

let colorCode = `#2f3B7e`;
regexCheaker(colorCode);
