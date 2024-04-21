export interface SignIn {
    email: string;
    password: string;
    id?: string;
}
export interface SignUp extends SignIn {
    name: string;
}