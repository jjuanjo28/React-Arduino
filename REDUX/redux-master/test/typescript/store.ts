import {
  Store,
  createStore,
  Reducer,
  Action,
  StoreEnhancer,
  Unsubscribe,
  Observer
} from 'redux'
import 'symbol-observable'

type BrandedString = string & { _brand: 'type' }
const brandedString = 'a string' as BrandedString

type State = {
  a: 'a'
  b: {
    c: 'c'
    d: 'd'
  }
  e: BrandedString
}

interface DerivedAction extends Action {
  type: 'a'
  b: 'b'
}

const reducer: Reducer<State> = (
  state: State | undefined = {
    a: 'a',
    b: {
      c: 'c',
      d: 'd'
    },
    e: brandedString
  },
  action: Action
): State => {
  return state
}

const reducerWithAction: Reducer<State, DerivedAction> = (
  state: State | undefined = {
    a: 'a',
    b: {
      c: 'c',
      d: 'd'
    },
    e: brandedString
  },
  action: DerivedAction
): State => {
  return state
}

const funcWithStore = (store: Store<State, DerivedAction>) => {}

/* createStore */

const store: Store<State> = createStore(reducer)

// ensure that an array-based state works
const arrayReducer = (state: any[] = []) => state || []
const storeWithArrayState: Store<any[]> = createStore(arrayReducer)
const storeWithPreloadedState: Store<State> = createStore(reducer, {
  a: 'a',
  b: { c: 'c', d: 'd' },
  e: brandedString
})
// @ts-expect-error
const storeWithBadPreloadedState: Store<State> = createStore(reducer, {
  b: { c: 'c' },
  e: brandedString
})

const storeWithActionReducer = createStore(reducerWithAction)
const storeWithActionReducerAndPreloadedState = createStore(reducerWithAction, {
  a: 'a',
  b: { c: 'c', d: 'd' },
  e: brandedString
})
funcWithStore(storeWithActionReducer)
funcWithStore(storeWithActionReducerAndPreloadedState)

// @ts-expect-error
const storeWithActionReducerAndBadPreloadedState = createStore(
  reducerWithAction,
  {
    b: { c: 'c' },
    e: brandedString
  }
)

const enhancer: StoreEnhancer = next => next

const storeWithSpecificEnhancer: Store<State> = createStore(reducer, enhancer)

const storeWithPreloadedStateAndEnhancer: Store<State> = createStore(
  reducer,
  {
    a: 'a',
    b: { c: 'c', d: 'd' },
    e: brandedString
  },
  enhancer
)

const storeWithBadPreloadedStateAndEnhancer: Store<State> = createStore(
  reducer,
  {
    // @ts-expect-error
    b: { c: 'c' }
  },
  enhancer
)

/* dispatch */

store.dispatch({
  type: 'ADD_TODO',
  text: 'test'
})

/* getState */

const state: State = store.getState()

/* subscribe / unsubscribe */

const unsubscribe: Unsubscribe = store.subscribe(() => {
  console.log('Current state:', store.getState())
})

unsubscribe()

/* replaceReducer */

const newReducer: Reducer<State> = reducer

store.replaceReducer(newReducer)

/* observable */

let observable = store[Symbol.observable]()
observable = observable[Symbol.observable]()
const observer: Observer<State> = {
  next(state: State) {
    console.log('current state:', state)
  }
}
const unsubscribeFromObservable = observable.subscribe(observer).unsubscribe
unsubscribeFromObservable()
