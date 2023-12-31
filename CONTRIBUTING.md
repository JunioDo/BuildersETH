# Contributing to Web3CryptoDev

[![Discord](https://img.shields.io/discord/1006939146109075467?label=Web3CryptoDev%20Discord&style=social)](https://discord.gg/PqVhBKxSKb)

[![Twitter Follow](https://img.shields.io/twitter/follow/Tesla809)](https://twitter.com/tesla809)

⌛ Web3CryptoDev Handle Pending

## 🎯 Project Goal

**Our goal:** Create a running series of guides covering Solidity and all things Web3 development aimed at developers.

As a result of this, we will connect devs to devs and build a community around building, innovation and mutual help.

### 🤝 Townhall Meetings

We hold weekly townhall meetings on Mondays, from 12:00pm EST to 12:30pm EST.

The typical agenda is:

1. Discuss project roadmap
2. Discuss project deadlines
3. Discuss action items for current goals
4. Time for community feedback and questions
5. Talk about future course content

If you have any questions or need any additional information, please discuss in the [Web3cryptodev Discord](https://discord.gg/PqVhBKxSKb).

## ✨ How to Contribute

### Check out Content Roadmap

Check out our [current content roadmap](https://github.com/users/tesla809/projects/1) to see what is coming soon or needs work.

### Keeping it simple

Since the project is new, we are keeping the process to contribute simple.

### Reporting Bugs

🔑 Open the issue before submitting the pull request.

1. Open an issue.
2. Describe the problem in detail
3. If you like, submit a pull request

### Suggesting Features / Enhancements

🔑 Open the issue before submitting the pull request.

1. Open an issue describing what feature you'd like.
2. Describe the problem in detail
3. If you like, submit a pull request

### Picking up an Issue

1. Comment in the issue your intent to work on it.
2. Mention it in the discord.
3. This lets other not perform double work
4. Work on the issue
5. Submit the pull request
6. Don't forget to pull the latest branch prior to starting work on the issue.

### Pushing a Pull Request

1. run `npm run build` when your alternations are done.
2. The production build comes from the `./build` folder.
3. Push the `./build` along with your commits

The production version on Vercel reads from the build folder. Additionally, Docusaurus uses the `/build` as its master build.

To [exclude a folder while checking](https://stackoverflow.com/questions/41701677/how-to-exclude-unwanted-folders-content-to-be-shown-when-i-execute-git-status) `git status` run:  
`git status . -- ':!build'`

### 🏗️ Setting up your repo

This workflow allows a growing community to contribute code in a way that scales. Many open source projects operate with a similar model.

Workflow overview:

1. Fork the project to your profile.
2. Git clone from the forked project
3. Add the remote path
4. Double check the origin path

### 🍴 Fork the project to your profile

[Fork the repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and create a copy of the repository under your github account. You will submit changes to the forked repo on your github account.

> 💡 Cloning directly from the main project repository.\*\* This will point your local repo's [origin](https://www.git-tower.com/learn/git/glossary/origin) to the main repo.
>
> This means you will not have write access.
>
> Doing so will eventually cause an error when attempting to push your changes.

### 👯 Clone the project to your profile

[Clone the forked repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your computer using the **Clone or download** button and the address from github.

e.g. `git clone https://github.com/YOUR_USERNAME/BuildersETH.git`

Change the working directory to your cloned project.  
 Mac/Linux: `cd ./BuildersETH`  
 Windows: `cd .\BuildersETH`

### 🕹️ Add a remote

[Add a remote](https://help.github.com/en/github/using-git/adding-a-remote) link to our project repository in order to track changes.  
e.g. `git remote add upstream https://github.com/tesla809/BuildersETH.git`

> 💡 If you prefer to [use SSH on Github](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), remember to update the links above to the SSH versions!

### ⏰ Staying Up to Date

> 💡 Remember: Always update your local repository first.
>
> Make sure you have the most recent changes from the upstream repository (the main production project).

🏋️ To update your local repository, follow the steps below.

1. Check what branch you are currently working on.
   `git status`
2. Check out the master branch of your local repository.
   `git checkout master`
3. Fetch changes from the upstream master repository (ours).
   `git fetch upstream master`
4. Rebase the changes from the upstream master respository into your local repository.
   `git rebase upstream/master`

## 💄 Style Guides

### Git Branches

For now, you can make edits in main or a branch, then submit a pull request. We are moving pretty fast to create content in th beta phase.

### Creating Git Commit Messages

**Keep git commit messages short, simple, and informative**, ideally under 50 characters.

**Write commit messages in the imperative**, using "fix bug" and not "fixed bug" or "fixes bug". This convention matches up with commit messages generated by commands like `git merge` and `git revert`.

`git commit -m "update contributing.md with new sections"`

### Front End Style Guide

📝 When styling, see the Docusaurus theme guide.

🛑 Avoid making style edits along side documentation or blog post edits. Keep those seperate.

🛑 Style edits require an issue to be opened which describes the edit.

## Getting Support

**We are here to help!** If you have questions or run into issues, please reach out to us on the [Web3cryptodev Discord](https://discord.gg/PqVhBKxSKb).

_If you made it to the end of this document, thank you, and we look forward to working with you and seeing your submissions!_

🙏 Thank you so much!

❤️ Let's make learning web3 fun!
