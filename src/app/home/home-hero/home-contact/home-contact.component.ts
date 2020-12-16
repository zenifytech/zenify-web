import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventStatus } from 'src/app/shared/enums/query-event-status.enum';
import { QueryEventType } from 'src/app/shared/enums/query-event-type.enum';
import { Messages } from 'src/app/shared/messages';
import { InboxMessage } from 'src/app/shared/models/inbox-message';
import { BaseService } from 'src/app/shared/services/base.service';
import { QueryEventService } from 'src/app/shared/services/query-event.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  public readonly _messages = Messages;

  public _contactForm: FormGroup;

  constructor(
    private baseService: BaseService,
    private queryEventService: QueryEventService,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryEvents();
    this.initializeForm();
    this.titleService.setTitle("Contact Us | Zenify Software Solutions, Co.");
  }

  public hasError(formControlName: string, error: string) {
    return this._contactForm.get(formControlName).hasError(error);
  }

  public sendMessage() {
    const message: InboxMessage = {
      name: this._contactForm.get('name').value,
      email: this._contactForm.get('email').value,
      subject: this._contactForm.get('subject').value,
      message: this._contactForm.get('message').value,
      budget: this._contactForm.get('budget').value,
      currency: this._contactForm.get('currency').value
    }

    this.baseService.sendMessage(message);
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        if (event && event.type === QueryEventType.SEND_MESSAGE && event.status === QueryEventStatus.COMPLETED) {
          this._contactForm.reset();
        }
      });
  }

  private initializeForm() {
    this._contactForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.\\-_\\$]*(@{1})[a-zA-Z0-9.-]+$")]),
      subject: this.formBuilder.control('', Validators.maxLength(64)),
      message: this.formBuilder.control('', [Validators.required, Validators.maxLength(512)]),
      budget: this.formBuilder.control('', Validators.pattern("^[0-9]*$")),
      currency: this.formBuilder.control('', Validators.pattern("^[a-zA-Z]*$"))
    });
  }
}
