# Problem: Write a function that determines if a given number is a prime number.
# A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
# For example, the number 5 is prime because it can only be evenly divided by 1 and 5, but 6 is not prime because it can be divided evenly by 1, 2, 3, and 6.

def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False
    return True

# Test the function
number = 11
print(f"Number {number} is a prime number: {is_prime(number)}")


# Efficiency:
# checking up to the square root of number.
# This is because a larger factor of the number must be multiplied by a smaller factor
# and the smaller factor cannot be larger than the square root of number.