import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
import * as moment from 'moment';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {


  @Input() model:any;
  datepicker:any;
  selector:string;
  emitDate:boolean;
  @Output() onChangeDate: EventEmitter<Date>;
  constructor() {
    this.emitDate = true;
    this.onChangeDate = new EventEmitter<Date>();
   }

  ngOnInit(): void {
    this.setDateFormat();
    
    
  }

  setDateFormat(){
    setTimeout(() => {
      if(this.model.viewDate){
        let date =moment(new Date(this.model.viewDate)).format("MM/DD/YYYY");
        this.model.viewDate = date.toString();
      }
  
    },50)
   
  }
  

  ngAfterViewInit(){

    this.datepicker = $("#birthdate").datepicker({
      autoclose:true,
      orientation:"bottom left",
      endDate: new Date()
    })

    this.datepicker.on("changeDate",(event:any)=>{
      if(this.emitDate){
        this.emitOnChangeDateEvent(event.date);
      }
    })
    
  }



  emitOnChangeDateEvent(selectedDate?: any) {
    if(!selectedDate)
      return;

    this.model.selectedDate = selectedDate;
    this.onChangeDate.emit(this.model.selectedDate);
  }

 

}
