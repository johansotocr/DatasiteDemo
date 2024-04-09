
class storageResults{

    elements ={
        headLbl: () => cy.get('div.cell>h1')
    }

   getHeadLbl(){
        return cy.get(this.elements.headLbl);
    }
}

module.exports = new storageResults();