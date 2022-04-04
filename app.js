function generateCat(){
    const image = document.createElement('img');
    const div = document.getElementById('flex-cat-gen');
    // add your cat gif API link here 
    image.src = './download.jpg';
    div.appendChild(image)
}