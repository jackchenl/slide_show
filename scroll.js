let baseDistance = 1024;
const requestAnimationFrame =
      window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
const cancelAnimationFrame =
    window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame

window.onload=()=>{
    let imgListBox = document.getElementById("slide-show-list");
    // debugger;
    let lastNode = imgListBox.lastElementChild.cloneNode(true);
    let firstNode = imgListBox.firstElementChild.cloneNode(true);
    imgListBox.insertBefore(lastNode,imgListBox.childNodes[0]);
    imgListBox.appendChild(firstNode);
    let imgList = document.getElementsByClassName("img1");
    imgList = Array.prototype.slice.call(imgList);
    imgListBox.style.width = `${imgList.length * baseDistance}px`;
    imgListBox.style.marginLeft = `-${baseDistance}px`;
    let requestId = null;
    let offset = 1024;
    let autoPlay = () => {
        let imgListBox = document.getElementById("slide-show-list");
        let speed = 4;
        offset += speed;
        imgListBox.style.marginLeft = `-${offset}px`;
        if(offset >= baseDistance*4){
            offset = 1024;
        }
        requestId = requestAnimationFrame(autoPlay);
    };
    requestId = requestAnimationFrame(autoPlay);
    imgListBox.onmouseenter = () => {
        cancelAnimationFrame(requestId)
    }
    imgListBox.onmouseleave = () => {
        requestId = requestAnimationFrame(autoPlay);
    }
};


