import React from 'react';
import { configure } from 'enzyme';
import Enzyme, {shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// serialize snapshots to readable format
// expect.addSnapshotSerializer(createSerializer({mode: `deep`}));

// make all enzyme functions available in all test files wiithout importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount; 