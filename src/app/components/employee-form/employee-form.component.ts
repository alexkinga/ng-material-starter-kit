import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly form: FormGroup = new FormGroup({ name: new FormControl(), salary: new FormControl(), age: new FormControl() });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employee: FormGroup): void {
    this._employeeService.createEmployee({
      name: employee.get('name')?.value,
      salary: employee.get('salary')?.value,
      age: employee.get('age')?.value
    }).subscribe();
  }
}
