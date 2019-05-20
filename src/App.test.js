import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  { mount } from 'enzyme';

it('renders without crashing', () => {
    mount(<App />);
});


it('does addition', () => {
    const wrapper = mount(<App />);

    wrapper.find('#four').simulate('click');
    wrapper.find('#add').simulate('click');
    wrapper.find('#three').simulate('click');
    wrapper.find('#equals').simulate('click');

    expect(wrapper.find('.input').text()).toBe('7');
});

it('does subtraction', () => {
    const wrapper = mount(<App />);

    wrapper.find('#nine').simulate('click');
    wrapper.find('#minus').simulate('click');
    wrapper.find('#one').simulate('click');
    wrapper.find('#equals').simulate('click');

    expect(wrapper.find('.input').text()).toBe('8');
});

it('does multiplication', () => {
    const wrapper = mount(<App />);

    wrapper.find('#two').simulate('click');
    wrapper.find('#five').simulate('click');
    wrapper.find('#times').simulate('click');
    wrapper.find('#one').simulate('click');
    wrapper.find('#equals').simulate('click');

    expect(wrapper.find('.input').text()).toBe('25');
});

it('does division', () => {
    const wrapper = mount(<App />);

    wrapper.find('#two').simulate('click');
    wrapper.find('#divide').simulate('click');
    wrapper.find('#one').simulate('click');
    wrapper.find('#equals').simulate('click');

    expect(wrapper.find('.input').text()).toBe('2');
});

it('does not crash when dividing by zero', () => {
    const wrapper = mount(<App />);

    wrapper.find('#two').simulate('click');
    wrapper.find('#divide').simulate('click');
    wrapper.find('#zero').simulate('click');
    wrapper.find('#equals').simulate('click');

    expect(wrapper.find('.input').text()).toBe('NaN');
});

