# Whats New in 16.6? 

A talk by [@patrick-geisler] and [@caryyon] given at the [MKE-Reactjs-Meetup](https://www.meetup.com/ReactJS-Wisconsin/).

## Main Topics

* `React.memo()`
* `React.lazy()`
* `static contextType()`
* `static getDerivedStateFromError()`
* A few Deprecations


## React.memo()

`React.memo()` is a HOC(Higher Order Component) that can be wrapped around any functional(stateless) component to create 'memorized' components. What this means in practice is, the wrapped component will only rerender when it's props change. This is much like the class(stateful) lifecycle method `shouldComponentUpdate()`

This allows a component that renders the same given the same props to be stored in memory. This allows the component to skip being rerendered and will give very nice performance boosts. It will simply reuse the last rendered result of the component.

This props compare that memo performs is a shallow one, and `memo()` can be passed a second param that can do deeper evaluations.

```javascript 
// import React and descructure memo as well
import React, { memo } from 'react'

// Stateless Funcitonal Component
const Comp = props => {
    /* render using props */
}

// Deeper Props Evaluation Function
const areEqual = (prevProps, nextProps) => {
    /* return a boolean result if they pass or not */
}

// wrap our Stateless Component in memo
export default memo(Comp, areEqual)

```

## React.lazy()

## static contextType()

## Static getDerivedStateFromError()

## Deprecations