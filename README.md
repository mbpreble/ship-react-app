# ship-react-app

This is a CLI tool that can be composed with `create-react-app` to create a GitHub workflow which will seamlessly
build and publish all changes to a GitHub pages site (e.g. `https://${USER_NAME}.github.io/${REPO_NAME}`).

##Getting started

It's easiest to run this tool via `npx` (install via `npm install -g npx`). 

`npx ship-react-app` will ask a series of questions 
(location of repository, repository name, branch which triggers publish, location of app package, GitHub username).

Inside the target repo, `.github/workflows/github-pages.yaml` should now be a correctly configured GitHub action
for automatically building and publishing the target app to GitHub Pages. 
The `package.json` of the target app will be modified to allow correct resolution of static assets 
when deployed to GitHub pages.

GitHub pages will then need to be enabled for the root of the `gh-pages` branch of your repository for this to work.


##TODOs
Major TODO here is to replace the README content with the React app inside this repo - this project has been used to
configure its automatic publish to GitHub Pages, we should be using this for documentation. 
Currently, this app is just the output of `create-react-app` with no modifications.

We also can add actions/instructions for other hosting methods, for example, static website hosting via AWS S3.
