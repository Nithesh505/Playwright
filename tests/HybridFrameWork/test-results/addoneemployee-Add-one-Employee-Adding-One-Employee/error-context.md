# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addoneemployee.spec.ts >> Add one Employee >> Adding One Employee
- Location: addoneemployee.spec.ts:29:7

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "OrangeHRM - New Level of HR Managemen"
Received: "OrangeHRM"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    - waiting for "http://127.0.0.1/orangehrm-2.5.0.2/login.php" navigation to finish...
    - navigated to "http://127.0.0.1/orangehrm-2.5.0.2/login.php"
    8 × locator resolved to <html>…</html>
      - unexpected value "OrangeHRM - New Level of HR Management"
    5 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
      - unexpected value "OrangeHRM"

```

```yaml
- list:
  - listitem: Welcome selenium
  - listitem:
    - link "Change Password":
      - /url: ./lib/controllers/CentralController.php?mtcode=CPW&capturemode=updatemode&id=USR001
  - listitem:
    - link "Logout":
      - /url: ./index.php?ACT=logout
- list:
  - listitem:
    - link "Admin":
      - /url: ./index.php?menu_no_top=eim
    - list:
      - listitem:
        - link "Company Info":
          - /url: "#"
        - list:
          - listitem:
            - link "General":
              - /url: index.php?uniqcode=GEN&menu_no_top=eim
          - listitem:
            - link "Locations":
              - /url: index.php?uniqcode=LOC&menu_no_top=eim
          - listitem:
            - link "Company Structure":
              - /url: index.php?uniqcode=CST&menu_no_top=eim
          - listitem:
            - link "Company Property":
              - /url: index.php?uniqcode=TCP&menu_no_top=eim&pageNo=1
      - listitem:
        - link "Job":
          - /url: "#"
        - list:
          - listitem:
            - link "Job Titles":
              - /url: index.php?uniqcode=JOB&menu_no_top=eim
          - listitem:
            - link "Job Specifications":
              - /url: index.php?uniqcode=SPC&menu_no_top=eim
          - listitem:
            - link "Pay Grades":
              - /url: index.php?uniqcode=SGR&menu_no_top=eim
          - listitem:
            - link "Employment Status":
              - /url: index.php?uniqcode=EST&menu_no_top=eim
          - listitem:
            - link "EEO Job Categories":
              - /url: index.php?uniqcode=EEC&menu_no_top=eim
      - listitem:
        - link "Qualification":
          - /url: "#"
        - list:
          - listitem:
            - link "Education":
              - /url: index.php?uniqcode=EDU&menu_no_top=eim
          - listitem:
            - link "Licenses":
              - /url: index.php?uniqcode=LIC&menu_no_top=eim
      - listitem:
        - link "Skills":
          - /url: "#"
        - list:
          - listitem:
            - link "Skills":
              - /url: index.php?uniqcode=SKI&menu_no_top=eim
          - listitem:
            - link "Languages":
              - /url: index.php?uniqcode=LAN&menu_no_top=eim
      - listitem:
        - link "Memberships":
          - /url: "#"
        - list:
          - listitem:
            - link "Membership Types":
              - /url: index.php?uniqcode=MEM&menu_no_top=eim
          - listitem:
            - link "Memberships":
              - /url: index.php?uniqcode=MME&menu_no_top=eim
      - listitem:
        - link "Nationality & Race":
          - /url: "#"
        - list:
          - listitem:
            - link "Nationality":
              - /url: index.php?uniqcode=NAT&menu_no_top=eim
          - listitem:
            - link "Ethnic Races":
              - /url: index.php?uniqcode=ETH&menu_no_top=eim
      - listitem:
        - link "Users":
          - /url: "#"
        - list:
          - listitem:
            - link "HR Admin Users":
              - /url: index.php?uniqcode=USR&menu_no_top=eim&isAdmin=Yes
          - listitem:
            - link "ESS Users":
              - /url: index.php?uniqcode=USR&menu_no_top=eim&isAdmin=No
          - listitem:
            - link "Admin User Groups":
              - /url: index.php?uniqcode=USG&menu_no_top=eim
      - listitem:
        - link "Email Notifications":
          - /url: "#"
        - list:
          - listitem:
            - link "Configuration":
              - /url: index.php?uniqcode=EMX&menu_no_top=eim
          - listitem:
            - link "Subscribe":
              - /url: index.php?uniqcode=ENS&menu_no_top=eim
      - listitem:
        - link "Project Info":
          - /url: "#"
        - list:
          - listitem:
            - link "Customers":
              - /url: index.php?uniqcode=CUS&menu_no_top=eim
          - listitem:
            - link "Projects":
              - /url: index.php?uniqcode=PRJ&menu_no_top=eim
          - listitem:
            - link "Project Activities":
              - /url: index.php?uniqcode=PAC&menu_no_top=eim
      - listitem:
        - link "Data Import/Export":
          - /url: "#"
        - list:
          - listitem:
            - link "Define Custom Export":
              - /url: index.php?uniqcode=CEX&menu_no_top=eim
          - listitem:
            - link "Export":
              - /url: index.php?uniqcode=CSE&menu_no_top=eim
          - listitem:
            - link "Define Custom Import":
              - /url: index.php?uniqcode=CIM&menu_no_top=eim
          - listitem:
            - link "Import":
              - /url: index.php?uniqcode=IMP&menu_no_top=eim
      - listitem:
        - link "Custom Fields":
          - /url: index.php?uniqcode=CTM&menu_no_top=eim
  - listitem:
    - link "PIM":
      - /url: ./index.php?menu_no_top=hr
    - list:
      - listitem:
        - link "Employee List":
          - /url: ./lib/controllers/CentralController.php?reqcode=EMP&VIEW=MAIN&sortField=0&sortOrder0=ASC
      - listitem:
        - link "Add Employee":
          - /url: ./lib/controllers/CentralController.php?reqcode=EMP&capturemode=addmode
  - listitem:
    - link "Leave":
      - /url: ./index.php?menu_no_top=leave
    - list:
      - listitem:
        - link "Leave Summary":
          - /url: "#"
        - list:
          - listitem:
            - link "Employee Leave Summary":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Select_Employee_Leave_Summary
      - listitem:
        - link "Define Days Off":
          - /url: "#"
        - list:
          - listitem:
            - link "Days Off":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Holiday_Weekend_List
          - listitem:
            - link "Specific Holidays":
              - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Holiday_Specific_List
      - listitem:
        - link "Define Leave Types":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Type_Summary
      - listitem:
        - link "Assign Leave":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_Apply_Admin_view
      - listitem:
        - link "Leave List":
          - /url: lib/controllers/CentralController.php?leavecode=Leave&action=Leave_FetchLeaveAdmin&NewQuery=1
  - listitem:
    - link "Time":
      - /url: ./index.php?menu_no_top=time
  - listitem:
    - link "Benefits":
      - /url: ./index.php?menu_no_top=benefits
    - list:
      - listitem:
        - link "Health savings plan":
          - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Summary&year=2026
        - list:
          - listitem:
            - link "Define HSP":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Define_Health_Savings_Plans
          - listitem:
            - link "Employee HSP Summary":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Summary&year=2026
          - listitem:
            - link "HSP Payments Due":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=List_Hsp_Due
          - listitem:
            - link "HSP Expenditures":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Expenditures_Select_Year_And_Employee
          - listitem:
            - link "HSP Used":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Hsp_Used_Select_Year&year=2026
      - listitem:
        - link "Payroll schedule":
          - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Benefits_Schedule_Select_Year
        - list:
          - listitem:
            - link "View Payroll Schedule":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=Benefits_Schedule_Select_Year
          - listitem:
            - link "Add Pay Period":
              - /url: lib/controllers/CentralController.php?benefitcode=Benefits&action=View_Add_Pay_Period
  - listitem:
    - link "Recruitment":
      - /url: ./index.php?menu_no_top=recruit
    - list:
      - listitem:
        - link "Job Vacancies":
          - /url: lib/controllers/CentralController.php?recruitcode=Vacancy&action=List
      - listitem:
        - link "Applicants":
          - /url: lib/controllers/CentralController.php?recruitcode=Application&action=List
  - listitem:
    - link "Reports":
      - /url: ./index.php?menu_no_top=rep
    - list:
      - listitem:
        - link "View Reports":
          - /url: index.php?repcode=EMPVIEW&menu_no_top=rep
      - listitem:
        - link "Define Reports":
          - /url: index.php?repcode=EMPDEF&menu_no_top=rep
  - listitem:
    - link "Bug Tracker":
      - /url: ./index.php?menu_no_top=bug
  - listitem:
    - link "Help":
      - /url: "#"
    - list:
      - listitem:
        - link "Help Contents":
          - /url: help.php
      - listitem:
        - link "Support":
          - /url: http://www.orangehrm.com/subscribe-support.shtml
      - listitem:
        - link "Forum":
          - /url: http://www.orangehrm.com/forum/
      - listitem:
        - link "Blog":
          - /url: http://www.orangehrm.com/blog/
