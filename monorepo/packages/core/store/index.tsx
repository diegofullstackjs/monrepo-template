import { FC } from 'react'
import { Provider } from 'react-redux'

import {
  Action,
  AnyAction,
  Store
} from 'redux'

interface Props<A extends Action = AnyAction> {
  children: JSX.Element | Array<JSX.Element>
  store: Store<any, A>;
}

const StoreProvider:FC<Props> = ({ children, store }) => (
  <Provider store={ store }>
    {children}
  </Provider>
)

export default StoreProvider
