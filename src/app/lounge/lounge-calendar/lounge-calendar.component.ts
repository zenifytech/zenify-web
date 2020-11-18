import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as moment from 'moment-timezone';

@Component({
  selector: 'zen-lounge-calendar',
  templateUrl: './lounge-calendar.component.html',
  styleUrls: ['./lounge-calendar.component.scss']
})
export class LoungeCalendarComponent implements OnInit {

  public _today: any;

  public _calendarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._today = moment();
    this.initializeForm();
  }

  public displayDay() {
    let weekDay = moment(this._calendarForm.get('date').value).weekday();

    switch(weekDay) {
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      case 7: return "Sunday";
      default: return "";
    }
  }

  private initializeForm() {
    this._calendarForm = this.formBuilder.group({
      date: this.formBuilder.control(moment())
    });
  }
}
