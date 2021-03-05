

let ru = [`ё`, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
let en= [ "`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',`q`, `w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p`,`[`,`]`,`a`,`s`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`;`,`'`,`z`,`x`,`c`,`v`,`b`,`n`,`m`,`,`,`.`,`/`,]
let enShift= [ "~", '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',`Q`, `W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`{`,`}`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`:`,`"`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`,`<`,`>`,`?`,]
let ruShift=[`Ё`,`!`,`"`,`№`,`;`,`%`,`:`,`?`,`*`,`(`, `)`,'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',']
let capslock = ['caps']
let shift = ['shift']
let backspace = ['backspace']
let space = ["space"]
let lang= ["lang"]

let keyboard = document.querySelector(`.container`)
let funckeys = document.querySelector(`.func`)

let textArea = document.querySelector(`.space`)





function fillButton(arr) {

    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'filling', onclick: forSpace } }))

}
function caps(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'upper', onclick: activeCaps } }))



}
function fillShift(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'changer',onclick:isShift , ondblclick:activeCaps ,} }))
}
function fillBackspace(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'deleter', onclick: back } }))

}
function fillSpace(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: ' ', className: 'spacer', onclick: forSpace } }))

}
function fillLang(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'language', onclick:testLang} }))

}



function createButtons(arr, place) {
    let domElem = arr.map(item => {
        let element = document.createElement(item.tag)
        Object.entries(item.properties || {}).forEach(([key, value]) => {
            element[key] = value;
        })
        keyboard.appendChild(element)
        
    })

}
function createFunctions(arr, place) {
    let domElem = arr.map(item => {
        let element = document.createElement(item.tag)
        Object.entries(item.properties || {}).forEach(([key, value]) => {
            element[key] = value;
        })
        funckeys.appendChild(element)
    })

}
createButtons(fillButton(en), document.body)
createFunctions(fillShift(shift), document.body)
createFunctions(caps(capslock), document.body)
createFunctions(fillBackspace(backspace), document.body)
createFunctions(fillSpace(space), document.body)
createFunctions(fillLang(lang), document.body)


let check= new Boolean(false)
let buttonShift=document.querySelector(`.changer`)
let checkLang=new Boolean(false)
let buttonLang=document.querySelector(`.language`)


function testLang(isShift){
    if(checkLang===!false){
        checkLang=false
        buttonLang.value='lang'
        keyboard.innerHTML=""
        createButtons(fillButton(en), document.body)

}
else{
    checkLang=true
    buttonLang.value='язык'
    keyboard.innerHTML=""
    createButtons(fillButton(ru), document.body)
}
return checkLang


}

function isShift(testLang){

    if(check===!false){
        check=Boolean(false)
        buttonShift.classList.remove(`shifton`)
        if(checkLang===true){
        keyboard.innerHTML=""
        createButtons(fillButton(ru), document.body)
    }
    else{
        keyboard.innerHTML=""
        createButtons(fillButton(en), document.body)
    }
    }
    else{
        check=true
        buttonShift.classList.add(`shifton`)
       
        if(checkLang===true){
            keyboard.innerHTML=""
            createButtons(fillButton(ruShift), document.body)
        }
        else{
        keyboard.innerHTML=""
        createButtons(fillButton(enShift), document.body)
        }
    }
    return check
    
}





function activeCaps() {

    if (document.querySelector(`.upper`).classList.contains(`capson`)) {
        document.querySelector(`.upper`).classList.remove(`capson`)
    }
    else {
        document.querySelector(`.upper`).classList.add(`capson`)
        .value.toUpperCase()
        
    }

}

function forSpace(element) {
    if (document.querySelector(`.upper`).classList.contains(`capson`))
        textArea.value += element.target.value.toUpperCase()
    else {
        textArea.value += element.target.value
    }
    focus()
}


function back() {
    focus()
    textArea.value = textArea.value.substring(0, textArea.selectionStart - 1)+
    textArea.value.substring(textArea.selectionEnd, textArea.value.length)
  
}






