
const cabecalho = document.querySelector('header');



const post_textarea = document.querySelector('textarea');
const post_tweetar = document.querySelector('button');
const post_feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(ev) {
    ev.preventDefault();

    const tweetTextarea = post_textarea.value;
    criarTweet(tweetTextarea)
}

post_tweetar.addEventListener('click', pegarTweet);



function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();

    //OBJETO
    const tweet = {
        nome: "Tomatinho",
        foto: "./assets/img/ProfilePic.png",
        usuario: " @Tomatinho",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`
    }
    
  
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} = tweet
    
    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2    = document.createElement("h2");
    h2.innerText = nome
   
    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p     = document.createElement("p");
    p.innerText = texto
    
    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)
    
    post_feed.appendChild(li)
    post_textarea.value = ""

    
}   


