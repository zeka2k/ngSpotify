import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GetDataService } from './services/getData.service';

@NgModule({
  providers: [GetDataService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(
        'You shall not run!, CoreModule has already been loaded. You should only import Core modules in the AppModule only'
      );
    }
  }
}
