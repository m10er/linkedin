import {test as base} from '@playwright/test'
import { PageManager } from './page-objects/pageManager';


export type TestOptions = {
    url: string;
    pageManager: PageManager;
}

export const test = base.extend<TestOptions> ({
    url:['', {option:true}],

    pageManager:async({page},use) =>{
        const pm = new PageManager(page);
        await use(pm);
    }
}) 