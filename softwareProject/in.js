const food=[
    {name: pasta},
    {name: burgar},
    {name: humus},
    {name: akeel},
    {name: shawerma},
    {name: flafel},
    {name: food},
    {name: kofta},
    {name: salad

}]

const searchinput = document.getElementById('search');
function setList(group){
    clearList();
    for(const food of group){
        const item= document.createElement('li');
        item.classList.add('LIST-GROUP')
        const text = document.createTextNode(food.name);
        item.appendChild(text);
        ListeningStateChangedEvent.appendChild(item);
        
    }
}
searchinput.addEventListener('input', (event)=>{
    const value= event.target.value;
})