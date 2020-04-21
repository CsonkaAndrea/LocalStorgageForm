{
    const data = {
        value: []
    }

    const DOMStrings = {
        buttonLabel: '.button',
        inputValue: '#tweet',
        inputOut: '#tweet-list'
    }

    console.log('megint fuck');


    const inputIn = () => {
        let input = document.querySelector(DOMStrings.inputValue).value
        console.log(input);
        inputArray(input)
    }

    let input = document.querySelector(DOMStrings.buttonLabel)
    input.addEventListener('click', inputIn)

    const inputArray = (input) => {
        console.log(data);
        data.value.push(input)
        console.log(data);
        clearInputBox()
    }

    const clearInputBox = () => {
        document.querySelector(DOMStrings.inputValue).value = ''
        inputOut(data, DOMStrings)
    }

    const inputOut = (data, dom) => {
        console.log(data.value);
        document.querySelector(dom.inputOut).innerHTML = data.value
    }
}








