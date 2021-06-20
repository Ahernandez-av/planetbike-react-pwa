import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Segment = styled.div`

`

export default function Navigation() {

  return(
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
  </Tabs>
  )
}