const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button'); 





openButton.addEventListener('click', () => {
    const content = document.querySelector('.on-mobile');
    content.style.display = 'block';
    
});

closeButton.addEventListener('click', () => {
    const content = document.querySelector('.on-mobile');
    content.style.display = 'none';
});


previousButton.addEventListener('click', () => {
    var lists = [];
    lists = document.querySelector('container_content').childNodes;
    console.log(lists);
});

nextButton.addEventListener('click', () => {
    
});