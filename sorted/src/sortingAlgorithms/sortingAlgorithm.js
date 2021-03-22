export function getMergeSortAnimations (array){
    const animations = []
    if (array.length <= 1) return array 
    const auxiliaryArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ){
        if (startIdx === endIdx) return 
        const middleIdx = Math.floor((startIdx + endIdx) / 2) 
        mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
        mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
        doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) 

}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ){
        let k = startIdx
        let i = startIdx
        let j = middleIdx + 1
        while (i <= middleIdx && j <= endIdx){
            // values being compared
            // push once to change their colour
            animations.push([i,j])
            // push them a second time to revert colours
            animations.push([i.j])
            if(auxiliaryArray[i] <= auxiliaryArray[j]){
                // overwrite the value at index k in original array
                // with value at index i in the auxiliary array
                animations.push([k, auxiliaryArray[i]])
                mainArray[k++] = auxiliaryArray[i++]

            } else {
                // overwrite the value at index k in the original array 
                // with the value at index j in the auxiliary array
                animations.push([k, auxiliaryArray[j]])
                mainArray[k++] = auxiliaryArray[j++]
            }
        }

        while (i <= middleIdx){
            // values being compared
            // push once to change their colour
            animations.push([i,i])
            // push a second time to revert colours
            animations.push([i,i])
            // overwrite the values at index k in the original array
            // with the value st index i in the auxiliary array
            animations.push([k, auxiliaryArray[i]])
            mainArray[k++] = auxiliaryArray[i++]
        }

        while (j <= endIdx){
            // values being compared
            // push once to change their colour
            animations.push([j,j])
            // push a second time to revert colours
            animations.push([j,j])
            // overwrite the values at index k in the original array
            // with the value st index i in the auxiliary array
            animations.push([k, auxiliaryArray[j]])
            mainArray[k++] = auxiliaryArray[j++]

        }
    }