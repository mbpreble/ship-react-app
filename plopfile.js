module.exports = function (plop) {
    plop.setPlopfilePath(__dirname);
    plop.setGenerator(
        'github-pages',
        {
            description: 'configure a GitHub action to publish to GitHub Pages',
            prompts: [{
                type: 'input',
                name: 'userName',
                message: 'Your GitHub username',
            },
            {
                type: 'input',
                name: 'repoName',
                message: 'The name of your GitHub repository',
            },
            {
                type: 'input',
                name: 'repositoryDir',
                message: 'Relative path to the target repository',
                default: '.'
            },
            {
                type: 'input',
                name: 'siteDir',
                message: 'Relative path from repository root to static site package directory',
                default: '.'
            },
            {
                type: 'input',
                name: 'branch',
                message: 'Branch which should trigger publish',
                default: 'main'
            }],
            actions: (data) => [{
                type: 'add',
                path: '{{repositoryDir}}/.github/workflows/github-pages.yaml',
                templateFile: 'templates/github-pages.yaml.hbs'
            },
            {
                type: 'modify',
                path: '{{siteDir}}/package.json',
                transform: (content) => {
                    const parsedContent = JSON.parse(content)
                    parsedContent.homepage = `https://${data.userName}.github.io/${data.repoName}`;
                    return JSON.stringify(parsedContent, null, 2);
                }
            }]
        })
}
