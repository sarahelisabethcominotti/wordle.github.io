function checkArrays(array1, array2, index) {
    for (let i = index; i < index+5; i++) {
        const cellContent = document.getElementById(`cell${i+1}`)
        // const keyContent = document.getElementById(`${x}`)
        // console.log(keyContent)
        cellContent.classList.remove("active-cell-border")
        if (array1[i-index] === array2[i-index]) {
            // console.log(array1[i-index], array2[i-index])
            // console.log(cell)
            cellContent.classList.add("correct-cell")
            // keyContent.classList.add("correct-cell")
            } else {
            if (array1.includes(array2[i-index])) {
                // console.log(array1.includes(array2[i-index]))
                // console.log(array1[i-index], array2[i-index])
                cellContent.classList.add("correct-letter")
                // keyContent.classList.add("correct-letter")
            } else {
                cellContent.classList.add("wrong-cell")
                // keyContent.classList.add("wrong-cell")
            }
        }
    } 
    for (let i = index; i < index + 5; i++) {
        let keyContent = document.getElementById(`${array2[i-index]}`)
        console.log(array2[i-index])
        //cellContent.classList.remove("active-cell-border")
        if (array1[i-index] === array2[i-index]) {
            // console.log(array1[i-index], array2[i-index])
            // console.log(cell)
            keyContent.classList.add("correct-cell")
            } else {
            if (array1.includes(array2[i-index])) {
                // console.log(array1.includes(array2[i-index]))
                // console.log(array1[i-index], array2[i-index])
                // cellContent.classList.add("correct-letter")
                keyContent.classList.add("correct-letter")
            } else {
                // cellContent.classList.add("wrong-cell")
                keyContent.classList.add("wrong-cell")
            }
        }
    } 
}

export {checkArrays}