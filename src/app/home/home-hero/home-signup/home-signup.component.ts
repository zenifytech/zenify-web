import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventStatus } from 'src/app/shared/enums/query-event-status.enum';
import { QueryEventType } from 'src/app/shared/enums/query-event-type.enum';
import { Messages } from 'src/app/shared/messages';
import { AccountRequest } from 'src/app/shared/models/account-request';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { QueryEventService } from 'src/app/shared/services/query-event.service';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-signup',
  templateUrl: './home-signup.component.html',
  styleUrls: ['./home-signup.component.scss']
})
export class HomeSignupComponent implements OnInit {

  public readonly _messages = Messages;

  public _onRegisterPage: boolean;
  public _onBusinessPage: boolean;
  public _onCommunityPage: boolean;

  public _signupForm: FormGroup;

  public _emailAvailable: boolean;
  public _passwordError: string;

  constructor(
    private authService: AuthenticationService,
    private queryEventService: QueryEventService,
    private routeMatcher: RouteMatcherService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._onBusinessPage = this.routeMatcher.matches('home/business/signup');
    this._onCommunityPage = this.routeMatcher.matches('home/community/signup');
    this._onRegisterPage = this._onBusinessPage || this._onCommunityPage;

    this.subscribeToQueryEvents();
    this.initializeForm();
  }

  public getAccountType() {
    if (this._onBusinessPage) {
      return "a Proprietor";
    } else if (this._onCommunityPage) {
      return "an Associate"
    }
    return "";
  }

  public formError(formControl: string, error?: string) {
    if (this._signupForm.get(formControl).errors) {
      if (error) {
        switch(error) {
          case 'pattern': return this._signupForm.get(formControl).errors.pattern;
          case 'minlength': return this._signupForm.get(formControl).errors.minlength;
          case 'maxlength': return this._signupForm.get(formControl).errors.maxlength;
          default: break;
        }
      } else {
        return this._signupForm.get(formControl).errors;
      }
    }
  }
  
  public validateEmail() {
    if (this._signupForm.get('email').valid) {
      this.authService.checkEmailAvailability(this._signupForm.get('email').value, this._onBusinessPage ? 'BUSINESS' : 'COMMUNITY');
    }
  }

  public validatePasswords() {
    this._passwordError = (this._signupForm.get('password').value !== this._signupForm.get('confirmPw').value) ? Messages.FORM_PASSWORD_MISMATCH_ERROR : undefined;
  }

  public signup(formDirective: FormGroupDirective) {
    if (this._signupForm.valid) {
      const account: AccountRequest = {
        email: this._signupForm.get('email').value,
        password: this._signupForm.get('password').value,
        firstName: this._signupForm.get('firstName').value,
        lastName: this._signupForm.get('lastName').value
      }

      this.authService.signup(account, this._onBusinessPage ? 'BUSINESS' : 'COMMUNITY');
      formDirective.resetForm();
    }
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        if (event) {
          switch (event.type) {
            case QueryEventType.DOMAIN_CHECK: {
              this._emailAvailable = event.status === QueryEventStatus.COMPLETED;

              if (this._signupForm) {
                this._signupForm.get('email').setErrors(this._emailAvailable ? null : { invalidEmail: true });
              }
              break;
            }
            case QueryEventType.SIGNUP_PROPRIETOR:
            case QueryEventType.SIGNUP_ASSOCIATE: {
              if (event.status === QueryEventStatus.COMPLETED) {
                this._emailAvailable = undefined;
                this._signupForm.reset();
              }
              break;
            }
            default: break;
          }
        }
      });
  }

  private initializeForm() {
    this._signupForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.\\-_\\$]*(@{1})[a-zA-Z0-9.-]+$")]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      confirmPw: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      firstName: this.formBuilder.control('', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]),
      lastName: this.formBuilder.control('', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]),
      contact: this.formBuilder.control('')
    })
  }
}
