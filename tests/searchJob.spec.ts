import {test} from '../test-options.ts'


test('has title', async ({ pageManager }) => {

    await pageManager.home().loadHomePage(process.env.URL);
    await pageManager.home().signIn(process.env.MAIL, process.env.PASSWORD);
    await pageManager.jobSearch().searchJobInSwitzerland();


});


