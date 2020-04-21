{
    const data = {
        value: ''
    }

    const DOMStrings = {
        buttonLabel: '.button',
        inputValue: '#tweet',
        inputOut: '.tweet-list',
    }

    const control = () => {
        inputIn()
        clearInputBox()
        inputOut(data, DOMStrings)
    }

    document.querySelector(DOMStrings.buttonLabel).addEventListener('click', control)

    document.addEventListener('keypress', (ev) => {
        if (ev.keyCode === 13 || ev.which === 13) {
            control()
        }
    })

    const inputIn = () =>
        data.value = document.querySelector(DOMStrings.inputValue).value

    const clearInputBox = () =>
        document.querySelector(DOMStrings.inputValue).value = ''

    const inputOut = (data, dom) => {
        let html = document.querySelector(dom.inputOut);
        html.insertAdjacentHTML('beforebegin', '<div class="tweet-list"></div>')
        document.querySelector(dom.inputOut).innerHTML = data.value
    }
}








