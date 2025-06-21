fetch('https://fake-coffee-api.vercel.app/api')

    .then((response) => response.json())

    .then((res) => {
        res.forEach((res) => {
            show(res);
        });
    });

function show(res) {
    const tampil = document.getElementById('tampil');

    const figure = document.createElement('figure');

    const img = document.createElement('img');

    img.src = res.image_url;
    const figcaption = document.createElement('figcaption');
    const nama = document.createElement('h3');
    nama.textContent = res.name;
    const desc = document.createElement('p');
    desc.textContent = res.description;
    const price = document.createElement('p');
    price.textContent = res.price;

    tampil.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figcaption.appendChild(nama);
    figcaption.appendChild(desc);
    figcaption.appendChild(price);
};
