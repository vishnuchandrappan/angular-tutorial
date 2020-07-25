import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() recipe = new EventEmitter() as any;
  @Output() shoppingList = new EventEmitter() as any;

  constructor() {}

  ngOnInit(): void {}

  onRecipe() {
    this.recipe.emit();
  }

  onShoppingList() {
    this.shoppingList.emit();
  }
}
