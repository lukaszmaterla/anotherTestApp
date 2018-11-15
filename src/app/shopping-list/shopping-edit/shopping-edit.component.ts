import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredients = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  saveIngred() {
    const el = this.nameInputRef.nativeElement;
    const ingredients2 = new Ingredient(el.value, el.value);
    this.ingredients.emit(ingredients2);
  }
}
