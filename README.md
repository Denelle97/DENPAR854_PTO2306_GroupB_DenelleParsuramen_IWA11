# DENPAR854_PTO2306_GroupB_DenelleParsuramen_IWA11

Why did the original code, provided for this project/challenge, not work?

1.Syntax Errors
-example; "1-root" - Variables cannot start with a number!
- (-) invalid character use in variables

2.Incorrect Selectors
-example; "document(order1)" - is not a valid syntax for selecting an element with the ID "order1".
The correct syntax is document.querySelector('#order1') or as shown in my code.

3.Missing Quotations
-Strings were not enclosed in quotes

4.Undefined Variables
-Variables used without being declared or assigned values.

5.Incorrect Comparison in Ternary Operator
-The ternary operator used for updating the status did not compare the `\ status`\ correctly.

6. Misuse of "document" and "querySelector"
-There was confusion in how document and querySelector were used. document is not a method

7.Incorrect Assignment
-Assignment should use "=" without spaces around it

What changes did you need to make to achieve the intended behaviour?

1.Corrected Selectors
2.Corrected Variable Naming
3.Accessing Data Attributes
4.Updating Text Content
5.Ternary Operator for Status

Explained more in my code comments
