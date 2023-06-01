/*
Вам нужно написать функцию для создания постов, в ней должен быть вызов `fetch`, с двумя обработчиками then, который:
- делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
- с телом — JSON с двумя свойствами `title` и `body` ;
- со свойством `headers` с единственным заголовком: `'Content-Type': 'application/json; charset=UTF-8'` ;
- добавляет созданный пост в DOM.
*/
let postTitle = document.getElementById("title"); // инпут заголовка поста
let postText = document.getElementById("text"); // инпут содержимого поста
let div = document.querySelector(".blog"); // див-контейнер, в который будут добавляться посты
let btn = document.querySelector("button"); // кнопка "создать пост"

function createPost(title, text) { // функция, которая принимает в качестве параметров заголовок и текст поста из инпутов, отправляет их через POST запрос и добавляет созданный пост в DOM.
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: text,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let postHtml = `
                <div class="blog__item">
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                </div>`;
            div.innerHTML += postHtml;
        })
}

btn.addEventListener("click", () => { // обработчик событий на кнопке "создать пост"
    createPost(postTitle.value, postText.value); // вызов функции создания поста
    postTitle.value = ""; // очистка полей инпутов
    postText.value = "";
})
