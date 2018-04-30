import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/AuthGuard/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api';
import { ChartsModule } from 'ng2-charts';
import { UserLoginsComponent } from './main/charts/chart-js/user-logins/user-logins.component';
import { NewAcountsComponent } from './main/charts/chart-js/new-acounts/new-acounts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UserMovesComponent } from './main/charts/echarts/user-moves/user-moves.component';
import { EstimatedRevenueComponent } from './main/charts/echarts/estimated-revenue/estimated-revenue.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { GraphComponent } from './main/charts/d3graph/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserLoginsComponent,
    NewAcountsComponent,
    UserMovesComponent,
    EstimatedRevenueComponent,
    GraphComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    NgxEchartsModule,
    NgxGraphModule
  ],
  providers: [AuthGuard, AuthenticationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
