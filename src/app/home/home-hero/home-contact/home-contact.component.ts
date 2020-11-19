import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Messages } from 'src/app/shared/messages';
import { InboxMessage } from 'src/app/shared/models/inbox-message';
import { BaseService } from 'src/app/shared/services/base.service';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
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
