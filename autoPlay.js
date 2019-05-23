window.onload=()=>{
    autoPlay();
};

function autoPlay() {
    var imgListBox = document.getElementById("slide-show-list");
    // debugger;
    var lastNode = imgListBox.lastElementChild.cloneNode(true);
    var firstNode = imgListBox.firstElementChild.cloneNode(true);
    imgListBox.insertBefore(lastNode,imgListBox.childNodes[0]);
    imgListBox.appendChild(firstNode);
    var imgList = document.getElementsByClassName("img1");
    imgList = Array.prototype.slice.call(imgList);
    imgListBox.style.width = `${imgList.length * 1024}px`;
    imgListBox.style.transform = 'translateX(-1024px)';
    var len = 0;
    setInterval(() =>{
        len++;
        imgListBox.style.transform = `translateX(-${len*1024}px)`;
        imgListBox.style.transition = 'transform 2s ease';
        console.log('imgListBox.style:',imgListBox.style.width)
        imgListBox.addEventListener('transitionend', function(){
            if(len >= 4){
                len = 1;
                imgListBox.style.transition = 'none';
                imgListBox.style.transform = `translateX(-${len*1024}px)`;   
            }
        }) 
    }, 3000);
};