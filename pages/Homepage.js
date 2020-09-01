import Basepage from './Basepage';
const puppeteer = require('puppeteer')

export default class Homepage extends Basepage {
    async visit() {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.waitForSelector("#nav")
    }
    async isNavbarDispalyed() {

        await page.waitForSelector("#pages-nav")
        await page.waitForSelector("#homeMenu")
        await page.waitForSelector("#onlineBankingMenu")
        await page.waitForSelector("#feedback")
    }
    async clickHomepageButton() {
        await page.click('#homeMenu')
    }
    async clickBankingButton() {
        await page.click('#onlineBankingMenu')
    }
    async clickFeedbackButton() {
        await page.click('#feedback')
    }



}