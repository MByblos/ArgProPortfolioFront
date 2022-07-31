import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  loginUsuario: LoginUsuario ;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg: string = '';
  nombreUsuario: string = '';
  password: string = '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenService: TokenService, private router: Router) { 
    this.form=this.formBuilder.group(
      {
        nombreUsuario:['',[Validators.required]],
        password:['', [Validators.minLength(5)]],
        deviceInfo:this.formBuilder.group(
          {
            devideId: [""],
            deviceType: [""],
            notificationToken:[""]
          }
        )
      }
    )


  }
    

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);

    this.authService.login(this.loginUsuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.router.navigate(['/login']);
    },
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
        alert('Ha surgido un error y no pudo iniciar sesión')
      }
    );
  }

  get NombreUsuario ()
    {
      return this.form.get('nombreUsuario');
    }

  get Password ()
    {
      return this.form.get('password');
    }

}