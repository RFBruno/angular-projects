import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule, PipesModule],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UsersListComponent,
  ],
})
export class ComponentsModule {}
