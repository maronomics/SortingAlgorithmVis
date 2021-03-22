import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithm.js';


// Speed of animation
const ANIMATION_SPEED_MS = 1;

// Array size for the bars
const ARRAY_SIZE = 310;

// Main colour for bars
const PRIMARY_COLOUR = 'darkgray';

// Secondary colour for bars
const SECONDARY_COLOUR = 'red';

const arrayBars = document.getElementsByClassName('array-bar');
export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < ARRAY_SIZE; i++){
            array.push(randomIntFromInterval(5,730));
        }
        console.log(array);
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
           const arrayBars = document.getElementsByClassName('array-bar');
            const isColourChange = i % 3 !== 2;
            if (isColourChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour; 
                    barTwoStyle.backgroundColor = colour; 
                }, i * ANIMATION_SPEED_MS);
            } else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = '${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort(){

    }

    heapSort(){

    }

    quickSort(){

    }

    testSortingAlgorithms(){
        for(let i = 0; i < 100; i++){
            const array = [];
            const length = randomIntFromInterval(1,1000);
            for (let i = 0; i < length; i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
            const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render (){
        const {array} = this.state; 
        return (
            
            <div className='array-container'>
            {array.map((value, idx) => (
                <div 
                    className = "array-bar"
                    key = {idx}
                    style= {{height: `${value}px`,
                    }}>{value}</div>
            ))}
                <div className = "button-container">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>BubbleSort</button>
                </div>
            </div>


        );
    }
}

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length) {
        return false;
    }
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            return false;
        }
    }
    return true;
}
