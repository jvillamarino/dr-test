import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { VisitService } from 'src/app/shared/service/visit.service';

@Component({
  selector: 'create-visit-form',
  templateUrl: './create-visit-form.component.html',
  styleUrls: ['./create-visit-form.component.scss']
})
export class CreateVisitFormComponent implements OnInit {

  form: FormGroup;
  user: User;

  constructor(
    formBuilder: FormBuilder,
    private visitService: VisitService
  ) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      first_surname: ['', [Validators.required, Validators.maxLength(20)]],
      second_surname: ['', [Validators.required, Validators.maxLength(20)]],
      reason: ['', [Validators.required, Validators.maxLength(40)]]
    })
  }

  ngOnInit() {
  }

  save() {
    this.user = { ...this.form.value, type: 'VISITOR' };
    this.visitService.saveVisit(this.user).subscribe((res) => {
      console.log(res)
    })
  }

}
