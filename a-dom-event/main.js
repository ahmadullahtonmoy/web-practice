function handleOnClick() {
    const handlerStatus = document.getElementById('click-handler');
    handlerStatus.innerText = 'Handled By Function Attached On Click Attribute.';
    handlerStatus.style.color = 'lightcoral';
}

document.getElementById('event-listener').addEventListener('click' , function(){
    const handlerStatus = document.getElementById('click-handler');
    handlerStatus.innerText = 'Text Updated By Add Event Listener Button.';
    handlerStatus.style.color = 'skyblue';
});