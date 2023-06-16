let imgContainer =  $('.zoomIn');

imgContainer.toArray().forEach(e => {
    console.log(e)
    e.addEventListener('click', (event) => {
        event.preventDefault();
        openImage(e);
    })
});
function openImage(item){
    item.classList.toggle('fs-con');
    console.log(item);
    document.body.classList.toggle('disable-bd');

    let images = $('.fs-img');
    images.toArray().forEach(e => {
        if(e.classList.contains('position-absolute')){
            e.classList.toggle('position-absolute');
        }
    })
}