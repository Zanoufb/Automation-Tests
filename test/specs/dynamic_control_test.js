import HomePage from  '../pageobjects/home.page';
import DynamicControlPage from '../pageobjects/dynamic_control.page';

describe('Dynamic control ', () => {
    it('User should able to perform dynamic actions', async () => {
        await HomePage.open();
        await HomePage.open_dynamic_control();
        await DynamicControlPage.remove_button_action();
        await DynamicControlPage.add_button_action();
        await DynamicControlPage.enable_action();
        await DynamicControlPage.disable_action();
    });
});


