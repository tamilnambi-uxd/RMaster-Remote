import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllChannelsComponent } from './components/all-channels/all-channels.component';
import { DevelopmentPlanComponent } from './components/development-plan/development-plan.component';
import { ManageFiltersComponent } from './components/manage-filters/manage-filters.component';
import { MyStudioComponent } from './components/my-studio/my-studio.component';
import { MySubscriptionComponent } from './components/my-subscription/my-subscription.component';
import { PrefferedLanguageComponent } from './components/preffered-language/preffered-language.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SharedWithMeComponent } from './components/shared-with-me/shared-with-me.component';
import { TagMatchesComponent } from './components/tag-matches/tag-matches.component';
import { TopicSearchComponent } from './components/topic-search/topic-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TopicSearchComponent
  },
  {path: 'topics', component: TopicSearchComponent },
  {path:'tags', component: TagMatchesComponent},
  {path: 'preffered', component: PrefferedLanguageComponent},
  {path: 'recommended', component: RecommendedComponent },
  {path: 'details', component:DevelopmentPlanComponent},
  {path: 'all-channels', component:AllChannelsComponent},
  {path: 'my-studio', component:MyStudioComponent},
  {path: 'my-subscription', component:MySubscriptionComponent},
  {path: 'shared-withme', component:SharedWithMeComponent},
  {path: 'filters', component:ManageFiltersComponent},
  // {path: 'details', component:DevelopmentPlanComponent}
  // { path: 'recommended', component: RecommendedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiShareRoutingModule { }
