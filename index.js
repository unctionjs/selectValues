import fresh from "@unction/fresh"
import attach from "@unction/attach"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function selectValues (predicate: PredicateFunctionType): UnaryFunctionType {
  return function selectValuesPredicate (functor: FunctorType): FunctorType {
    if (functor.filter) {
      return functor.filter(predicate)
    }

    return reduceWithValueKey(
      (accumulated: FunctorType): UnaryFunctionType =>
        (value: mixed): UnaryFunctionType =>
          (key: KeyType): FunctorType => {
            if (predicate(value)) {
              return attach(key)(value)(accumulated)
            }

            return accumulated
          }
    )(
      fresh(functor)
    )(
      functor
    )
  }
}
