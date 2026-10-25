import {test,expect} from '@playwright/test'
import exl from 'xlsx'
import jdata from 'fs'
test.describe('Add One Employee', ()=>{
    function xl(path : string, sheet : string){
        const WB = exl.readFile(path)
        const WS : any = WB.Sheets[sheet]
        const Emp = exl.utils.sheet_to_json(WS,{header : 1})
        return Emp
    } 
    
    let page : any
    let context
    test.beforeAll("Launching Browser",async({browser})=>{
        const jsonData  = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto(jsonData.URL)
        await page.waitForTimeout(2000)
    })
    test("Login To Application", async()=>{
        const jsonData = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        
        const Logindata : any = xl("./Emplnfo.xlsx","LoginData")
        await page.locator(jsonData.UNXpath).fill(Logindata[1][0]) 
        await page.locator(jsonData.UPXpath).fill(Logindata[1][1])
        await page.keyboard.press('Enter')
        await page.waitForTimeout(2000) 
           
    })
    test("Add One Employee ", async()=>{
        const jsonData = JSON.parse(jdata.readFileSync('./LoginData.json','utf-8'))
        const Logindata : any = xl("./Emplnfo.xlsx","EmpData")
        page.locator(jsonData.XPIM).hover()
        await page.waitForTimeout(2000)
        page.locator(jsonData.XEMP).click()
        await page.waitForTimeout(2000)
        const f= page.frameLocator(jsonData.XFRAME)
       await  f.locator(jsonData.XEMPID).fill(Logindata[1][0].toString())
       await f.locator(jsonData.XLNAME).fill(Logindata[1][1])
       await f.locator(jsonData.XFNAME).fill(Logindata[1][2])
       await f.locator(jsonData.XMNAME).fill(Logindata[1][3])
       await f.locator(jsonData.XNNAME).fill(Logindata[1][4])
       await f.locator(jsonData.XPHOTO).setInputFiles('screenshot.jpg')
       await page.screenshot({
        path :'screenshot.png',full:true
       })
       await page.waitForTimeout(2000)
        
})
})