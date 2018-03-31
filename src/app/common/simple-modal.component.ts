import { Component, Input,Inject, ViewChild, ElementRef} from '@angular/core'
import { Router } from '@angular/router';
import { JQ_TOKEN } from './jQuery.service'

@Component({
selector: 'simple-modal',
template: `
        <div id="{{elementId}}" #modalcontainer class="modal " tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
        </div>
`,
styles: [`
    .modal-body { height: 250px; overflow-y: scroll;}
    .modal { opacity: 0.5; background: transparent }
    
`]
})

export class SimpleModalComponent {
    constructor(private router: Router, @Inject(JQ_TOKEN) private $ : any){}
    @Input() title: string
    @Input() elementId: string
    @Input() closeOnBodyClick: string
    @ViewChild('modalcontainer') containerEl: ElementRef
   
    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() === 'true')
        this.$(this.containerEl.nativeElement).modal('hide');
    }
    
}