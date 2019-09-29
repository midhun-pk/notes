import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    private tokenKey = 'AuthenticationSystemAppJWT';

    constructor(private router: Router) { }

    isAuthenticated() {
        const user = JSON.parse(localStorage.getItem('user')) as User;
        return (user && user.isLoggedIn) ? true : false;
    }

    signin(email: string, password: string) {
        const user = JSON.parse(localStorage.getItem('user')) as User;
        if (!user) { return false; }
        user.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        return email === user.email && password === user.password;
    }

    logout() {
        const user = JSON.parse(localStorage.getItem('user')) as User;
        user.isLoggedIn = false;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['auth', 'signin']);
    }

    signup(username: string, email: string, password: string) {
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        user.isLoggedIn = false;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['auth', 'signin']);
    }

    getUser() {
        const user = JSON.parse(localStorage.getItem('user')) as User;
        return user;
    }
}
