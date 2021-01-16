import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { KnobModule } from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
import {InputNumberModule} from 'primeng/inputnumber';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    SplitButtonModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    KnobModule,
    DividerModule,
    InputNumberModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    ToolbarModule,
    SplitButtonModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    KnobModule,
    DividerModule,
    InputNumberModule,
  ],
})

export class PrimeNgModule {
}
