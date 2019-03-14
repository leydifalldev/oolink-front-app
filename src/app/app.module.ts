import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import 'hammerjs';

import { AppComponent } from './app.component';
import { NgRaptorioModule } from '../components/raptorio.module';
import { appRoutes } from './app.routes';
import { PanelUserComponent } from './user/user-page.component';
import { UserDetailsComponent } from './user/details/user-details.component';

import { ProfileResumeComponent } from './user/details/resume/resume.component';
import { SkillsGroupPanelComponent } from './user/details/skills/skills-group-panel/skills-group-panel.component';

import { UserMainSkillsPanelComponent } from './user/details/skills/main-skills-panel/main-skills.panel';
@NgModule({
  declarations: [
    AppComponent,
    PanelUserComponent,
    UserDetailsComponent,
    ProfileResumeComponent,
    SkillsGroupPanelComponent,
    UserMainSkillsPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgRaptorioModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
