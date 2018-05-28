**NOTE: This library has been deprecated in favor of [unction/selectByValue](https://github.com/unctionjs/selectByValue)**

# @unction/selectValues

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType => FunctorType => FunctorType

Given a predicate and a functor it returns a functor of the same type containing values that returned true for the predicate.

``` javascript
selectValues(isOdd)([1, 2, 3, 4]) // [1, 3]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/selectValues.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/selectValues.svg?maxAge=2592000&style=flat-square
