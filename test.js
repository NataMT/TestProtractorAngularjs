describe("Open webpage", function () {
    browser.ignoreSynchronization = true;

    it("Open webpage", function () {
        browser.get("http://thomasburleson.github.io/angularJS-CafeTownsend/#/login")
        console.log("Opened succesfully")
    });

    it("Login Page", function () {
        element(by.model('user.password')).sendKeys('angular');
        element(by.buttonText('Login')).click();
        console.log("Going to employees page");
        browser.sleep(5000);

    });

    it("Create employee", function () {

        element(by.id('bAdd')).click();
        element(by.model('employee.firstName')).sendKeys('Elisa');
        element(by.model('employee.lastName')).sendKeys('Smith');
        element(by.model('employee.email')).sendKeys('elisa@mail.com');
        element(by.buttonText('Save')).click();
        browser.sleep(5000);
    });

    it("Edit employee", function () {
        element(by.id('bEdit')).click();
        element(by.buttonText('Edit')).click();
        element(by.model('employee.firstName')).clear();
        element(by.model('employee.firstName')).sendKeys('Votja');
        element(by.model('employee.startDate')).sendKeys('08-08-2020');
        element(by.buttonText('Save')).click();
        browser.sleep(5000);

    });

    it("Delete employee", function () {
        element(by.id('bDelete')).click();
        browser.sleep(5000);
    });

    it("Logout", function () {
        element(by.buttonText('Logout')).click();
        browser.sleep(5000);
    });


});