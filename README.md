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

## React.lazy()

## static contextType()

## Static getDerivedStateFromError()

## Deprecations