import { Component, OnInit } from '@angular/core';
import {
  htmlSkills,
  cssSkills,
  angularSkills,
  angularMaterialSkills,
  firebaseSkills,
  algoliaSkills,
} from '../model/skill';
import { lure, blog } from '../model/description';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  html = htmlSkills;
  css = cssSkills;
  angular = angularSkills;
  angularMaterial = angularMaterialSkills;
  firebase = firebaseSkills;
  algolia = algoliaSkills;
  lureAdvance = lure;
  blog = blog;

  constructor() {}

  ngOnInit(): void {}
}
