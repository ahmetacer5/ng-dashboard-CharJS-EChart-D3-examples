import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currencyCtrl = new FormControl('', Validators.required);
  displayedColumns = ['currenyCode', 'euroPrice', 'delete'];
  dataSource: any;
  countDown;
  counter = 5 * 60; // 5 minutes

  constructor(private api: ApiService) {
    this.startTimer();
  }

  startTimer() {
    this.loadCurrencies();
    this.countDown = Observable.timer(0, 1000)
      .take(this.counter)
      .map(() => {
        this.counter--;
        if (this.counter <= 0) {
          this.counter = 5 * 60; // 5 minutes
          this.startTimer();
        }
        return this.counter;
      });
  }


  loadCurrencies() {
    this.api.GetCurrencyList()
      .subscribe(res => {
        if (res.success) {
          this.dataSource = new MatTableDataSource(res.data);
        }
      });
  }

  ngOnInit() {
  }

  addNew() {
    this.currencyCtrl.markAsTouched();
    if (this.currencyCtrl.valid) {
      this.api.AddCurrency(this.currencyCtrl.value)
        .subscribe(res => {
          if (res.success) {
            this.loadCurrencies();
            alert('Successfully Added');
          } else {
            if (res.error_message) {
              alert(res.error_message);
            }
          }
        });
    }
  }

  deleteRow(row) {
    this.api.DeleteCurrency(row._id)
      .subscribe(res => {
        if (res.success) {
          this.loadCurrencies();
          alert('Successfully Deleted');
        } else {
          if (res.error_message) {
            alert(res.error_message);
          }
        }
      });
  }

}
