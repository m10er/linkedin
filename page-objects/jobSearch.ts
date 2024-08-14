import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class JobSearchPage extends HelperBase{
    readonly jobsLinkOnHeader : Locator;
    readonly jobsTextBox :Locator;
    readonly datePostedFilterButton : Locator;
    readonly pastWeekFilter : Locator;
    readonly applyCurrentFilterToShowButton : Locator;
    readonly cityStateZipCodeTextbox : Locator;
    readonly searchJob: Locator;
    readonly jobSearchResultcards: Locator;    
    readonly jobSearchSaveButton: Locator;


    constructor(page:Page){
        super(page);
        this.jobsLinkOnHeader = page.getByRole('link', { name: 'Jobs', exact: true });
        this.jobsTextBox = page.getByRole('combobox', { name: 'Search by title, skill, or' });
        this.datePostedFilterButton =  page.getByLabel('Date posted filter. Clicking');
        this.pastWeekFilter = page.getByText('Past week', { exact: true });
        this.applyCurrentFilterToShowButton = page.getByRole('button', { name: 'Apply current filter to show' });
        this.cityStateZipCodeTextbox =  page.getByRole('combobox', { name: 'City, state, or zip code' });
        this.jobSearchResultcards = page.locator('[class="scaffold-layout__list-container"] .jobs-search-results__list-item');
        this.jobSearchSaveButton = page.getByRole('button', { name: 'Save' });    
    }

    async searchJobInSwitzerland(){
        await this.jobsLinkOnHeader.click();
        await this.jobsTextBox.fill('Software Tester');
        await this.jobsTextBox.press('Enter');
        await this.datePostedFilterButton.waitFor();
        await this.datePostedFilterButton.click();
        await this.pastWeekFilter.click();


        const text= await this.applyCurrentFilterToShowButton.textContent();

        if(text !== 'Show 0 results'){
        await this.applyCurrentFilterToShowButton.click();
            for( const card of await this.jobSearchResultcards.all()){
                    await card.click();
                    if(await this.jobSearchSaveButton.isVisible()){
                        await this.jobSearchSaveButton.click();
                    }
                   
            }
            
        } else{
            throw new Error('No results found');
        }


       
        await this.applyCurrentFilterToShowButton.click();
     
    }

}