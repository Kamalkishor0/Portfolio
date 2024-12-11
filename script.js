document.addEventListener('DOMContentLoaded', () => {
    // Select common elements
    const element = document.querySelector('.text');
    const profile = document.querySelector('.profile');
    const home = document.getElementById('home'); // Home button
    const resume = document.getElementById('resume'); // Resume button
    const project = document.getElementById('projects'); // Projects button

    // Helper function to fetch and update content
    const loadContent = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                element.innerHTML = htmlContent; // Update content
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Event listener for Home button
    if (home) {
        home.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            profile.style.display = ''; // Ensure profile is visible
            loadContent('index.html'); // Load home content
        });
    }

    // Event listener for Resume button
    if (resume) {
        resume.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            profile.style.display = 'none'; // Hide profile
            loadContent('resume.html'); // Load resume content
        });
    }

    // Event listener for Projects button
    if (project) {
        project.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            profile.style.display = 'none'; // Hide profile
            loadContent('project.html'); // Load project content
        });
    }
});
