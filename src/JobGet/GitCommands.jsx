//1.git commands to take clone from any repo if you have access to it
//1. git init 
//2. git clone -b main "repo link"
//-b main: This option specifies the branch to be cloned.


//2.create a new repository on the command line
//1. git init 
//2. git add ReadMe.md
//3. git commit -m "existing code"
//4. git branch -M main
//5. git remote add origin "link url"
//6. git push -u origin main


//push code to an existing repository from the command line
//1. git remote add origin "link url"
//2. git branch -M main
//3. git push -u origin main

//pull the changes
//git pull origin main

//I have modified the code and added changes. How do I commit my changes?
//git add .
//git commit -m "commit msg"

//5. What if I want only some of my files added & pushed instead of all changes?
//Add single file git add <file-path>
//Add multiple files git add <file1-path> <file2-path></file2-path>

//6.git status
//When you run git status, Git will show you: "The branch you're currently on".

//7.I have modified/formatted some code while going through it. Now I want the code to be back to the state as it was.
//To reset all the changes git reset --hard
//To reset a single file git checkout HEAD -- <file-path>

//8.I have committed my changes. How can I undo my change?
//git reset --soft HEAD~1 (undo with changes preserved)
//git reset --hard HEAD~1 (undo with changes removed)

//9.I have made some changes to the branch. Also, I wanted to pull the new changes. But it is not working.
//The command git pull may not work if the changes are done by someone else to the same files which you have also modified.
//Stash the changes git stash save <name of the change> -u
//Pull the changes now git pull
//Retrieve the changes git stash apply <n>

//if git pull does not work if both work on the same  file
//git pull not work
//git stach save "my chages x" -u
//git pull
//git stash apply 0

//10.After applying the stash, I am getting a lot of conflicts in the code.
//resolve it manually
//Accept current change , Accept incoming change ,Accept both changes ,Compare Changes.

//11.I have made some code changes. But I want to commit to a new separate branch.
//Create a new branch git switch -c <my-branch-name>
//Stage all the changes git add *
//Commit the changes git commit -m "<some commit message>"

//To switch between the branches use the command "git checkout <original-branch-name>"


