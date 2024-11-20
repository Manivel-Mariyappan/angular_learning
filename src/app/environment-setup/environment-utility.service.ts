import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentUtilityService {

  constructor() { }

  consoleLog(object: any) {
    console.log(object)
  }
}
