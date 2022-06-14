import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geeks',
  templateUrl: './geeks.component.html',
  styleUrls: ['./geeks.component.css']
})
export class GeeksComponent implements OnInit {

// public inputValue = ''
  // inputValue: any[];
      // userInfo: any = {};
    inputValue: any = [];
     userInfo: any;
     abc: any;
     isUpdate = false
     buttonVisible= true
     abcd = false
     green = true
     red = true
     student =[ 
     {name:'anju',rollno:21,branch:'it',course:'btech'}, 
     {name:'noor',rollno:26,branch:'it',course:'btech'}, 
     {name:'kk',rollno:20,branch:'it',course:'btech'}, 
     ];


  constructor() { }

  ngOnInit(): void {
  }

   hide(){
      this.buttonVisible = false
      this.abcd = true
   }
   show()
   {
    this.buttonVisible = true
    this.abcd = false

   }
   change()
   {
    if(this.green){
    this.red = false
  }
   }
   bright(){
    this.red = true

   }
  

   myEvent()
     {
      if(this.userInfo){
        this.inputValue.push({input: this.userInfo})
      }
      this.userInfo = '';

    }
  //   console.log(this.inputValue)
  //   evt.value = '';

     edit(data: any)
     {
      console.log(data);
this.isUpdate = true;
 // const inputData =  this.inputValue.find((data: any) => data.input === data ? return data.input : '')
        this.userInfo = data;
        
      
// console.log(inputData);


// show update button
// hide add item button

  }
  removetask(val: any)
  {
     this.inputValue = this.inputValue.filter((data: any) => data.input!= val)
   }
    delete(del: any)
    {
     this.inputValue = this.inputValue.filter((data: any) => data.input!= del)
      console.log(this.inputValue)
    }
  



}

