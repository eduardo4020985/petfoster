import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from './_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: StorageService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.authService.isLoggedIn()) {
        return true; // Permite o acesso à rota se o usuário estiver autenticado.
      } else {
        this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado.
        return false;
      }
  }
}
