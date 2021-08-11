exports.config = {
    specs: ['test.js'],
    capabilities:{'browserName': 'chrome'},
    onPrepare(){ 
    browser.driver.manage().window().maximize();
    },
    onComplete(){
    },
    };