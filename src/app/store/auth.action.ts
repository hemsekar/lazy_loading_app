import { createAction, props } from "@ngrx/store";
import { User } from "./auth.model";



export const login = createAction('[Auth] Login', props<{user:string, password:string}>())
export const loginSuccess = createAction('[Auth] LoginSuccessful', props<{user:User}>())
export const loginFailure = createAction('[Auth] LoginFailure', props<{error:string}>())

export const register = createAction('[Auth] register', props<{user:string,  password:string}>())
export const registerSuccess = createAction('[Auth] LoginSuccessful', props<{user:User}>())
export const registerFailure = createAction('[Auth] LoginFailure', props<{error:string}>())

export const logout = createAction('[Auth] Logout')
