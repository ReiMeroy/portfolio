import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SkillCardModule } from '../components/skill-card/skill-card.module';
import { ServiceCardModule } from '../components/service-card/service-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    SkillCardModule,
    ServiceCardModule,
  ],
})
export class HomeModule {}
