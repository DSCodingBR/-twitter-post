window.addEventListener('load', () => {
    const form = document.querySelector("#new-tweet-form");
    const input = document.querySelector("#new-tweet-input");
    const list_el = document.querySelector("#posts");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const post = input.value;

        const post_el = document.createElement ("div");
        post_el.classList.add("post");

        const post__body_el = document.createElement ("div");
        post__body_el.classList.add("post__body");
        
        post_el.appendChild(post__body_el);

        const post_input_el = document.createElement ("input");
        post_input_el.classList.add("text");
        post_input_el.type = "text";
        post_input_el.value = post;
    

        post__body_el.appendChild(post_input_el);

        list_el.appendChild(post_el);
    })

})