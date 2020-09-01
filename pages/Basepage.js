export default class Basepage{
   async wait(time){
       await page.waitFor(time)
   }
   async  getTitle(){
       await page.title()
   }
   async getUrl(){
       await page.url()
   }
}