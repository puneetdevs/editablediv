import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
    selector: '[replaceElement]'
})

export class ReplaceElementDirective {
    editableDiv;
    editableInput;

    constructor(
        private eleRef: ElementRef,
        private renderer:Renderer2
    ) {
        this.editableDiv = this.eleRef.nativeElement;
        fromEvent(this.eleRef.nativeElement, 'click')
        .subscribe(() => {
            this.replaceElement();
        });
    }

    replaceElement() {
        this.editableInput = this.renderer.createElement('textarea');
        this.editableInput.className = 'edit';
        this.editableInput.value = this.editableDiv.innerHTML;
        this.eleRef.nativeElement.replaceWith(this.editableInput);
        this.editableInput.focus();

        this.renderer.listen(this.editableInput, 'blur', () => {
            this.endEdit();
        });

        this.renderer.listen(this.editableInput, 'keydown', (event) => {
            if(event.key == 'Enter') {
                this.editableInput.blur();
            }
        });
    }

    endEdit() {
        this.editableDiv.innerHTML = this.editableInput.value;
        this.editableInput.replaceWith(this.editableDiv);
    }
}