import React from 'react'; //declaro el ambito de react
import {shallow} from 'enzyme'; // traigo la herramiento o metodo shallow de enzyme
import Footer from './Footer'; // traigo al componente qe quiero hacer el testing

//it es donde ira lo que quiero que se testee
it('Debe devolver un número telefonico de servicio al cliente', ()=>{
    // las constantes se pueden llamar como tu quieras pero por sencilles, ya tienen nombres especificos
    const wrapper = shallow(<Footer/>); //englobo una constante donde le indico el componente dentro del metodo shallow
    const span = wrapper.find('span'); //englobo otro componente que busque el tac donde esta lo que quiero testear, en esta constante se pone el nombre de la llave que engloba el texto
    const result = span.text(); //englobo una constante declaramos el resultado que experamos

    expect(result).toBe('Servicio al cliente: 1-800-555-444'); // declaramos lo que tiene que devolver si o si

})