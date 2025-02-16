import { AfterViewInit, Directive, ElementRef, inject, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Directive({
  selector: '[appSubscriptionHighlights]'
})
export class SubscriptionHighlightsDirective implements AfterViewInit,OnInit {
  userdata:any[] = []
  constructor(public el:ElementRef,private service:FormDataService) { 
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.applyHighlight(), 500);
  }
  
  private applyHighlight() {
    if (!this.userdata.length) return;

    const cellValue = this.el.nativeElement.innerText.trim();
    const data1 = this.userdata.find(value => value.subscription === true && Object.values(value).includes(cellValue));

    if (data1) {
      this.el.nativeElement.style.backgroundColor = '#bbdffb';
      this.el.nativeElement.style.color = 'black';
    }
  }
  ngOnInit(): void {
      this.service.getUsers().subscribe((value)=>{
          this.userdata = value
      })
  }
}
