import React from 'react'

// Speed of animation
const ANIMATION_SPEED_MS = 1

// Array size for the bars
const ARRAY_SIZE = 100

// Main colour for bars
const PRIMARY_COLOUR = 'black'

// Secondary colour for bars
const SECONDARY_COLOUR = 'red'

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray(){
        const array = []
        for(let i = 0; i < ARRAY_SIZE; i++){
            array.push(randomIntFromInterval(5,730))
        }
        this.setState({array})
    }

    mergeSort(){
        
    }

}