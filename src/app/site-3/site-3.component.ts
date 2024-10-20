import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { log } from 'console';
import { Product } from '../comment.interface/comment.interface';

@Component({
  selector: 'app-site-3',
  standalone: true,
  imports: [],
  templateUrl: './site-3.component.html',
  styleUrl: './site-3.component.css'
})

export class Site3Component implements OnInit {
  productList!: any;


  constructor(private apiService: ServiceService) {
  }
  ngOnInit(): void {
   this.apiService.getLimitProducts().subscribe(res => {
    console.log(res);
    this.productList = res;
    console.log(this.productList);
    
   })

  }
}
