import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.elRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.toggle('show');
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}
}
