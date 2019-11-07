import { Component, OnInit, Compiler } from '@angular/core';
import { HnService } from '../resolve/hn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private compiler: Compiler, private hnService: HnService) {}

  data: any;
  ngOnInit() {
    this.compiler.clearCache();
    console.log('Home');
    this.hnService.getTopPosts().subscribe(value => console.dir(value));
  }
}
