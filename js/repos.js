document.addEventListener('DOMContentLoaded', function () {
    
    fetch(`https://api.github.com/users/rudiukhanna/repos`)
        .then(response => response.json())
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
})