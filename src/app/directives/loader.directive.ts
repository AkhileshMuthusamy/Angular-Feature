import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective {

  public loaderEl: HTMLDivElement;

  @Input()
  public set appLoader(value: boolean) {
    console.log(value);
    if (!value) {
      this.loaderEl ? this._setStyles(this.loaderEl, { display: 'none' }) : null;
      return;
    }

    this.loaderEl = this._renderer.createElement('div');
    this._renderer.addClass(this.loaderEl, 'lds-ring');
    this._renderer.appendChild(this.loaderEl, this._renderer.createElement('div'));
    this._renderer.appendChild(this.loaderEl, this._renderer.createElement('div'));
    this._renderer.appendChild(this.loaderEl, this._renderer.createElement('div'));
    this._renderer.appendChild(this.loaderEl, this._renderer.createElement('div'));
    this._renderer.appendChild(this._el.nativeElement, this.loaderEl);

  }

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  private _setStyles(element: HTMLElement, styles: { [key: string]: string }): void {
    Object.keys(styles).forEach((key: any) => {
      this._renderer.setStyle(element, key, styles[key]);
    });
  }

}
