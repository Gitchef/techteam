import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './widget/slider/slider.component';
import { MenuverComponent } from './widget/menuver/menuver.component';
import { BodylayoutComponent } from './bodylayout/bodylayout.component';
import { ItemComponent } from '../../products/item/item.component';
import { ListPComponent } from '../../products/list-p/list-p.component';
import { DetailPComponent } from '../../products/detail-p/detail-p.component';
import { TypePComponent } from '../../products/type-p/type-p.component';
import { StagePComponent } from '../../products/stage-p/stage-p.component';

@NgModule({
  declarations: [
    SliderComponent,
    MenuverComponent,
    BodylayoutComponent,
    ItemComponent,
    ListPComponent,
    DetailPComponent,
    TypePComponent,
    StagePComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BodylayoutComponent]
})
export class UserbodyModule { }
