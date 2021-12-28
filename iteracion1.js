window.onload = () => {

    let BtnClick = document.createElement('button')
    let input1 = document.querySelector('.click')
    let input2 = document.querySelector('.focus')
    let input3 = document.querySelector('.value')


    document.body.appendChild(BtnClick)
    BtnClick.innerText = 'Button'
    BtnClick.setAttribute('id', 'btnToClick')


    BtnClick.addEventListener ('click', (e) => {
        console.log(e)  
    })

    input2.addEventListener ('focus', (e) => {
        console.log(e.target.value)
    })

    input3.addEventListener ('input', (e) => {
        console.log(e.target.value)
    })
}