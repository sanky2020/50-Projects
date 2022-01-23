const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //innerheight=722 => (722/5)*4 = 577
    const triggerBottom = window.innerHeight / 5 * 4 

    boxes.forEach(box => {
        const boxTopLength = box.getBoundingClientRect().top;

        //the moment next div's top value becomes less than the triggerpoint set, if block is executed.
        if(boxTopLength < triggerBottom) {
            box.classList.add('show')
        } 
        // and vice-versa
        else {
            box.classList.remove('show')
        }
    })
}