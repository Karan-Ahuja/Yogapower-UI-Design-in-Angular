import { Component, OnInit } from '@angular/core';
import { RouterModule,Router,Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private router:Router, private route: ActivatedRoute){}



    flag;
    images;
    //test;

    setLeng(){
        if(this.images!="english"){
          this.flag=true;
          
          console.log("clicked")
        }
        else{
          this.flag=false;
        }
      }

   	// onNavigate(value)
   	// {

   	// 	if(value == 'English')
   	// 	{
   	// 		console.log(value);
   	// 		this.router.navigate(['/EnglishYoga']);
   	// 	}
   	// 	else
   	// 	{
   	// 		console.log(value);
   	// 		this.router.navigate(['/HindiYoga']);

   	// 	}
    // }

  // constructor(private router: Router) { }

  // 	this.router.navigate(['/English']);
  // 	this.router.navigate(['/Hindi']);

  // 	onNavigate(value)
  // 		{ 
  // 			console.log(value);
  // 			 }



   ngOnInit(){
   
  }

}
