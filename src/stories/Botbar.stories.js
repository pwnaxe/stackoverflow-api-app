import React from 'react';
import Botbar from '../components/Botbar';

export default {
  title: 'Bottom Bar',
  component: Botbar,
};

const Template = (args) => <Botbar {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Jarosław Karpiński © 2024 -- Miłego dnia!',
};


