import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Category Modal', () => {

   let component = render(<App />)

   beforeEach(()=> {
      let component = render(<App />)
      let btnCategory: any = component.container.querySelector('#crear-categoria-btn')
      userEvent.click(btnCategory)
   })

   test('render component', ()=> {
      component.getByText('Crear Categoria Modal')
   })

   test('close modal', () => {
      let btnCancelar = component.getByText('Cancelar')
      userEvent.click(btnCancelar)
   })

   test('create caregory', () => {
      let btnConfirmar = component.getByText('Confirmar')
      let input = screen.getByPlaceholderText('Inserte Titulo')
      let valueForInpt = 'Trabajo'
      userEvent.type(input, valueForInpt)
      userEvent.click(btnConfirmar)
      screen.getByText(valueForInpt)
   })
})