import {review} from "../Page_classes/review"
import exl from 'xlsx'
import { test,expect } from "@playwright/test";
import {homepage} from '../Page_classes/home'
import {PIM} from '../Page_classes/pim'
import { AddEmp } from "../Page_classes/addemp";
test.describe('Add one Employee',async()=>{
    function xl(path : string, sheet : string){
        const WB = exl.readFile(path)
        const WS : any = WB.Sheets[sheet]
        const Emp = exl.utils.sheet_to_json(WS,{header : 1})
        return Emp
    } 
    
    {
        let HomePage : homepage
        let PIMPage : PIM
        let EmpPage : AddEmp
        let revPage : review
        test.beforeEach("launch the application", async({page})=>{
            HomePage = new homepage(page)
            revPage = new review(page)
            PIMPage = new PIM(page)
            EmpPage = new AddEmp(page)
            
            HomePage.myapp()
        })
  
  test("Adding One Employee",async({page})=>{
    test.setTimeout(9000000)
    let xlData : any = xl('../ExcelData/Emplnfo.xlsx','EmpData')

    HomePage.verifyTittle()
    await page.waitForTimeout(500)
    HomePage.checkLogo()
    await page.waitForTimeout(500)
    HomePage.getText()
    await page.waitForTimeout(500)
    HomePage.EnterText()
    await page.waitForTimeout(500)
    HomePage.Click()
    await page.waitForTimeout(500)
    PIMPage.verifyLogo()
    await page.waitForTimeout(500)
    PIMPage.GetText()
    await page.waitForTimeout(500)
    for(let i = 1 ; i <= xlData.length -1 ; i++ ){
          PIMPage.PIMHover()
    await page.waitForTimeout(500)
    PIMPage.AddEmp()
    await page.waitForTimeout(500)
    EmpPage.checkLogo()
    await page.waitForTimeout(500)

  EmpPage.FrameEnter(xlData[i][0].toString(),xlData[i][1],xlData[i][2],xlData[i][3],xlData[i][4])
  await page.waitForTimeout(2000)
    EmpPage.frameclick()
    await page.waitForTimeout(3000)
    revPage.fBack()
   await page.waitForTimeout(2000)
    }
    
  })
}
})

