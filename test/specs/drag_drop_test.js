import HomePage from  '../pageobjects/home.page';
import DragDropPage from  '../pageobjects/drag_drop.page';

describe('Perform various actions on platform ', () => {
    it('User should be able to drag and drop an element', async () => {
        await HomePage.open();
        await HomePage.open_drag_drop();
        await DragDropPage.drag_drop();
    });
});


