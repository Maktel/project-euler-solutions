/*

If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

How many Lychrel numbers are there below ten-thousand?

*/

#include <iostream>
#include <string>
#include <vector>

typedef unsigned long long int ull;

bool producePalindrome(ull n, int iteration);
bool isPalindrome(ull number);
ull getReverse(ull n);

// we should fit in long long uint -- 10 000 * 2^50 = 1.12 * 10^19 < 1.8 * 10^19
int main() {
	std::vector<ull> lychrels;

	for (int i = 1; i < 10000; ++i) {
		if (!producePalindrome(i, 1)) lychrels.push_back(i);
	}

	std::cout << lychrels.size() << std::endl;

	return 0;
}


bool producePalindrome(ull n, int iteration) {
	if (iteration >= 50) return false;

	ull sum = n + getReverse(n);
	if (isPalindrome(sum)) return true;

	return producePalindrome(sum, iteration + 1);
}


bool isPalindrome(ull number) {
	std::string s = std::to_string(number);

	int len = s.length();
	for (int i = 0; i < len; i++) {
		if (s[i] != s[len - 1 - i]) return false;
	}

	return true;
}


ull getReverse(ull n) {
	std::vector<int> digits;

	
	do {
		digits.push_back(n % 10);
		n /= 10;
	} while (n > 0);

	/*
	std::string reverse_string = "";
	for (std::vector<int>::const_iterator it = digits.begin(); it < digits.end(); it++) {
		reverse_string += std::to_string(digits[i]);
	}

	return std::stoull(reverse_string, NULL, 10);
	*/

	ull reversed = 0, ten = 1;
	for (int i = digits.size() - 1; i >= 0; i--, ten *= 10) {
		reversed += ten * digits[i];
	}

	return reversed;
}