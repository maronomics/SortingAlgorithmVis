/* eslint-disable no-const-assign */
import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithm.js';

// Main colour for bars
const PRIMARY_COLOUR = "grey";

// Secondary colour for bars
const SECONDARY_COLOUR = "darkgreen";

// Global variables for setTimeouts
// Speed of animation
const ANIMATION_SPEED_MS = 2;
// eslint-disable-next-line no-unused-vars
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

    genArray(){
        for(let gens = randomIntFromInterval(2,5); gens < 6; gens++){
            this.resetArray();
        }
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 120; i++){
            array.push(randomIntFromInterval(5,550));
        }
        console.log(array);
        this.setState({array});
        for(let j = 0; j < arrayBars.length;j++) {
            arrayBars[j].style.backgroundColor = "grey";
        }
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIndex, barTwoIndex] = animations[i];
           // const barOneStyle = arrayBars[barOneIdx].style;
           // const barTwoStyle = arrayBars[barTwoIdx].style;
           const barOneStyle = arrayBars[barOneIndex]?arrayBars[barOneIndex].style: {};
           const barTwoStyle = arrayBars[barTwoIndex]?arrayBars[barTwoIndex].style:{};
            const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIndex, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIndex]?arrayBars[barOneIndex].style: {};
              barOneStyle.height = `${newHeight * 0.99}%`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
        console.log(this.state.array);
        console.log(arrayBars);
      }
    bubbleSort(){

    }

    heapSort(){

    }

    quickSort(){

    }

    render (){
        const {array} = this.state; 
        return (
            <div className = 'mainBody'>
                <div className= 'header'>Sorting Visualiser</div>
            <div className='array-container'>
            {array.map((value, idx) => (
                <div 
                    className = 'array-bar'
                    key = {idx}
                    style= {{backgroundColor: 'grey', height: `${value * 0.99}%`,
                    }}></div>
            ))}
                <div className = "button-container">
                    <button class="buttons" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button class="buttons" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button class="buttons" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button class="buttons" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button class="buttons" onClick={() => this.bubbleSort()}>BubbleSort</button>
                </div>
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
