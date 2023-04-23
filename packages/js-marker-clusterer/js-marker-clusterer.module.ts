import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@lvmaps/core';

import {AgmMarkerCluster} from './directives/marker-cluster';

@NgModule({
  imports: [AgmCoreModule],
  declarations: [AgmMarkerCluster],
  exports: [AgmMarkerCluster],
})
export class AgmJsMarkerClustererModule {
}
