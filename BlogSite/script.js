/**
 * Dark Mode Toggle Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
  
    // Check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      darkModeIcon.classList.remove('fa-moon');
      darkModeIcon.classList.add('fa-sun');
    }
  
    // Function to toggle dark mode
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
  
      // Update icon and save theme to localStorage
      if (document.documentElement.classList.contains('dark')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    }
  
    // Add event listener to the dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);
  });
  