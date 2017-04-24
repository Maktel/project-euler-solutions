#include <iostream>

int main() {
	const unsigned long long digits = 10000000000ULL;

	unsigned long long res = 0;

	for (unsigned int b = 1; b <= 1000; b++) {
		unsigned long long tmp = 1;

		for (unsigned int n = 1; n <= b; n++) {
			(tmp *= b) %= digits;
		}

		res += tmp;
	}

	std::cout << res % digits << std::endl;
}