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
                    <a href="artigo.html?id=${post.id}" onClick="incrementarAcessos(${post.id}, ${post.acessos})">leia mais</a>
                </div>
            </article>
            `;
        });
    })

} listarPosts();

function listarMaisAcessados(){
    fetch("http://localhost:3000/posts")
    .then(resposta => resposta.json())
    .then(listaDePosts => {
        let ul = document.querySelector('aside ul');
        listaDePosts.sort((a, b) => b.acessos - a.acessos).forEach(post => {
            ul.innerHTML += `
                <li>
                    <a href="">
                        <img src="${post.imagem}" alt="${post.titulo}">
                        <h4>${post.titulo}</h4>
                    </a>
                </li>
            `;
        });
    })
} listarMaisAcessados();

function incrementarAcessos(id, acessos){
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            acessos: acessos + 1
        })
    })
}

function buscar(){
    window.location.href = `pesquisa.html?pesquisa=${pesquisa.value}`;
}