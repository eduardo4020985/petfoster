import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnimalService } from '../_services/animal.service';

@Component({
  selector: 'app-animal-ong',
  templateUrl: './animal-ong.component.html',
  styleUrls: ['./animal-ong.component.css']
})
export class AnimalOngComponent implements OnInit {
  //public dialogRef: MatDialogRef<AnimalDialogComponent>
  animalForm: FormGroup;
  displayedColumns: string[] = ['name', 'age', 'actions'];
  animals: any[] = [];
  dialogTitle: string = '';
  isAddDialogOpen: boolean = false;
  isEditDialogOpen: boolean = false;
  editingAnimal: any = null;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private animalService: AnimalService) {
    this.animalForm = this.fb.group({
      name: '',
      age: 0,
      description: '',
      photoUrl: '',
      isAdopted: false
    });
  }

  ngOnInit(): void {
    // Carregue a lista de animais ou inicialize como desejado
    this.loadAnimals();
  }

  openAddAnimalDialog(): void {
    this.dialogTitle = 'Adicionar Animal';
    this.isAddDialogOpen = true;
    this.animalForm.reset();
  }

  openEditAnimalDialog(animal: any): void {
    this.dialogTitle = 'Editar Animal';
    this.isEditDialogOpen = true;
    this.editingAnimal = animal;

    // Defina o valor do controle isAdopted com base no valor do animal
    //this.animalForm.get('isAdopted')!.setValue(animal.isAdopted);

    this.animalForm.patchValue({
      name: animal.name,
      age: animal.age,
      description: animal.description,
      photoUrl: animal.photoUrl,
      isAdopted: animal.isAdopted
    });
    
  }

  deleteAnimal(animal: any): void {
    if (confirm(`Deseja excluir o animal ${animal.name}?`)) {
      this.animalService.deleteAnimal(animal.id) // Substitua 'id' pelo campo correto que identifica o animal
        .subscribe(() => {
          // Lógica de sucesso ou tratamento de erro, se necessário
          this.closeDialog();
          this.loadAnimals(); // Atualiza a lista de animais após a exclusão
        });
    }
  }

  saveAnimal(): void {
    if (this.isAddDialogOpen) {
      this.animalService.addAnimal(
        this.animalForm.value.name,
        Number(this.animalForm.value.age),
        this.animalForm.value.description,
        this.animalForm.value.photoUrl,
        this.animalForm.value.isAdopted
      ).subscribe((result) => {
        // Lógica de sucesso ou tratamento de erro, se necessário
        this.closeDialog();
      });
    } else if (this.isEditDialogOpen) {
      this.animalService.updateAnimal(
        this.editingAnimal.id, // Suponhamos que o animal tenha um campo 'id'
        this.animalForm.value.name,
        Number(this.animalForm.value.age),
        this.animalForm.value.description,
        this.animalForm.value.photoUrl,
        Boolean(this.editingAnimal.isAdopted) // Suponhamos que o animal tenha um campo 'isAdopted'
      ).subscribe((result) => {
        // Lógica de sucesso ou tratamento de erro, se necessário
        this.closeDialog();
      });
    }
  }

  closeDialog(): void {
    this.isAddDialogOpen = false;
    this.isEditDialogOpen = false;
    this.editingAnimal = null;
  }

  private loadAnimals(): void {
    this.animalService.getAllAnimals().subscribe((data) => {
      this.animals = data;
    });
  }
}
