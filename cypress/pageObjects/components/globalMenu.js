
class globalMenu{

    elements ={
        storageMenuLink : () => cy.get('#mainHeaderMenu>li:nth-child(8)'),
        moveInSubmenuLink : () => cy.get('a>span.show-for-medium')
    }

    clickMenu(menu, submenu){
        if (menu == 'Storage'){
            this.elements.storageMenuLink().realHover('mouse');
            cy.get('a').contains(submenu).click();
        }
    }

    clickStorageMenuLink(){
        this.elements.storageMenuLink().realHover('mouse');
    }

    clickMoveInSubmenuLink(){
        this.elements.moveInSubmenuLink().click();
    }
}

module.exports = new globalMenu();