import Homepage from "../pages/Homepage";
import Topbar  from "../pages/components/Topbar";
import Loginpage from "../pages/Loginpage";
import Feedbackpage from "../pages/Feedbackpage";

describe("Automation Test for Zero Web App", () => {
    let homepage
    let topbar
    let loginpage
    let feedback

    beforeAll(async () =>{
        jest.setTimeout(35000)
        homepage= new Homepage()
        topbar= new Topbar()
        loginpage=new Loginpage()
        feedback= new Feedbackpage()
    })
    it("homepage should work", async () => {
       await homepage.visit()
    })
    it("navbar should be displayed.", async () => {
        await homepage.isNavbarDispalyed()
        await topbar.isTopbarDisplayed()
     })
      it("homepage should be clicked.", async () => {
         await homepage.clickBankingButton()
      })
     it("Feedback page", async () => {
        await feedback.visitFeedback()
        await  feedback.feedbackData('aditya','anshu.ach18@gmail.com','Hello','Whats your name ?')    
        //await  page.pdf({path:"example.pdf", format:"A4"})// Browser Should be in headless mode
    })
      it("Login page", async () => {
         await loginpage.visit()
         await loginpage.isloginFormDisplayed()
         await loginpage.userLogin('admin','123456')
         const metrics= await page.evaluate(() => JSON.stringify(window.performance))
         console.log(metrics)
        
      })


})