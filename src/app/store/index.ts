import type { ActionReducerMap } from '@ngrx/store'
import {
  authenticationReducer,
  type AuthenticationState,
} from './authentication/authentication.reducer'
import { BillReducer, BillState } from './billing/billing-reducers'

export type RootReducerState = {
  authentication: AuthenticationState
  Billing: BillState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  authentication: authenticationReducer,
  Billing: BillReducer,
}
