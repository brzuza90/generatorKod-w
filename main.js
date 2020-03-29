const btn = document.querySelector('button');
const chars = 'ABCDEFGH0123456789';
const section = document.querySelector('section');
const codeNumber = 100;
const charsNumber = 10;
const codesGenerator = function () {
    for (let i = 0; i < codeNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);


    }
}
btn.addEventListener('click', codesGenerator);