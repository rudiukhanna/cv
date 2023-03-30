const photo = document.getElementById("photo");

let isEnlarged = false;

photo.addEventListener("click", function() {
  if (!isEnlarged) {
    photo.classList.toggle("photo-enlarge");
    isEnlarged = true;
  } else {
    photo.classList.toggle("photo-reduce");
    isEnlarged = false;
  }
});


const sectionTitles = document.querySelectorAll('.title');

for (let i = 0; i < sectionTitles.length; i++) {
  const title = sectionTitles[i];
  const letter = title.textContent[0]; 
  title.innerHTML = `<span class="title-letter">${letter}</span>${title.innerHTML}`;
  
  document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyS' || event.code === 'KeyІ') {
        const section = document.querySelector('#s');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyH' || event.code === 'KeyР') {
        const section = document.querySelector('#h');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyW' || event.code === 'KeyЦ') {
        const section = document.querySelector('#w');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyE' || event.code === 'KeyУ') {
        const section = document.querySelector('#e');
        section.scrollIntoView({behavior: 'smooth'});
    }
  });
}


