Variables & Scoping
1. variable i is initially set to 0 so it will print '0'.
2. The variable discountedPrice will print the results of the for loop
3. prices.length is basically the discountedPrice rounded with the Math.round function and will print the result of that.
4. when we input discountPrices([100, 200, 300], .5) we get
    3\n
    150\n
    150\n

    Since the prices array has 3 items, length is 3. discountedPrice totals out to be 150 even from the loop and finalPrice is just 150 rounded which is the same 150.\n


5. At line 11 we get a reference error since let has its scope inside the for loop unlike var so outside the loop, i doesn't exist.
6. At line 12 we get a reference error since let has its scope inside the for loop unlike var so outside the loop, discountedPrices doesn't exist. We never reach this point anyways
7. We will never reach line 7 since we get a fatal error in line 11 and either way because of the error at line 12, line 13 is dependent on the result from line 12 so it would not go through regardless.
8. when we input discountPrices([100, 200, 300], .5) we get a reference error at line 11 and the program shuts down for the reasons provided my answer to question 5.


9. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get a reference error.
10. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get the same error on    the second loop for trying to reassign the constant discountedPrice variable.
11. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get the same error on    the second loop for trying to reassign the constant discountedPrice variable. 
12. We get a type error for trying to assign a constant variable in line 7 and the program shuts down with an error.

Data Types
13. Notations
    - A. student.name
    - B. student['Grad Year]
    - C. student.greeting
    - D. student['Favorite Teacher']
    - E. student.courseLoad[0]

Basic Operators & Type Conversion
14. Arithmetic
    A. '3' + 2
        Output: 32
        Reason: '3' is treated as an ascii value so the ascii value of '3' was added to 2
    B. ‘3’ - 2
        Output: 30
        Reason: the character '3' is converted literally to integer 3 and 2 is subtracted
    C. 3 + null
        Output: 3
        Reason: null becomes 0
    D. ‘3’ + null
        Output: 3null
        Reason: 3 and null were converted to string and concatenated together
    E. true + 3
        Output: 4
        Reason: true is converted to its boolean value, 1 and added as an integer to 3

    F. false + null
        Output: 4
        Reason: true is converted to its boolean value, 0 and added as an integer to 3
    G. “3” + undefined
        Output: 3undefined
        Reason: 3 and null were converted to string and concatenated together
    H. “3” - undefined
        Output: NaN
        Reason: Javascript got an error trying to read the code

15. Comparison
    A. ‘2’ > 1
        Output: true
        Reason: 2 was converted from char to int
    B. ‘2’ < ‘12’
        Output: true
        Reason: Even in character form, 12 > 2
    C. 2 == ‘2’
        Output: true
        Reason: '2' is converted to an int
    D. 2 === ‘2’
        Output: false
        Reason: Not the same type
    E. true == 2
        Output: false
        Reason: true is converted to 1 to compare with 2
    F. true === Boolean(2)
        Output: true
        Reason: output of Boolean(2) is 1, which true also is.

16. == simply checks if the values of 2 terms are the same while === checks for type as well as value.

17. Output: How are you?
    Reason: The first statement is false but the second if statement returns true. The last statement doesn't print as it's an else statement.

Loops
18. See file: part1-question18

Functions
19. 
The function will first go into modeifyArray and then in the for loop and will call back to doSomething and the cycle repeats 3 times for i. Despite the return the function will continue to loop due to callback

20.  See file: part1-question20

21. Output:
    4
    3
    2
