import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core'
import {
  provideRouter,
  withInMemoryScrolling,
  type InMemoryScrollingFeature,
  type InMemoryScrollingOptions,
} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { StoreModule, provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http'
import { provideLottieOptions } from 'ngx-lottie'

import { rootReducer } from './store'
import { AuthenticationEffects } from '@store/authentication/authentication.effects'
import { FakeBackendProvider } from '@helpers/fake-backend'
import { JwtInterceptor } from '@helpers/jwt.interceptor'
import { ErrorInterceptor } from '@helpers/error.interceptor'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { BillEffects } from '@store/billing/billing-effect'
import { provideCharts, withDefaultRegisterables } from 'ng2-charts'
import { IMAGE_CONFIG } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideStore(rootReducer),
    provideEffects(AuthenticationEffects, BillEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
}
