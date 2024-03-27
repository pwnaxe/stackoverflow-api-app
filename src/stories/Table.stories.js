// PrzykładowyComponent.stories.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DataTable from '../components/Table';

const queryClient = new QueryClient();

export default {
  title: 'Table',
  component: DataTable,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});

