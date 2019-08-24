import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core/core.component';
import {PostTeaserComponent} from './core/posts/post-teaser/post-teaser.component';
import {PostDetailComponent} from './core/posts/post-detail/post-detail.component';
import {PostTeaserListComponent} from './core/posts/post-teaser-list/post-teaser-list.component';
import {PostEditComponent} from './core/posts/post-edit/post-edit.component';
import {ProfileComponent} from './core/user/profile/profile.component';
import {HeaderComponent} from './core/header/header.component';
import {
  NzAvatarModule,
  NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzIconModule, NzInputModule,
  NzModalModule,
  NzPageHeaderModule,
  NzTabsModule
} from 'ng-zorro-antd';
import {SettingComponent} from './core/user/setting/setting.component';
import {PersonalInfoComponent} from './core/user/profile/personal-info/personal-info.component';
import {CredentialsComponent} from './core/user/profile/credentials/credentials.component';
import {EditorComponent} from '../editor/editor.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CoreComponent, PostTeaserComponent, PostDetailComponent, PostTeaserListComponent, PostEditComponent, ProfileComponent, HeaderComponent, SettingComponent, PersonalInfoComponent, CredentialsComponent,
    EditorComponent],

  exports: [
    CoreComponent, PostTeaserComponent, PostDetailComponent, PostTeaserListComponent, PostEditComponent, ProfileComponent, HeaderComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzAvatarModule,
    NzCardModule,
    NzIconModule,
    NzTabsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule {
}
