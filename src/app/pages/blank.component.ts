import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blank',
  template: `a blank page`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BlankComponent {}
