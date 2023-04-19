class GitHubAPI {
    constructor(token, login) {
      this.token = token;
      this.login = login;
    }
  
    async getRepos() {
      const response = await fetch(`https://api.github.com/users/${this.login}/repos`, {
        headers: {
          Authorization: `token ${this.token}`,
        },
      });
      const repos = await response.json(); 
      return repos;
    }
  }
  
  const githubAPI = new GitHubAPI('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', 'rudiukhanna');
  githubAPI.getRepos().then((repos) => {
    const projectsSection = document.getElementById('projects-section');

    repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        repoCard.style.border = '1px solid black';
        repoCard.style.padding = '10px';
        repoCard.style.marginBottom = '15px';

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.full_name;
        repoCard.appendChild(repoLink);
        repoLink.style.textDecoration = 'underline';

        if (repo.description) {
            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description;
            repoCard.appendChild(repoDescription);
            repoDescription.style.margin = '0';
        }

        projectsSection.appendChild(repoCard);
    });
});
  
  