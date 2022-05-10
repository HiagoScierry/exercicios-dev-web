function listar(){
    const list = document.getElementsByTagName('li');
    document.write(`<p>${list.length}</p>`)
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log(element.textContent);
        document.write(`<p>${element.textContent}</p>`)
    }
}

listar()