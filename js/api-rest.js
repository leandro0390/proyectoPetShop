



function obtenerDatosDeAPI() {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    fetch('https://fakestoreapi.com/products', options)
    .then(response => response.json())
    .then(response => {
        const cards = document.querySelectorAll('.cards');
        cards.forEach(cards => {
           const span = document.createElement('span');
           span.setAttribute('class', 'products-description');
           span.innerHTML = `${response[1].title}`;
           cards.insertBefore(span, cards.children[1]);
        });
    }
        )
    .catch(err => console.error('err'));
}

obtenerDatosDeAPI();