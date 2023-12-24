# How do you test for nulls in an array on python?

my_list = [1, None, 2, 3, None, 4, 5, None, 6, 7, None, 8, 9, None, 10]

nulls = [x for x in my_list if x is None]

if nulls:
    print(f"{len(nulls)} nulls found")
else:
    print("No nulls found")

# Explanation:

# nulls = [x for x in list if x is None]
# This is a list comprehension. It is a way to create a list from another list.
# It is a shorthand for a for loop that appends to a list.
# The list comprehension above is equivalent to the following for loop:
# nulls = []
# for x in list:
#     if x is None:
#         nulls.append(x)
# The list comprehension is more concise and readable.