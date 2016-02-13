
import {bootstrap}        from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy,
        HashLocationStrategy} from 'angular2/router';
import {App}     from './app';

enableProdMode();
bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy,
         {useClass: HashLocationStrategy}) // .../#/about/
]);
// bootstrap(App, [ROUTER_PROVIDERS]);
