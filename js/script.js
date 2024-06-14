// ==========veriable part===============
let todo_input = document.querySelector ('.todo_input')
let todo_add_button = document.querySelector ('.todo_add_button')
let todo_list_items = document.querySelector ('.todo_list_items')



//============conditiion part ==================

todo_add_button.addEventListener ('click', ()=>{
    if (todo_input.value == ''){
        alert ('Please Input Your Value!')
    }else {
        let single_item = document.createElement('div')
        let list_input = document.createElement('input')
        let edit = document.createElement('button')
        let delete_button = document.createElement('button')

        todo_list_items.appendChild(single_item)
        single_item.appendChild (list_input)
        single_item.appendChild (edit)
        single_item.appendChild (delete_button)

        single_item.classList.add ('single_item')
        list_input.classList.add ('list_input')
        edit.classList.add ('edit')
        delete_button.classList.add('delete_button')

     

        edit.innerHTML = 'Edit'
        delete_button.innerHTML = '❌Delete'
        list_input.value = todo_input.value

        list_input.setAttribute ('readonly' , 'readonly')
        todo_input.value = ''

        delete_button.addEventListener ('click', ()=>{
            single_item.remove()
        })
        edit.addEventListener ('click', ()=>{


            if( edit.innerHTML== 'Edit'){

                edit.innerHTML = 'Save'
                list_input.removeAttribute ('readonly' , 'readonly')
            }else {
                edit.innerHTML = 'Edit'
                list_input.setAttribute ('readonly' , 'readonly')
            }
        })
    }
})

