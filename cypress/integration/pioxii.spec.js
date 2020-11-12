describe('Abrir página de Pio xii', () => {
    it('Abrir página', () => {
        cy.visit('https://pioxii.phidias.co/')
    })
    it('ingresar usuario y contraseña', ()=> {
        cy.get('#autofocus').type('diana.melo94')
        cy.get('fieldset > :nth-child(2) > input').type('coralmega9005')
        cy.get('[type="submit"]').click()
    })
})

hh