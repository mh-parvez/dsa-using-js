/*
এক্সিকিউশন কন্টেক্স এর দুইটা ধাপ - 
১। লোডীং ফেজ
২। এক্সিউশন ফেজ

এক্সিকিউশন কন্টেক্স এর সময় কল স্টেক এর ভিতরে ফাংশন জমা হতে থাকে । যখনই একটা ফাংশন কল হয় তার জন্য আলাদা একটা এক্সিকিউশন কন্টেক্স ক্রিয়েট হয় । তার মাঝেও দুইটা ধাপ সম্পন্ন হয় ।

◼ লোডীং ফেজ এর সময় globally - 
১। গ্লোবাল অবজেক্ট ক্রিয়েট করে ।
২। this নামে অবজেক্ট ক্রিয়েট করে, যা window object কে indicate করে ।
৩। function and variable এর জন্য আলাদা আলাদা ভাবে জায়গা বানায় ।
৪। vairable এর value, undefiend করে রাখে ।
৫। scope chain ক্রিয়েট করে

◼ লোডীং ফেজ এর সময় function - 
১। funciton Argument নামে array like অবজেক্ট create করে ।
২। this নামে অবজেক্ট ক্রিয়েট করে, যা window object কে indicate করে ।
৩। function and variable এর জন্য আলাদা আলাদা ভাবে জায়গা বানায় ।
৪। vairable এর value, undefiend করে রাখে ।
৫। scope chain ক্রিয়েট করে

Note: var এ লোডীং ফেজ এর সময় undefined assign হবে । কিন্তু let এর ক্ষেত্রে assign হয় না, শুধু চিনে রাখে । পরে এক্সিউশন ফেজ এ value assgin হয় ।

let name = "kabir"
১। লোডীং-ফেজ: name;
২। এক্সিউশন-ফেজ: name = "kabir"

var age = 23
১। লোডীং-ফেজ: age = undefined
২। এক্সিউশন-ফেজ: age = 23
*/

function getTopic(book) {
  var topic = "javaScript";
}
// console.log(topic)
getTopic();
// console.log(topic)
