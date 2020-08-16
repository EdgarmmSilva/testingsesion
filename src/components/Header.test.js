import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

it('Debe devolver al home', ()=>{

    const wrapper = shallow(<Header/>); 
    const ancor = wrapper.find('a.a1'); 
    const result = ancor.text(); 

    expect(result).toBe('Home');

})

it('Debe devolver al Nosotros', ()=>{

    const wrapper = shallow(<Header/>); 
    const ancor = wrapper.find('a.a2'); 
    const result = ancor.text(); 

    expect(result).toBe('Nosotros');

})

it('Debe devolver al blog', ()=>{

    const wrapper = shallow(<Header/>); 
    const ancor = wrapper.find('a.a3'); 
    const result = ancor.text(); 

    expect(result).toBe('Contactos');

})





