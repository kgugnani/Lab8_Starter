# Lab 8 - Starter
Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. <br>

I would choose to run the tests within a GitHub Action so everytime some code is pushed to the repository the tests are run. I believe running the tests manually is a step that is easy to forget and could cause a lot of problems if not documented properly, while running the tests automatically would ensure that the tests are run everytime the code is pushed to the repository. <br>

Would you use an end to end test to check if a function is returning the correct output?

No, I would use a unit test to check if a function is returning the correct output as end to end testing is more related to making sure your front-end works and simulating a user, not just checking outputs of functions. <br>

Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes, I would use a unit test to make sure this feature works properly. I would use a unit test as it is important to indivudally test each function/feature and this one can easily be checked. 

Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test as this feature can easily be checked with a test and it is good to make sure all of your features work individually and alongside the other features. 