import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({
  imports: [
    CommonModule,LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent]
})
export class LayoutModule { }
