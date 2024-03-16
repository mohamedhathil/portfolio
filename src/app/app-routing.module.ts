import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsCompComponent } from './skills-comp/skills-comp.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [  {path:'', redirectTo:'/portfolio', pathMatch:'full'},
{path:'portfolio',component:ProfileComponent},
{path:'sk',component:SkillsComponent},
{path:'skills',component:SkillsCompComponent},
{path:'exp',component:ExperienceComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
