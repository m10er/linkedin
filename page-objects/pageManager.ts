import { Page } from "@playwright/test";
import { HomePage } from './homePage';
import {JobSearchPage} from './jobSearch';

export class PageManager{

    private readonly page: Page;
    private readonly jobSearchPage: JobSearchPage;
    private readonly homePage : HomePage;

    constructor(page:Page){
        this.page = page;
        this.jobSearchPage = new JobSearchPage(this.page);
        this.homePage = new HomePage(this.page);
    }
    
    jobSearch(){
        return this.jobSearchPage;
    }

    home(){
        return this.homePage;
    }


}