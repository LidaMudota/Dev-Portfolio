document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const url = project.dataset.url;
            if (url) {
                window.location.href = url;
            }
        });
    });
});