- iframe
- link "OrangeHRM":
  - /url: http://www.orangehrm.com
- text: ver 2.5.0.2 © OrangeHRM Inc. 2005 - 2009 All rights reserved.
```

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {review} from "../Page_classes/review"
  2  | import exl from 'xlsx'
  3  | import { test,expect } from "@playwright/test";
  4  | import {homepage} from '../Page_classes/home'
  5  | import {PIM} from '../Page_classes/pim'
  6  | import { AddEmp } from "../Page_classes/addemp";
  7  | test.describe('Add one Employee',async()=>{
  8  |     function xl(path : string, sheet : string){
  9  |         const WB = exl.readFile(path)
  10 |         const WS : any = WB.Sheets[sheet]
  11 |         const Emp = exl.utils.sheet_to_json(WS,{header : 1})
  12 |         return Emp
  13 |     } 
  14 |     
  15 |     {
  16 |         let HomePage : homepage
  17 |         let PIMPage : PIM
  18 |         let EmpPage : AddEmp
  19 |         let revPage : review
  20 |         test.beforeEach("launch the application", async({page})=>{
  21 |             HomePage = new homepage(page)
  22 |             revPage = new review(page)
  23 |             PIMPage = new PIM(page)
  24 |             EmpPage = new AddEmp(page)
  25 |             
  26 |             HomePage.myapp()
  27 |         })
  28 |   
  29 |   test("Adding One Employee",async({page})=>{
  30 |     test.setTimeout(9000000)
  31 |     let xlData : any = xl('../ExcelData/Emplnfo.xlsx','EmpData')
  32 | 
  33 |     HomePage.verifyTittle()
  34 |     await page.waitForTimeout(500)
  35 |     HomePage.checkLogo()
  36 |     await page.waitForTimeout(500)
  37 |     HomePage.getText()
  38 |     await page.waitForTimeout(500)
  39 |     HomePage.EnterText()
  40 |     await page.waitForTimeout(500)
  41 |     HomePage.Click()
  42 |     await page.waitForTimeout(500)
  43 |     PIMPage.verifyLogo()
  44 |     await page.waitForTimeout(500)
  45 |     PIMPage.GetText()
  46 |     await page.waitForTimeout(500)
  47 |     for(let i = 1 ; i <= xlData.length -1 ; i++ ){
  48 |           PIMPage.PIMHover()
  49 |     await page.waitForTimeout(500)
  50 |     PIMPage.AddEmp()
  51 |     await page.waitForTimeout(500)
  52 |     EmpPage.checkLogo()
> 53 |     await page.waitForTimeout(500)
     |                ^ Error: page.waitForTimeout: Test ended.
  54 | 
  55 |   EmpPage.FrameEnter(xlData[i][0].toString(),xlData[i][1],xlData[i][2],xlData[i][3],xlData[i][4])
  56 |   await page.waitForTimeout(2000)
  57 |     EmpPage.frameclick()
  58 |     await page.waitForTimeout(3000)
  59 |     revPage.fBack()
  60 |    await page.waitForTimeout(2000)
  61 |     }
  62 |     
  63 |   })
  64 | }
  65 | })
  66 | 
  67 | 
```