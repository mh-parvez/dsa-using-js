
const getTwoNumber = (num1, num2, addNumber, onerror) => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        addNumber(num1, num2)
    }else{
        onerror()
    }
}

getTwoNumber(12, "7", (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log('invaild number')
})


const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')

setTimeout(()=> {
    heading1.textContent = 'Love 1'
    heading1.style.color = 'blue'
    setTimeout(()=> {
        heading2.textContent = 'Love 2'
        heading2.style.color = 'green'
        setTimeout(()=> {
            heading3.textContent = 'Love 3'
            heading3.style.color = 'red'
            setTimeout(()=> {
                heading4.textContent = 'Love 4'
                heading4.style.color = 'yellow'
                setTimeout(()=> {
                    heading5.textContent = 'Love 5'
                    heading5.style.color = 'violet'
                    setTimeout(()=> {
                        heading6.textContent = 'Love 6'
                        heading6.style.color = 'gray'
                        setTimeout(()=> {
                            heading7.textContent = 'Love 7'
                            heading7.style.color = 'black'
                        }, 1000)  
                    }, 1000)  
                }, 1000)  
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)


function changeText(element, text, color, time, success, failure){
    setTimeout(() => {
        if(element) {
            element.textContent = text
            element.style.color = color
            if(success){
                success()
            }
        }else{
            if(failure){
                failure()
            }
        }
    }, time)
}

changeText(heading1, 'heading1', 'black', 8000, () => {
    changeText(heading2, 'heading2', 'black', 1000, () => {
        changeText(heading3, 'heading2', 'black', 1000, () => {
            changeText(heading4, 'heading3', 'black', 1000, () => {
                changeText(heading5, 'heading4', 'black', 1000, () => {
                    changeText(heading6, 'heading5', 'black', 1000, () => {
                        changeText(heading7, 'heading7', 'black', 1000, () => {

                        }, () => {console.log('something is wrong')})
                    }, () => {console.log('something is wrong')})
                }, () => {console.log('something is wrong')})
            }, () => {console.log('something is wrong')})
        }, () => {console.log('something is wrong')})
    }, () => {console.log('something is wrong')})
}, () => {console.log('something is wrong')})
