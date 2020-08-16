import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Ticket from './components/ticket';
import Footer from './components/Footer';
// por cada it tenemos un testing, el it es el contexto de un testing, es un ente testeado
it("Debe hacer el render de los componentes hijos Footer y Ticket", () =>{
    const wrapper = shallow(<App/>); //shallow nos ayuda a testear componentes, simepre tenemos que importar los componentes
    const footer = wrapper.find(Footer); 
    const ticket = wrapper.find(Ticket);

    expect(footer.exists()).toBe(true);
    expect(ticket.exists()).toBe(true);
    




})