import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllChannelsComponent } from './ui-share/components/all-channels/all-channels.component';
import { DevelopmentPlanComponent } from './ui-share/components/development-plan/development-plan.component';
import { ManageFiltersComponent } from './ui-share/components/manage-filters/manage-filters.component';
import { MyStudioComponent } from './ui-share/components/my-studio/my-studio.component';
import { MySubscriptionComponent } from './ui-share/components/my-subscription/my-subscription.component';
import { PrefferedLanguageComponent } from './ui-share/components/preffered-language/preffered-language.component';
import { RecommendedComponent } from './ui-share/components/recommended/recommended.component';
import { SharedWithMeComponent } from './ui-share/components/shared-with-me/shared-with-me.component';
import { TagMatchesComponent } from './ui-share/components/tag-matches/tag-matches.component';
import { TopicSearchComponent } from './ui-share/components/topic-search/topic-search.component';
import { HomeComponent } from './ui-share/home/home.component';


const routes: Routes = [  
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  // },
  
  { path: 'home',
    loadChildren: () => import('./ui-share/ui-share.module').then( m => m.UiShareModule),
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
