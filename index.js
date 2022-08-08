// Your code here
let dodger = document.getElementById('dodger')
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
    
}
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
}
dodger.addEventListener('keydown',function(e){
    if (e.key ==='ArrowLeft'){
        moveDodgerLeft()
    }
});
dodger.addEventListener('keydown', function(e){
    if (e.key ==='ArrowRight'){
        moveDodgerRight()
    }
})