<h3>Variables & Scoping</h3>
1. variable i is initially set to 0 so it will print '0'. <br>
2. The variable discountedPrice will print the results of the for loop <br>
3. prices.length is basically the discountedPrice rounded with the Math.round function and will print the result of that. <br>
4. when we input discountPrices([100, 200, 300], .5) we get: <br>
    3<br>
    150<br>
    150<br>
Since the prices array has 3 items, length is 3. discountedPrice totals out to be 150 even from the loop and finalPrice is just 150 rounded which is the same 150.<br>

5. At line 11 we get a reference error since let has its scope inside the for loop unlike var so outside the loop, i doesn't exist.
6. At line 12 we get a reference error since let has its scope inside the for loop unlike var so outside the loop, discountedPrices doesn't exist. We never reach this point anyways
7. We will never reach line 7 since we get a fatal error in line 11 and either way because of the error at line 12, line 13 is dependent on the result from line 12 so it would not go through regardless.
8. when we input discountPrices([100, 200, 300], .5) we get a reference error at line 11 and the program shuts down for the reasons provided my answer to question 5.


9. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get a reference error.
10. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get the same error on    the second loop for trying to reassign the constant discountedPrice variable.
11. We don't reach line 11 in the first place because of the constant assignment type error in line 7. But if this were the only problem, we would get the same error on    the second loop for trying to reassign the constant discountedPrice variable. 
12. We get a type error for trying to assign a constant variable in line 7 and the program shuts down with an error.

<h3>Data Types</h3>
13. Notations <br>
    A. student.name <br>
    B. student['Grad Year] <br>
    C. student.greeting <br>
    D. student['Favorite Teacher'] <br>
    E. student.courseLoad[0]

<h3>Basic Operators & Type Conversion</h3>
14. Arithmetic <br>
    A. `'3' + 2` <br>
        Output: 32 <br>
        Reason: '3' is treated as an ascii value so the ascii value of '3' was added to 2 <br>
    B. `‘3’ - 2` <br>
        Output: 30 <br>
        Reason: the character '3' is converted literally to integer 3 and 2 is subtracted <br>
    C. `3 + null` <br>
        Output: 3 <br>
        Reason: null becomes 0 <br>
    D. `‘3’ + null` <br>
        Output: 3null <br>
        Reason: 3 and null were converted to string and concatenated together <br>
    E. `true + 3` <br>
        Output: 4 <br>
        Reason: true is converted to its boolean value, 1 and added as an integer to 3 <br>
    F. `false + null` <br>
        Output: 4 <br>
        Reason: true is converted to its boolean value, 0 and added as an integer to 3 <br>
    G. `“3” + undefined` <br>
        Output: 3undefined <br>
        Reason: 3 and null were converted to string and concatenated together <br>
    H. `“3” - undefined` <br>
        Output: NaN <br>
        Reason: Javascript got an error trying to read the code <br>

15. Comparison <br>
    A. `‘2’ > 1` <br>
        Output: true <br>
        Reason: 2 was converted from char to int <br>
    B. `‘2’ < ‘12’` <br>
        Output: true <br>
        Reason: Even in character form, 12 > 2 <br>
    C. `2 == ‘2’` <br>
        Output: true <br>
        Reason: '2' is converted to an int <br>
    D. `2 === ‘2’` <br>
        Output: false <br>
        Reason: Not the same type <br>
    E. `true == 2` <br>
        Output: false <br>
        Reason: true is converted to 1 to compare with 2 <br>
    F. `true === Boolean(2)` <br>
        Output: true <br>
        Reason: output of Boolean(2) is 1, which true also is. <br>

16. == simply checks if the values of 2 terms are the same while === checks for type as well as value.

17. Output: How are you?
    Reason: The first statement is false but the second if statement returns true. The last statement doesn't print as it's an else statement.

<h3>Loops</h3>
18. See file: part1-question18

<h3>Functions</h3>
19. 
The function will first go into modeifyArray and then in the for loop and will call back to doSomething and the cycle repeats 3 times for i. Despite the return the function will continue to loop due to callback

20.  See file: part1-question20

21. Output:<br>
    4 <br>
    3 <br>
    2 <br>
