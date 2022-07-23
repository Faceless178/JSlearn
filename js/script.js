
const todoList = document.querySelector('.todo-list')
const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')
const todoItem = document.querySelectorAll('li')

todoItem.forEach(function(e) {
    e.addEventListener('click', function(){
        this.remove()
    })
})

todoForm.addEventListener('submit', formHandler)


function formHandler(event) {
    event.preventDefault();
    // Получаем название задачи
    const targetText = todoInput.value;
    // Создаем тег li 
    const newTarget = document.createElement('li')
    newTarget.innerText = targetText
    // Добавляем на страницу
    todoList.append(newTarget)
    // Очищаем поле ввода
    todoInput.value = '';

    newTarget.addEventListener('click',function(){
            this.remove()
        })
}


todoItem.forEach(function(e) {
    e.addEventListener('click', function(){
        this.remove()
    })
})



