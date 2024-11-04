import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { SystemLayoutComponent } from './app/Shared-Layout/system-layout.component';
import 'zone.js';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
createApplication()
    .then((app) => {
        const sharedLayout = createCustomElement(SystemLayoutComponent, { injector: app.injector });
        customElements.define('shared-layout', sharedLayout);
    })
    .catch((err) => console.error(err));