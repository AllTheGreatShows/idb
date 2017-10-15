

# AllTheGreatShows

A Podcast website and directory database

# Project Information

## Running Locally

First, clone the repo to your local machine. **It's important that the path to your local copy of the repo does not include any spaces**.

    $ git clone https://GitHub.com/AllTheGreatShows/allthegreatshows.git
    $ cd AllTheGreatShows

Next (assuming you have Python 3), install virtualenv if you don't already have it. (You may have to use `sudo`.)

    $ pip3 install virtualenv

Next, create your virtual environment. Please name your virtual environment `env`, as that name will be ignored by git.

    $ virtualenv env

To enter your virtual environment, run the following command:

    $ source env/bin/activate

You command prompt should now have the prefix `(env)`. Next, install the required Python packages with this command:

    $ pip3 install -r requirements.txt

Once you have the required Python packages, you can now run the project locally! Running is as simple as this command:

    $ python3 run.py

You can quit the server using ^C.

## Testing and Deploying to GCP

First, Install and initialize the Google Cloud SDK (https://cloud.google.com/sdk/docs/)

**Test the application** using the local development server (dev_appserver.py), which is included with the SDK.

From within the root directory where the app's app.yaml configuration file is located, start the local development server with the following command:

    $ dev_appserver.py app.yaml

The local development server is now running and listening for requests on **port 8080**.

**Deploying the Application**

To upload the app, run the following command from within the root directory of your project where the app.yaml file is located:

    $ gcloud app deploy

Optional flags:
Include the --project flag to specify an alternate Cloud Platform Console project ID to what you initialized as the default in the gcloud tool. Example: --project allthegreatshows-180700
Include the -v flag to specify a version ID, otherwise one is generated for you. Example: -v [YOUR_VERSION_ID]

**Viewing Your Application**

Open your browser and view your app at https://allthegreatshows-180700.appspot.com/

Alternatively, you can use

    $ gcloud app browse

## Git Workflow

**1. Create a working branch**

Name branches with your initials followed by a description of the change you're going to make. For example:

> **jt-change-button-color**<br>
> **wk-add-new-dependecy**

**2. Make changes, rebase as you go**

If you're working on a feature or bug fix that will take multiple days, it is recommended to rebase your branch to the parent branch each morning before you continue working. This will keep your branch up-to-date and minimize the amount of conflicts you'll need to resolve before merging the PR.

**3. Create a series of atomic commits**

Ideally, each commit would be a small, self-contained change to the codebase. For example, one commit might add a feature, fix a bug, refactor one 'concept' across the codebase, or move code from one place to another. The codebase should be buildable between each commit. (This policy simplifies merge conflict resolution, code review, git-bisect, etc.)

The first line of a commit message is ideally 50 characters or less, for brevity and good style (longer messages get cut off).

**4. Push and make a Pull Request**

Add any additional info that you would be helpful to code reviewers:

* Link to Trello card
* Developer notes regarding the hows and whys of the change

**5. Wait for two or more code reviews**

Use GitHub's snazzy new "request review" feature to request reviews from specific team members.

You may want to request reviews from team members that are familiar with the ticket, project, or area of code the PR relates to.

**6. Make edits, rebase and squash if necessary and push again**

Rebasing might be necessary if other people have merged since your PR was posted. Please be very careful when resolving conflicts to not remove necessary code. Use 'git blame' to determine the previous author of the conflicted code and confirm with them what the correct change should be.

To make amendments to an existing commit, try `git commit --amend` to amend the most recent commit, or otherwise `git rebase -i`. Recommended reading on that front: [Auto-squashing Git Commits](https://robots.thoughtbot.com/autosquashing-git-commits).

You can also use GitHub's **"Squash and Merge"** button to smoosh your branch together before it gets merged. This makes the commit a single commit (atomic) in master and makes it easy to undo if necessary.

**7. Reach out to your reviewers**

You can view the progress of your code reviews on the PR page.

Not all of your reviewers will have GitHub notifications turned on, and the new GitHub review mechanism doesn't allow for pinging reviewers when you've addressed their concerns. Be proactive and reach out via the Slack channel or to reviewers personally and gently remind them your PR is ready for sign-off. No one wants to slow you down but they may not realize that you've already finished the changes.

**8. Merge your PR, then delete the branch**

Once you've received at least two approvals and have resolved all "changes requested", use GitHub's green merge button to merge the PR. Please use the **"Squash and Merge"** option when merging. After you squash and merge once, this will become your default merge option.

Deleting your branch helps keep the repo clean and removes an ambiguity as to what has been completed or is in-progress.

# Project Specifications

https://www.cs.utexas.edu/users/downing/cs373/projects/IDB1.html

## Description
Create a Web app hosted on Google Cloud Platform (GCP) that emulates IMDB to provide useful information about some topic.

The project must meet several criteria.

must be unique, first come, first served
must have at least two data sources that can be programmatically scraped using a RESTful API
must have at least four models
each model must have at least five attributes
each model must be connected to at least two other models
every instance of each model must have some kind of multimedia (i.e. image or video)
every instance of each model must be rich with different content (e.g. descriptions, feeds, maps, multimedia (above), etc.)
This is a group project with four phases and only one PUBLIC repo will be used across all phases.

The Web app must meet several criteria.

A RESTful API must be documented using Apiary.
The GUI must be implemented using Bootstrap.
The frontend must be implemented using JavaScript and React.
The backend must be implemented using Python and Flask.
The website must use a URL provided by Namecheap.
The group must collaborate using Apiary and it must be integrated with the GitHub repo.
The group must collaborate using Slack and it must be integrated with the GitHub repo.
The group must collaborate using Trello and it must be integrated with the GitHub repo.
For the purposes of grading, do not change the production website between the time that you submit it and the time that it is graded.

## Groups
The groups have been set up on Canvas.

Pick a project leader for the group.

There will be a different project leader for each phase.

A group member can only be project leader once.

## Submission
Below, GitHubID is always that of the owner of the repo.

## Repos
These are the URLs involved:

GitHub public code repo: https://GitHub.com/GitHubID/idb/
UT Box: https://utexas.app.box.com

## Rubrics

### GitHub public code repo: https://GitHub.com/GitHubID/idb/
Points | Assets | Notes
--- | --- | --- 
5 pts	 | GitHub Issue Tracker | Quality of the issues (at least 15 closed issues) 
10 pts | Poker.txt | Quality of the stories; Set up planning poker using http://www.planitpoker.com.; at least 10 user stories; user stories must be described in three sentences or less; estimate them, include assumptions; discuss them; refine the estimates; implement them; track how long each took

### Website
Points | Assets | Notes
--- | --- | --- 
20 pts | https://docs.GitHubID.apiary.io | Quality of the API: Document a RESTful API using Apiary; Log into Apiary with your GitHub credentials and connect Apiary to the repo; Think carefully about the types and format of the requests and responses.
30 pts	| website | Quality of the website; Collect data on three instances of each model from at least two sources via a RESTful API; Identify common attributes of the data and insure that every data item has a value for that attribute.

### UT Box: https://utexas.app.box.com
Points | Assets | Notes
--- | --- | ---
20 pts | Report.pdf | Quality of the technical report: Write a technical report (2,500 words); {motivation, use cases, RESTful API, models, tools, hosting}; The audience comprises other software developers, as opposed to users. Format the report clearly, attractively, and consistently, using good sections, multiple pages, good headers, figures, and grammar. Use https://www.grammarly.com.
