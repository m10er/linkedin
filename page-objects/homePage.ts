import { Locator, Page } from "@playwright/test";
import {expect} from "@playwright/test";
import { HelperBase } from "./helperBase";


export class HomePage extends HelperBase{
    readonly signWithEmailButton : Locator
    readonly emailTextBox : Locator
    readonly passwordTextBox : Locator
    readonly signInButton : Locator
    


    constructor(page:Page){
        super(page);
        this.signWithEmailButton = page.locator(':text("Sign in with em")');
        this.emailTextBox = page.getByRole('textbox',{name:'Email or phone'})
        this.passwordTextBox = page.getByLabel('Password');
        this.signInButton = page.getByLabel('Sign in', { exact: true });
    }

    async loadHomePage(url){
        await this.page.goto(url);
    }

    async signIn(email, password){
        await this.signWithEmailButton.click();
        await this.emailTextBox.fill(email);
        await this.passwordTextBox.fill(password);
        await this.signInButton.click();
    }
}