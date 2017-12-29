import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',

    providers: [
    ]

})
export class HomeComponent implements OnInit {
    @Input() quote;
    public produit = '999';
    public version = '1';
    ngOnInit() {
    }
}
