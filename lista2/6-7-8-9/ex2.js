function listar(){
    const body = document.getElementsByTagName('body')[0];
    const list = document.getElementsByTagName('li');
    const tam = document.createElement('p');
    tam.textContent = list.length;
    body.appendChild(tam)
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const p = document.createElement('p')
        p.textContent = element.textContent;
        body.appendChild(p)
    }
}


function outraLista(){
    const list = document.getElementsByTagName('li');
    const body = document.getElementsByTagName('body')[0];

    const ol = document.createElement('ol');

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const li = document.createElement('li')
        li.textContent = element.textContent;
        ol.appendChild(li)
    }

    body.appendChild(ol);

    const newList = document.getElementsByTagName('ol')[0].children
    console.log(newList);

}

function add(){
    const list = document.getElementsByTagName('ul')[0];
    const itemValue =  document.getElementById('novoItem');
    const item = document.createElement('li');
    if(itemValue.value === "") {
        alert('Error !!!');
        return;
    }
    item.textContent = itemValue.value;
    itemValue.value = "";
    list.appendChild(item)


}

function white(){
    const novoItem = document.getElementById('novoItem');
    novoItem.style.backgroundColor = 'white'
}


function blue(){
    const novoItem = document.getElementById('novoItem');
    novoItem.style.backgroundColor = 'aqua'
}