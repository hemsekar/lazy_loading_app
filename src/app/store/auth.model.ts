

// auth.state.ts
export interface User{
    user: User | null  // User can be your user model
    loading: boolean;
    error: string | null;
  }
  
  export const initialState:User = {
    user: null,
    loading: false,
    error: null,
  };
  