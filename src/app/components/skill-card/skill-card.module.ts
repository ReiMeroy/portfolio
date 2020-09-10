import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SkillCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [SkillCardComponent],
})
export class SkillCardModule {}
