import HomePage from  '../pageobjects/home.page';
import fileUploadPage from '../pageobjects/fileUpload.page';


describe('Perform various actions on platform ', () => {
    it('User should be upload file', async () => {
        await HomePage.open();
        await HomePage.open_file_upload();
        await fileUploadPage.file_upload();
        
    });
});


