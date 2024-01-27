import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [SidebarComponent, SpinnerComponent, ThemeToggleComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, SpinnerComponent, ThemeToggleComponent],
})
export class SharedModule {}
