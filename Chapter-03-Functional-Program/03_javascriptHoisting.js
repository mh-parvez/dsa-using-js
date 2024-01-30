// জাভাস্ক্রিপ্ট কম্পাইলার কোডকে ছোট ছোট করে ভাগ করে টোকেননাইজ করার পদ্ধতিকে লেক্সিন বলা হয় । এবং টোকেনাইজ করার সময় ডিফাইন করে দেয় যে কার স্কোপ কোথায় হবে, যাকে লেক্সিকাল স্কোপ বলা হয়ে থাকে ।

// এক্সিকিউশন কন্টেক্স এর সময়, ক্রিয়েশনাল-ফেজ এবং এক্সিকিউশন-ফেজ এর সময় ভেরিয়েবল ও ফাংশন ভেল্যু যেভাবে ডিফাইন করে দেয় তাকে হোয়েস্টিং বলা হয় ।

console.log(a); //undefined
var a = "Bangladesh";
/*
for 'var' behind the sence:

step-1: a = undefined
console.log(a); //undefined
step-2: a = "bangladesh"
*/

console.log(b); //e
let b = "India";

/*
for 'let' behind the sence:

step-1: let b;
console.log(b) //reference, error
step-2: b = undefined then, 
step-3: b = "india";
*/

let c; // behind the sence, same line er modde, "c = undefiend" kore thake.
console.log(c); // undefined
