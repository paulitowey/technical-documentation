let phoneNumber = "828-443-8294";
for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}
