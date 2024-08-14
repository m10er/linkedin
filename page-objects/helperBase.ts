import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class HelperBase{
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    
}