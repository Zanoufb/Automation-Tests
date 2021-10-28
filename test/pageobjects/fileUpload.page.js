import Page from './page';
class fileUpload extends Page {
   
    async file_upload () {

    const input = $('#file-upload')
    const uploadBtn = $('#file-submit') 
    const file_uploaded_text = $('h3=File Uploaded!') 
    const path = require('path');
    const filePath = path.join(__dirname, '../data/tree.png');
    await input.setValue(filePath); 
    await uploadBtn.click();
    await expect(file_uploaded_text).toBeDisplayed()
    await browser.pause(10000);
    }   
} 
export default new fileUpload();       