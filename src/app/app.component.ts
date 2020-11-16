import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Language';
  isFrench:boolean=false;
  isDark:boolean=false;


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}

checkValue(event: any){
  if(event)
  {
    this.translate.use('fr');
  }
  else{
    this.translate.use('en');
  }
}

checkBg(event:any){
  if(event)
  {

  }
  else{

  }
}
}