import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homepage extends Page {
    /**
     * define selectors using getter methods
     */
    get drag_drop_link () { return $('a=Drag and Drop') }
    get file_upload_link () {return $('a=File Upload')}
    get dynamic_control_link () {return $('a=Dynamic Controls')}
    // get inputPassword () { return $('#password') }
    // get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async open_drag_drop () {
       await  this.drag_drop_link.click();

    }

    async open_file_upload () {
        await this.file_upload_link.click();
    }

    async open_dynamic_control () {
        await this.dynamic_control_link.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new homepage();
