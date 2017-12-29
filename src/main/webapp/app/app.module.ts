import '../content/scss/vendor.scss';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    HomeComponent
} from './home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        MDBBootstrapModule.forRoot()
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    declarations: [
        HomeComponent
    ],
    providers: [],
    bootstrap: [ HomeComponent ]
})
export class EpigoneSimulationInternetAppModule {}
