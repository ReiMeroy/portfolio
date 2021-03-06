import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() skillTitle: string;
  constructor() {}

  ngOnInit(): void {}
}
