import Page from './page';

class dragDrop extends Page {
   
    // const elem () { await $('#column-a') }
    // const target () { return $('#column-b') }
    

    async drag_drop () {
        const drag = await $('#column-a')
        drag.waitForExist(5000)
        const drop = await $('#column-b')
        drag.waitForExist(5000)
        // drag and drop to other element
        await drag.dragAndDrop(drop, 5000)
    }
}
export default new dragDrop();