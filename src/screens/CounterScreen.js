import React, { useReducer } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const COUNTER_VALUE = 1

const reducer = (state, action) => {
    //state === {counter: 0}
    //action === {type: 'increase_counter' || 'decrease_counter', payload: 1 || -1
    switch (action.type) {
        case 'increase_counter':
            return state.counter + action.payload > 10 ? state : {...state, counter: state.counter + action.payload }

        case 'decrease_counter':
            return state.counter - action.payload < 0 ? state : {...state, counter: state.counter - action.payload }

        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    return <View>
        <Button title="Increase" onPress={() => {
            dispatch({ type: 'increase_counter', payload: COUNTER_VALUE })
        }}/>
        <Button title="Decrease" onPress={() => {
            dispatch({ type: 'decrease_counter', payload: COUNTER_VALUE })
        }}/>
        <Text>Current Count: { state.counter }</Text>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen
