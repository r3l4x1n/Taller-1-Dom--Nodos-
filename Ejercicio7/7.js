//NORMAL
/* let paragraphs = document.querySelectorAll('p.ps');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = 'gold';
            paragraphs[i].style.fontSize = '18px';
        } */

//DESTRUCTURACION
const paragraphs = document.querySelectorAll('p.ps');

for (const paragraph of paragraphs) {
    const { style } = paragraph;  
    style.color = 'gold';
    style.fontSize = '18px';
}