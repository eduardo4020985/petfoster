import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const COOKIE_KEY = 'cookie';
const STORAGE_KEY = 'username';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private pacient: string= ""
  constructor(private cookieService: CookieService) {}

  clean(): void {
    window.sessionStorage.removeItem(STORAGE_KEY);
    console.log(this.isLoggedIn)
    window.sessionStorage.clear();
    this.cookieService.delete(COOKIE_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));

    //this.cookieService.set(COOKIE_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(STORAGE_KEY);
    if (user) {
      console.log(JSON.parse(user))
      return JSON.parse(user);
      
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(STORAGE_KEY);
    
    if (user) {
      console.log("hi:",user)
      return true;
    }

    return false;
  }


}
