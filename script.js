// For home button
document.addEventListener('DOMContentLoaded', (event) => {
let element = document.querySelector('.text');
let home = document.getElementById('home');

home.addEventListener('click', (event) =>{
      event.preventDefault();
      fetch('index.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(htmlContent => {
          // Update the inner HTML of the element with the loaded content
          element.innerHTML = htmlContent;
      })
      .catch(error => console.error('Error loading content:', error));
   
})
})


// For resume button
document.addEventListener('DOMContentLoaded', (event) => {
let element2 = document.querySelector('.text');
let resume = document.getElementById('resume');

resume.addEventListener('click', (event) =>{
    document.querySelector('.profile').style.display = 'none';
      event.preventDefault();
      fetch('resume.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(htmlContent => {
          // Update the inner HTML of the element with the loaded content
          element2.innerHTML = htmlContent;
      })
      .catch(error => console.error('Error loading content:', error));
   
    })
})

      let element3 = document.querySelector('.text');
let project = document.getElementById('projects');

project.addEventListener('click', (event) =>{
    document.querySelector('.profile').style.display = 'none';
      event.preventDefault();
      fetch('project.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(htmlContent => {
          // Update the inner HTML of the element with the loaded content
          element3.innerHTML = htmlContent;
      })
      .catch(error => console.error('Error loading content:', error));
   
})
Add the following JavaScript to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    let profileElement = document.getElementById('profile');

    profileElement.addEventListener('mousemove', (event) => {
        let rect = profileElement.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
    });
});

Add the following JavaScript to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    let animatedLink = document.querySelector('.animated-link');

    animatedLink.addEventListener('mousemove', (event) => {
        let rect = animatedLink.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            animatedLink.classList.add('hovered');
        } else {
            animatedLink.classList.remove('hovered');
        }
    });
});

