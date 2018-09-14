import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'flatpickr';

    name: string;
    public form: FormGroup;
    constructor(public formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            birthday: '',
        });

        this.form.patchValue({ birthday: new Date() });
    }

    public submit() {
        console.log(this.form.value);
    }
}
