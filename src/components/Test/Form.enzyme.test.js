import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form/Form.jsx';

describe('Form component con Enzyme (shallow)', () => {

  it('no muestra mensaje si falta completar algún campo', () => {
    const wrapper = shallow(<Form />);

    // Simular escribir en inputs
    wrapper.find('input[placeholder="Tu nombre"]').simulate('change', { target: { value: 'Pedro' } });
    wrapper.find('input[placeholder="Tu email"]').simulate('change', { target: { value: 'pedro@example.com' } });
    wrapper.find('input[placeholder="Tu edad"]').simulate('change', { target: { value: '25' } });
    // No escribimos nada en mensaje

    // Simular submit
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    // Verificar que no aparece mensaje de gracias
    expect(wrapper.text()).not.toContain('Gracias');
  });

  it('muestra mensaje después del submit con nombre', () => {
    const wrapper = shallow(<Form />);

    // Simular escribir en inputs completos
    wrapper.find('input[placeholder="Tu nombre"]').simulate('change', { target: { value: 'Daniel' } });
    wrapper.find('input[placeholder="Tu email"]').simulate('change', { target: { value: 'dani@example.com' } });
    wrapper.find('input[placeholder="Tu edad"]').simulate('change', { target: { value: '25' } });
    wrapper.find('textarea[placeholder="Tu mensaje"]').simulate('change', { target: { value: 'Soy un capo' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    // Verificar que aparece el mensaje con el nombre
    expect(wrapper.text()).toContain('Gracias, Daniel!');
  });

  it('se puede escribir un email', () => {
    const wrapper = shallow(<Form />);

    const emailInput = wrapper.find('input[placeholder="Tu email"]');
    emailInput.simulate('change', { target: { value: 'daniel@example.com' } });

    expect(wrapper.find('input[placeholder="Tu email"]').props().value).toBe('daniel@example.com');
  });

  it('se puede ingresar una edad', () => {
    const wrapper = shallow(<Form />);
    const edadInput = wrapper.find('input[placeholder="Tu edad"]');
    edadInput.simulate('change', { target: { value: '42' } });

    expect(wrapper.find('input[placeholder="Tu edad"]').props().value).toBe('42');
  });

  it('se puede escribir un mensaje', () => {
    const wrapper = shallow(<Form />);
    const mensajeInput = wrapper.find('textarea[placeholder="Tu mensaje"]');
    mensajeInput.simulate('change', { target: { value: 'Hola mundo' } });

    expect(wrapper.find('textarea[placeholder="Tu mensaje"]').props().value).toBe('Hola mundo');
  });

});
