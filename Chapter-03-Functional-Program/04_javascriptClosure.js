// এক্সিকিউশন কন্টেক্স এর সময়, কোন ফাংশন যদি তার গ্লোবাল ফাংশন এর কোন ভেরিয়েবল তার ভিতর ইউজ করে, তখন সে তার রেফারেন্স ক্লোজার নামক অব্জেক্ট এর কাছে রাখে । যদি ভেরিয়েবল ইনার ফাংশন এর ভেতর থাকে তবেই ক্লোজার ক্রিয়েট হবে । মানে ফাংশন এর ক্লোজার-অব্জেক্ট প্রয়োজন অনুসারে রেফারেন্স রাখে ।

function sum() {
  var num = 10;
  return function () {
    return num + 10; //closure
  };
}
var result = sum();
console.dir(result());

function sum() {
  var num = 10;
  return function () {
    return 10 + 10; // no closure
  };
}
var result = sum();
console.dir(result());
