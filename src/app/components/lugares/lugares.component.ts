import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss'],
})
export class LugaresComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.posts);
  }

}
