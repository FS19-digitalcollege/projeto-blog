function listarPosts(){

    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => {
        let main = document.querySelector('main');
        posts.forEach(post => {
            main.innerHTML += `
            <article>
                <div class="imagem">
                    <img src="${post.imagem}" alt="${post.titulo}">
                </div>
                <div class="conteudo">
                    <box-icon name='heart'></box-icon>
                    <h1>${post.titulo}</h1>
                    <h6>${post.categoria}</h6>
                    <p>${post.texto}</p>
                    <a href="artigo.html?id=${post.id}">leia mais</a>
                </div>
            </article>
            `;
        });
    })

} listarPosts();