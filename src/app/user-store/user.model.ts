export interface User{
  id: number;
  name:string;
  email: string;
  password:string;
  confirmpassword:string;
}
  
  export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialUserState: UserState = {
    users: [],
    loading: false,
    error: null,
  };
  