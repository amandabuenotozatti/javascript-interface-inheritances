/*
    Being authenticable means having the "password" property
    must have authenticate method
*/

export class AuthenticationSystem {
    static login(authenticable, password) {
        return authenticable.authenticate(password);
    }
}