import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventStatus } from '../enums/query-event-status.enum';
import { QueryEventService } from '../services/query-event.service';

@UntilDestroy()
@Component({
  selector: 'zen-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public _inProgress: boolean;

  constructor(
    private queryEventService: QueryEventService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryEvents();
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        this._inProgress = event && event.status === QueryEventStatus.IN_PROGRESS;
      });
  }
}
