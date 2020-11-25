const showFormBtn = document.getElementById('popBtn');
const closeFormBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');

showFormBtn.addEventListener('click', ()=>{
    const div = document.getElementById('popUp');
    div.style.display = 'block';
    div.style.paddingBottom = '5rem';
})

closeFormBtn.addEventListener('click', ()=>{
    const div = document.getElementById('popUp');
    div.style.display = 'none';
})

// submitBtn.addEventListener('click', ()=>{
//     const container = document.getElementById('container');
//     const book = document.createElement('div');
//     book.className = 'bookContainer';
//     container.appendChild(book);
// })

submitBtn.addEventListener('click', ()=>{
    const container = document.getElementById('container');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const statusInput = document.getElementById('status');
    const deleteBtn = document.getElementById('deleteBtn');
    const statusBtn = document.getElementById('changeStatus');
    const bookContainer = document.getElementById('cc');


    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const status = document.createElement('h3');
    const clone = document.createElement('div');
    const deleteBtnClone = deleteBtn.cloneNode(true);
    const statusBtnClone = statusBtn.cloneNode(true);
    
    
    
    title.textContent = titleInput.value;
    author.textContent = authorInput.value;
    pages.textContent = pagesInput.value +' pgs';
    status.textContent = statusInput.value;
    clone.className = 'bookContainer';  
    clone.style.display = 'block';
    clone.style.flexDirection ='row';

    

    clone.appendChild(title);
    clone.appendChild(author);
    clone.appendChild(pages);
    clone.appendChild(status);
    clone.appendChild(statusBtnClone);
    clone.appendChild(deleteBtnClone);
    bookContainer.appendChild(clone);
    


    if(status.textContent == 'Read'){
        clone.style.border = '1px solid green';
    } else{
        clone.style.border = '1px solid red';
    }

    deleteBtnClone.addEventListener('click', ()=>{
        clone.remove();
    })

    statusBtnClone.addEventListener('click', ()=>{
        if(status.textContent == 'Read'){
            status.textContent = 'Not read yet';
            clone.style.border = '1px solid red';
        } else{
            status.textContent = 'Read';
            clone.style.border = '1px solid green';
        }
    })
    
})