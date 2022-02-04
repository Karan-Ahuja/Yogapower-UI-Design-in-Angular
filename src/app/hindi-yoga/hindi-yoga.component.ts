import { Component, OnInit } from '@angular/core';
	import { FormsModule } from '@angular/forms';
	 import { ServicehttpService } from '../servicehttp.service';
	 import { Subscription } from 'rxjs';
	import { Inject } from '@angular/core';
	import { DOCUMENT} from '@angular/common';
	import { PageScrollService } from 'ngx-page-scroll-core';
	import * as $ from 'jquery';

@Component({
  selector: 'app-hindi-yoga',
  templateUrl: './hindi-yoga.component.html',
  styleUrls: ['./hindi-yoga.component.css']
})
export class HindiYogaComponent implements OnInit {

 constructor(private httpser: ServicehttpService, 
	  		private pageScrollService: PageScrollService, 
	  		@Inject(DOCUMENT) private document: any) { 

	  		//this.test = true;
	  	}

		// english_videos

	    about_english_yoga_day:string="http://139.162.54.105:8500/assets/English/english_modi/manifest.mpd"
		about_english_yoga:string="http://139.162.54.105:8500/assets/English/about_english_yoga/manifest.mpd"
	    standing_english:string="http://139.162.54.105:8500/assets/English/standing_english/manifest.mpd"
	    seating_english:string="http://139.162.54.105:8500/assets/English/sitting_english/manifest.mpd"
	    lying_english:string="http://139.162.54.105:8500/assets/English/lying_english/manifest.mpd"
		meditation_english:string="http://139.162.54.105:8500/assets/English/meditation_english/manifest.mpd"            

		// hindi_videos

		about_hindi_yoga_day:string="http://139.162.54.105:8500/assets/Hindi/about_yoga_day/manifest.mpd"
		about_hindi_yoga:string="http://139.162.54.105:8500/assets/Hindi/about_yoga_hindi/manifest.mpd"
		standing_hindi:string="http://139.162.54.105:8500/assets/Hindi/seating_hindi/manifest.mpd"
		seating_hindi:string="http://139.162.54.105:8500/assets/Hindi/standing_hindi/manifest.mpd"
		lying_hindi:string="http://139.162.54.105:8500/assets/Hindi/lying_hindi/manifest.mpd"
		meditation_hindi:string="http://139.162.54.105:8500/assets/Hindi/meditation_hindi/manifest.mpd"

		
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

			ngOnInit() 
			{
				$('document').ready(function(){
					$('.down').click(function(){
						$("html,body").animate({
							scrollTop:$(".up").offset().top
						},1000);
					})
				})
			}

		// button;
		// slider;

		// setSlider(){
		// 	if(this.slider!="item"){
		// 			this.button=true;
		// 			console.log("clicked")
		// 		}
		// 		else{
		// 			this.button=false;
		// 		}
		// }

		

		// public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
	 //      // easeInOutExpo easing
	 //      if (t === 0) {
	 //        return b;
	 //      }
	 //      if (t === d) {
	 //        return b + c;
	 //      }
	 //      if ((t /= d / 2) < 1) {
	 //        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	 //      }
	  
	 //      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	 //    }
	 
	    doSmth(reachedTarget: boolean): void {
	        if (reachedTarget) {
	            console.log('Yeah, we reached our destination');
	        } else {
	            console.log('Ohoh, something interrupted us');
	        }
	    }


	}
