import Homepage from "../pages/Homepage";
import Topbar  from "../pages/components/Topbar";
import Loginpage from "../pages/Loginpage";

describe("Automation Test for Zero Web App", () => {
    let homepage
    let topbar
    let loginpage

    beforeAll(async () =>{
        jest.setTimeout(35000)
        homepage= new Homepage()
        topbar= new Topbar()
        loginpage=new Loginpage()
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
     it("Login page", async () => {
        await loginpage.visit()
        await loginpage.isloginFormDisplayed()
        await loginpage.userLogin('admin','123456')
        
     })


})