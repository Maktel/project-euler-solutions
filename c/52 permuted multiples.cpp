/*

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

*/
#include <iostream>

bool isPermutable(long long int num);
int splitIntoDigits(long long int num, int digits[]);


int main() {
	long long int number = 0;
	bool found = false;
	while (!found) {
		found = isPermutable(++number);
	}

	std::cout << number << std::endl;

	return 0;
}


bool isPermutable(long long int num) {
	int digits[10] = { 0 };
	int length = splitIntoDigits(num, digits);

	for (int i = 2; i <= 6; ++i) {
		long long int multiple = i * num;
		int multiple_digits[10] = { 0 };
		int multiple_length = splitIntoDigits(multiple, multiple_digits);

		if (multiple_length != length) return false;

		for (int i = 0; i < 10; i++) {
			if (digits[i] != multiple_digits[i]) return false;
		}
	}

	return true;
}


/**
* Stores digit occurrences in passed array and returns length of number
* @param {long long int} num -- number
* @param {int []} digits -- array to store digit occurrences
* @return {int} length -- length of number in base 10
*/
int splitIntoDigits(long long int num, int digits[]) {
	int length = 0;
	do {
		++digits[num % 10];
		num /= 10;
		++length;
	} while (num > 0);

	return length;
}
