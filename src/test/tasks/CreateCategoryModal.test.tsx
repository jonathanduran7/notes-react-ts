import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import TasksPage from '../../pages/tasks/TasksPage';

describe('Category Modal', () => {


   test('render component', ()=> {
      let component = render(<TasksPage />)
      let btnCategory: any = component.container.querySelector('#crear-categoria-btn')
      userEvent.click(btnCategory)
      component.getByText('Crear Categoria Modal')
   })

   test('close modal', () => {
      let component = render(<TasksPage />)
      let btnCategory: any = component.container.querySelector('#crear-categoria-btn')
      userEvent.click(btnCategory)

      let btnCancelar = component.getByText('Cancelar')
      userEvent.click(btnCancelar)
   })

   test('create caregory', () => {
      let component = render(<App />)
      let btnCategory: any = component.container.querySelector('#crear-categoria-btn')
      userEvent.click(btnCategory)

      let btnConfirmar = component.getByText('Confirmar')
      let input = screen.getByPlaceholderText('Inserte Titulo')

      userEvent.type(input, 'Universidad')
      userEvent.click(btnConfirmar)

      expect(component.container).toHaveTextContent('Universidad')
   })
})