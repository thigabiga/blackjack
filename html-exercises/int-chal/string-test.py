# Assume two strings str1, str2, where str2 contains the same set of characters in str1 with one additional character.
# Find the single different character between the two strings.

str1 = "abcdefjhijklmnop"
str2 = "abcdfjhijklmnop" # removed the "e"

for i in str1:
    if i not in str2:
        print(i)