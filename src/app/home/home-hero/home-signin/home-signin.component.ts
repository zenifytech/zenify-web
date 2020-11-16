import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventStatus } from 'src/app/shared/enums/query-event-status.enum';
import { QueryEventType } from 'src/app/shared/enums/query-event-type.enum';
import { Messages } from 'src/app/shared/messages';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { QueryEventService } from 'src/app/shared/services/query-event.service';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-signin',
  templateUrl: './home-signin.component.html',
  styleUrls: ['./home-signin.component.scss'],
  animations: [
    trigger(
      'slide-right', [
        transition(
          ':enter',  [
            style({ 'position':'relative', 'margin-right': '-5rem', 'margin-left': '5rem', opacity: 0 }),
            animate('.5s ease-out', 
                    style({ 'position':'relative', 'margin-right': '0', 'margin-left': '0', opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', 'margin-right': '0', 'margin-left': '0', opacity: 0.8 }),
            animate('.2s ease-in', 
                    style({ 'position': 'relative', 'margin-right': '-5rem', 'margin-left': '5rem', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeSigninComponent implements OnInit {

  public readonly _messages = Messages;

  public _onSigninPage: boolean;

  public _accountForm: FormGroup;
  public _passwordForm: FormGroup;

  public _accountDomain: string;
  public _accountValid: boolean;

  constructor(
    private authService: AuthenticationService,
    private queryEventService: QueryEventService,
    private routeMatcher: RouteMatcherService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._onSigninPage = this.routeMatcher.matches('signin');

    this.subscribeToQueryEvents();
    this.subscribeToAccountDomain();
    this.initializeForm();
  }

  public validateEmail() {
    this.authService.checkDomain(this._accountForm.get('email').value);
  }

  public formValid(form: FormGroup) {
    return form.dirty && form.valid;
  }

  public signin() {
    this.authService.signin(this._accountForm.get('email').value, this._passwordForm.get('password').value, this._accountDomain);
  }

  private subscribeToAccountDomain() {
    this.authService.domain
      .pipe(untilDestroyed(this))
      .subscribe(domain => {
        this._accountDomain = domain;
        this._accountValid = this._accountDomain === 'PROPRIETOR' || this._accountDomain === 'ASSOCIATE';
      });
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        if (event) {
          switch(event.type) {
            case QueryEventType.DOMAIN_CHECK: {
              if (event.status === QueryEventStatus.COMPLETED) {
                this._accountForm.get('email').setErrors({
                  invalidEmail: false
                });
              } else if (event.status === QueryEventStatus.ERROR) {
                this._accountForm.get('email').setErrors({
                  invalidEmail: true
                });
              }
              break;
            }
            case QueryEventType.SIGNIN_PROPRIETOR:
            case QueryEventType.SIGNIN_ASSOCIATE: {
              if (event.status === QueryEventStatus.COMPLETED) {
                this._passwordForm.get('password').setErrors({
                  signinFailed: false
                });
              } else if (event.status === QueryEventStatus.ERROR) {
                this._passwordForm.get('password').setErrors({
                  signinFailed: true
                });
              }
              break;
            }
            default: break;
          }
        }
      });
  }

  private initializeForm() {
    this._accountForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.\\-_\\$]*(@{1})[a-zA-Z0-9.-]+$")])
    });
    this._passwordForm = this.formBuilder.group({
      password: this.formBuilder.control('', Validators.required)
    })
  }
}
