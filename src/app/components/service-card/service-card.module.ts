import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ServiceCardComponent } from './service-card.component';

@NgModule({
  declarations: [ServiceCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ServiceCardComponent],
})
export class ServiceCardModule {}
