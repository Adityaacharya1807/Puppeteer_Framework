import Basepage from './Basepage'

export default class Loginpage extends Basepage{
    async visit(){
        await page.goto('http://zero.webappsecurity.com/login.html')
    }
    async isloginFormDisplayed(){
        await page.waitForSelector('#user_login')
        await page.waitForSelector('#user_password')
    }
    async userLogin(username, password){
        await page.waitForSelector('#login_form')
        await page.type('#user_login',username)
        await page.type('#user_password',password)
        await page.click("input[type$='submit']")
    }
}