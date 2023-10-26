import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { EventBusService } from './_shared/event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('menuDiv') menuDiv!: ElementRef; // Referência à div que queremos mostrar/ocultar
  isMenuVisible = false;
  toggleMenuDiv() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event): void {
    // Call the logout function before the window is unloaded
    this.authService.logout()
  }
  hideMenu(): void {
    this.isMenuVisible = false;
  }
  isLoggedIn = false;
  title = 'Analisador de Anamneses'
  
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    /* this.router.navigate(['/login']) */;
    if (this.isLoggedIn) {
      this.username = this.storageService.getUser();
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        
        console.log(res);
        this.storageService.clean();
        this.isLoggedIn = false;
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
