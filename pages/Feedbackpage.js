import Basepage  from './Basepage'

export default class Feedbackpage extends Basepage{
    async visitFeedback(){
        await page.waitFor(1500);
        await page.waitForSelector("#feedback")
        await page.click("#feedback")
       
    }
    async feedbackData(name, message, subject, comm){
        await page.waitFor(1500);
        await page.waitForSelector("#name")
        await page.type("#name", name)
        await page.type("#email", message)
        await page.type("#subject", subject)
        await page.waitFor(1000);
        await page.type("#comment", comm)
        await page.click("input[type$='submit']")

    }
}