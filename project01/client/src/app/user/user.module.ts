import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserbodyModule } from './userbody/userbody.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    UserbodyModule
  ],
  exports:[LayoutComponent]
})
export class UserModule { }
