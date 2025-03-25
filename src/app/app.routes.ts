import { Routes } from '@angular/router'
import { AuthGuard } from '@core/guards'
import { AccountLayoutComponent } from './layouts/account-layout.component'
import { SaasV2Component } from './pages/landings/saas-v2/saas-v2.component'
import { ContactV1Component } from './pages/contacts/contact-v1/contact-v1.component'
import { ServiceV1Component } from './pages/services/service-v1/service-v1.component'
import { PricingComponent } from './pages/pricing/pricing.component'
import { ProductComponent } from './pages/about/product/product.component'
import { List2Component } from './pages/portfolio/list-2/list-2.component'
import { SaasV1Component } from './pages/landings/saas-v1/saas-v1.component'
import { SaasV4Component } from './pages/landings/saas-v4/saas-v4.component'
import { AboutComponent } from './pages/about/agency/component/about/about.component'
import { AgencyComponent } from './pages/about/agency/agency.component'
import { SymMissionComponent } from './pages/about/mission/mission.component'
import { MaestroComponent } from './pages/landings/maestro/maestro.component'
import { SaasV3Component } from './pages/landings/saas-v3/saas-v3.component'


export const routes: Routes = [
  {
    path: '',
    component: SaasV2Component,
    title: 'Home | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'contact',
    component: ContactV1Component,
    title: 'Contact | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'mission',
    component: SymMissionComponent,
    title: 'Mission | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'careers',
    component: SymMissionComponent,
    title: 'Careers | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'services',
    component: ServiceV1Component,
    title: 'Services | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'customers',
    component: AgencyComponent,
    title: 'Customers | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'licensing',
    component: PricingComponent,
    title: 'Licensing | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'product-inquiry',
    component: ProductComponent,
    title: 'Demo Request | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'technical-specs',
    component: List2Component,
    title: 'Technical Specs | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'symphony-overview',
    component: SaasV3Component,
    title: 'Symphony Platform | Symphony Procurement Suite - Apex Logic',
  },

  {
    path: 'audition-overview',
    component: SaasV1Component,
    title: 'Audition Overview | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'performer-overview',
    component: SaasV4Component,
    title: 'Performer Overview | Symphony Procurement Suite - Apex Logic',
  },
  {
    path: 'maestro-overview',
    component: MaestroComponent,
    title: 'Maestro Overview | Symphony Procurement Suite - Apex Logic',
  },
  // {
  //   path: 'landings',
  //   loadChildren: () =>
  //     import('./pages/landings/landings.route').then(
  //       (mod) => mod.LANDING_ROUTES
  //     ),
  // },
  // {
  //   path: 'portfolio',
  //   loadChildren: () =>
  //     import('./pages/portfolio/portfolio.route').then(
  //       (mod) => mod.PORTFOLIO_ROUTES
  //     ),
  // },
  // {
  //   path: 'shop',
  //   loadChildren: () =>
  //     import('./pages/shop/shop.route').then((mod) => mod.SHOP_ROUTES),
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () =>
  //     import('./pages/blog/blog.route').then((mod) => mod.BLOG_ROUTES),
  // },
  // {
  //   path: 'auth',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/account/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  // },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./pages/about/about.route').then((mod) => mod.ABOUT_ROUTE),
  // },
  // {
  //   path: 'services',
  //   loadChildren: () =>
  //     import('./pages/services/service.route').then(
  //       (mod) => mod.SERVICE_ROUTES
  //     ),
  // },
  // {
  //   path: 'contacts',
  //   loadChildren: () =>
  //     import('./pages/contacts/contact.route').then((mod) => mod.CONTACT_ROUTE),
  // },
  // {
  //   path: 'pages/pricing',
  //   loadComponent: () =>
  //     import('./pages/pricing/pricing.component').then(
  //       (mod) => mod.PricingComponent
  //     ),
  //   data: { title: 'pricing' },
  // },
  // {
  //   path: 'pages',
  //   loadChildren: () =>
  //     import('./pages/pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  // },
  // {
  //   path: 'account',
  //   component: AccountLayoutComponent,
  //   loadChildren: () =>
  //     import('./pages/account/pages/account.route').then(
  //       (mod) => mod.ACCOUNT_ROUTES
  //     ),
  // },
]
