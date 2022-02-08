import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

    static checkRegistration(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        const regex = /^[a-zA-Z]{2}\d\d[a-zA-Z]{3}$/;
        if (!regex.test(value)) {
            return { invalidRegistration: true };
        }
        return null;
    }
}