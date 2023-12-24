# Write a program in Python that iterates over numbers 1 to 40.
# Print out a number for every number except multiples of three, in which case output Fizz.
# For multiples of five, output Buzz, and for multiples of 3 and 5 output FizzBuzz.

# Solution:
my_list = list(range(1, 41))
for x in my_list:
    if x % 3 == 0 and x % 5 == 0:
        print("FizzBuzz")
    elif x % 3 == 0 and x % 5 != 0:
        print("Fizz")
    elif x % 3 != 0 and x % 5 == 0:
        print("Buzz")
    else:
        print(x)

# Explanation:
# The range function returns a list of numbers from 1 to 40.
# The modulo operator (%) returns the remainder of a division.
# The modulo operator is useful for finding multiples of numbers.
# For example, if x % 3 == 0, then x is a multiple of 3.
# finally the block if, elif, else statements check our conditions and print the appropriate output.


