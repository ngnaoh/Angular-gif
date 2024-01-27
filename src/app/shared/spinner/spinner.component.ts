import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) {}

  get list() {
    return new Array(4);
  }
}
