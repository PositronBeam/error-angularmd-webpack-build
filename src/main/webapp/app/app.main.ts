import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EpigoneSimulationInternetAppModule } from './app.module';

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(EpigoneSimulationInternetAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
