import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { EnvironmentUtilityService } from './environment-utility.service';

@Component({
  selector: 'app-environment-setup',
  standalone: true,
  imports: [],
  templateUrl: './environment-setup.component.html',
  styleUrl: './environment-setup.component.scss',
  providers: [EnvironmentUtilityService]
})
export class EnvironmentSetupComponent implements OnInit {

  constructor(private environmentUtilityService: EnvironmentUtilityService) {}

  ngOnInit() {
    this.environmentUtilityService.consoleLog(environment);
  }
}
