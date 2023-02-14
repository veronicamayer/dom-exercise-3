let counter = 0;
const div = document.querySelector('div');

document.querySelector('button').addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = counter;
    (counter === 0) || (counter % 10 === 0) ? (p.classList.add('rechteck'), p.classList.add('weiss')) : p.classList.add('rechteck');
    div.appendChild(p);  
    counter++;
});