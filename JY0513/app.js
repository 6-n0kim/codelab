const btnChars = ['all' , 'bag', 'shoe','watch','camera','headphone'];
const btnsWrapper = document.querySelector('.filter-btns');

btnChars.map((btnChar) =>{
    const modifiedChar = btnChar.charAt(0).toUpperCase() + btnChar.slice(1);
    const buttons = `<button class="filter-btn" data-filter="${btnChar}">${modifiedChar}</button>`

    btnsWrapper.insertAdjacentHTML('beforebegin',buttons)    ;
    console.log(buttons);
})


function getItemElements(){}

getItemElements();