import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { HttpstatusService } from '../../services/interceptor/httpstatus.service';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  otpForm: FormGroup;
  isOtpValid = false;
  otpTimer = 60;
  otpInterval: any;
  @ViewChild('otpDir') otpDir: NgForm;
  formInput = ['one', 'two', 'three', 'four', 'five', 'six'];
  @ViewChildren('formRow') rows: any;
  durationInSeconds = 5;
  // window: any;
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private _httpstatus: HttpstatusService,
    @Inject(DOCUMENT) private document: Document
  ) {
    // this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    // this.getsessionStorage();
    this.loginForm = this._fb.group({
      user_id: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
    this.otpForm = this._fb.group({
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
      four: ['', Validators.required],
      five: ['', Validators.required],
      six: ['', Validators.required],
    });
  }
  
  get loginControls() {
    return this.loginForm.controls;
  }
  get otpControls() {
    return this.otpForm.controls;
  }
  keyUpEvent(event: any, indx: number) {
    let pos = indx;
    // console.log(pos, 'poo', event.which)

    if (event.keyCode >= 48 && event.keyCode <= 58) {
      if (event.keyCode === 8 && event.which === 8) {
        pos = indx - 1;
      } else {
        pos = indx + 1;
      }
      if (pos > -1 && pos < this.formInput.length) {
        this.rows._results[pos].nativeElement.focus();
      }
    }
    if(event.keyCode === 8){
      if (pos > 0 && pos < this.formInput.length) {
        this.rows._results[pos-1].nativeElement.focus();
      }
    }
  }
  onSubmitLogin() {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
      this.rows._results[0].nativeElement.focus();
    }, 500);
    if (this.loginForm.valid) {
      
      this.resendOTP();
    }
  }
  resendOTP() {
    // eslint-disable-next-line no-undef
    window.clearInterval(this.otpInterval);
    let requestStatus;
    let LoginModel = {
      user_id: this.loginForm.value.user_id,
      phone_number: this.loginForm.value.phone_number,
    };
    this._auth.genarateOtp(LoginModel).subscribe(
      (res: any) => {
        this.isOtpValid = true;
        requestStatus = this._httpstatus.statusCodeSubject.value;
        // console.log(requestStatus, '0909', res);
        if (requestStatus === 200) {
          this.openSnackBar(res.detail, 'end');
          this.otpTimer = 60;
          // eslint-disable-next-line no-undef
          this.otpInterval = setInterval(() => {
            this.otpTimer--;
            if (this.otpTimer === 0) {
              // eslint-disable-next-line no-undef
              window.clearInterval(this.otpInterval);
            }
          }, 1000);
        }
      },
      (err) => {
        this.isOtpValid = false;
        requestStatus = this._httpstatus.statusCodeSubject.value;
        this.openSnackBar(err.error[0], 'center');
      }
    );
  }
  onSubmitOtp() {
    let requestStatus;
    // eslint-disable-next-line no-undef
    window.clearInterval(this.otpInterval);
    if (this.otpForm.valid) {
      let inputOtp: string = '';
      for (let key in this.otpForm.controls) {
        inputOtp += this.otpForm.get(key)?.value;
      }
      const formData = new FormData();
      formData.append('user_id', this.loginForm.value.user_id);
      formData.append('phone_number', this.loginForm.value.phone_number);
      formData.append('otp', inputOtp);

      this._auth.onVerifyOtp(formData).subscribe((res) => {
        requestStatus = this._httpstatus.statusCodeSubject.value;
        if (requestStatus === 200) {
          this.openSnackBar('Success', 'end');
          // eslint-disable-next-line no-undef
          window.sessionStorage.setItem('ga-token', JSON.stringify(res));

          this.router.navigate(['home']);          
        }
      }, (err)=>{
        this.openSnackBar(err.error, 'center')
      });
    }
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBar(snackdata:string, position:any) {
    this.horizontalPosition = position;
    this._snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      data: snackdata
    });
  }
}
