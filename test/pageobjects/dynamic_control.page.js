import Page from './page';

class dynamicControl extends Page {
   
    async remove_button_action() {

        const removebtn = $('button=Remove')
        const remove_confirmation_text = $("p=It's gone!")
        
        await removebtn.click();
        await expect(remove_confirmation_text).toBeDisplayed()

    }  
    
    async add_button_action() {

        const addbtn = $('button=Add')
        const add_confirmation_text = $("p=It's back!")
        const a_checkbox = $("div=A checkbox")
        
        await addbtn.click();
        await expect(add_confirmation_text).toBeDisplayed()
        await expect(a_checkbox).toBeDisplayed()
    } 

    async enable_action() {

        const enablebtn = $('button=Enable')
        const enable_text = $("p=It's enabled!")
        await enablebtn.click();
        await browser.pause(5000);
        await expect(enable_text).toBeDisplayed()
    } 

    async disable_action() {

        const disablebtn = $('button=Disable')
        const disable_text = $("p=It's disabled!")
        await disablebtn.click();
        await expect(disable_text).toBeDisplayed()
    } 

} 
export default new dynamicControl();