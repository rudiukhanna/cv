class GithubApi {
    constructor(token, username) {
      this.token = token;
      this.username = username;
    }
  
    getRepos() {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${this.token}`);
  
      return fetch(`https://api.github.com/users/${this.username}/repos`, { headers })
        .then(response => response.json())
   
    }
  }
  
  
  const api = new GithubApi( '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' ,'rudiukhanna');
  document.addEventListener('DOMContentLoaded', function () {
    api.getRepos()
      .then(data => {
        const projectsSection = document.getElementById('projects-section');
  
        data.forEach(repo => {
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
            var repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description;
            repoCard.appendChild(repoDescription);
            repoDescription.style.margin = '0';
          }
  
          projectsSection.appendChild(repoCard);
        });
      })
    
  });
  