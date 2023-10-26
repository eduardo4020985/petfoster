import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../_services/animal.service';

@Component({
  selector: 'app-animal-cards',
  templateUrl: './animal-cards.component.html',
  styleUrls: ['./animal-cards.component.css']
})
export class AnimalCardsComponent {
  animals: any[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAllAnimalsPublic().subscribe((data: any[]) => {
      this.animals = data;
    });
  }
}
