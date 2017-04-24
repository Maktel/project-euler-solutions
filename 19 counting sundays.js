/* Problem 19

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

'use strict';

const normYear = [false, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [true, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// returns weekday of the next year
// 1 Monday, ..., 7 Sunday
function weekday(yearArr, prevFirst) {
	var num = days(yearArr);

	let m = 0;
	while (m + 7 <= num) {
		m += 7;
	}

	let res = (num - m + prevFirst) % 7 ? (num - m + prevFirst) % 7 : 7;

	return res;
}

// returns which day of the year the first of the specified month is 
function yearday(yearArr, monthNumber) {
	var num = 0;
	for (let i = 1; i < monthNumber; i++) {
		num += yearArr[i];
	}

	return num;
}

// counts Sundays in year specified by array and weekday of first day of the year
function countSundays(yearArr, thisFirst) {
	var cnt = 0;
	for (let i = 1; i < yearArr.length; i++) {
		let wd = (yearday(yearArr, i) + thisFirst) % 7;
		if (wd === 0) {
			cnt++;
		}
	}

	return cnt;
}

// returns days in a year array
function days(yearArr) {
	var num = 0;
	for (let i = 1; i < yearArr.length; i++) {
		num += yearArr[i];
	}

	return num;
}


function main() {
	var sum = 0;
	var wd = weekday(normYear, 1); // first of thisYear
	
	for (let i = 1901; i <= 2000; i++) {
		if ((i % 400 === 0) || ((i % 4 === 0) && !(i % 100 === 0))) {
			sum += countSundays(leapYear, wd);
			wd = weekday(leapYear, wd);
		} else {
			sum += countSundays(normYear, wd);
			wd = weekday(normYear, wd);
		}
	}

	return sum;
}

console.log(main());