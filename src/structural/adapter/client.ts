import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { EmailValidatorFunctionAdapter } from "./validation/email-validator-function-adapter";

function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log('Is valid (Class)')
    } else {
        console.log('Is invalid (Class)')
    }
};

function validateEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log('Is valid (Function)')
    } else {
        console.log('Is invalid (Function)')
    }
};

const email = 'test@mail.com';

validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFn(EmailValidatorFunctionAdapter, email);