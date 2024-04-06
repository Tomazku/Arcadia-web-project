document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour charger les données dynamiquement
    function loadData() {
        fetch('/api/home') // Modifier l'URL pour correspondre à l'API backend
            .then(response => response.json())
            .then(data => {
                // Charger les habitats
                const habitatsSection = document.querySelector('#habitats .habitat');
                data.habitats.forEach(habitat => {
                    habitatsSection.innerHTML += `<div><h3>${habitat.nom}</h3><p>${habitat.description}</p></div>`;
                });

                // Charger les services
                const servicesSection = document.querySelector('#services .service');
                data.services.forEach(service => {
                    servicesSection.innerHTML += `<div><h3>${service.nom}</h3><p>${service.description}</p></div>`;
                });

                // Charger les avis
                const reviewsSection = document.querySelector('#reviews .review');
                data.reviews.forEach(review => {
                    reviewsSection.innerHTML += `<div><p><strong>${review.pseudo}</strong>: ${review.avis}</p></div>`;
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Charger les données lors du chargement de la page
    loadData();
});
