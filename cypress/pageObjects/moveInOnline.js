
class moveInOnline{

    elements ={
        locationTBox : () => cy.get('input[name="SearchKeyword"]'),
        findStorageBtn : () => cy.get('button.expanded[type="submit"]'),
        errorMsg : () => cy.get('div.validation-summary-errors')
    }

    addlocation(loc){
        this.elements.locationTBox().clear().type(loc);
    }

    clickFindStorageBtn(){
        this.elements.findStorageBtn().click();
    }

    getErrorMsg(){
        return cy.get(this.elements.errorMsg);
    }
}

module.exports = new moveInOnline();