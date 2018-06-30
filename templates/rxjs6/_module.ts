import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { {{properCase name }}Service } from './{{ dashCase name }}.service';
import { {{camelCase name}}Reducer } from './{{ dashCase name }}.reducer';
import { {{properCase name }}Effects } from './{{ dashCase name }}.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('{{properCase name}}', {{camelCase name}}Reducer),
    EffectsModule.forFeature([{{properCase name }}Effects])
  ],
  exports: [],
  declarations: []
})
export class {{ properCase name }}Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: {{ properCase name }}Module,
      providers: [{{ properCase name }}Service]
    };
  }
}

export { {{properCase name }}Service } from './{{ dashCase name }}.service';
export * from './{{ dashCase name }}.actions';
export { {{properCase name }}State } from './{{ dashCase name }}.state';
