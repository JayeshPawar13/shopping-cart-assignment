import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss'],
})
export class LoginRegistrationComponent implements OnInit {
  type!: string | null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.type = this.route.snapshot.paramMap.get('type');
    });
  }
}
