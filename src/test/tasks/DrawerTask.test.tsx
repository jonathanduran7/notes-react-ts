import '@testing-library/jest-dom/extend-expect'
import { styled } from '@mui/material/styles';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import DrawerTask from '../../pages/tasks/components/DrawerTask';
import App from '../../App';
import userEvent from '@testing-library/user-event';

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: 'flex-end',
}));

describe('Drawer Task Component', ()=>{

   const handleOpenModalMocks = jest.fn()

   const handleDrawerClose = jest.fn()

   let propsMocks = {
      open: true,
      handleOpenModal: handleOpenModalMocks,
      handleDrawerClose: handleDrawerClose,
      theme: '',
      DrawerHeader: DrawerHeader
   }

   let component = render(<DrawerTask {...propsMocks}/>)

   beforeEach(()=> {
      component = render(<DrawerTask {...propsMocks}/>)
   })

   test('should render component', () => {
      expect(component.container).toHaveTextContent('Crear Categoria')
   })

   test('should open modal crear categoria', () => {
      let componentMain = render(<App/>)
      let btnCategory: any = componentMain.container.querySelector('#crear-categoria-btn')
      userEvent.click(btnCategory)

      componentMain.getByText('Crear Categoria Modal')
      componentMain.getByText('Confirmar')
      componentMain.getByText('Cancelar')
   })
})