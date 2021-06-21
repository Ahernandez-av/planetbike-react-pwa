import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SpecsPanel from './SpecsPanel'
import Mode1 from '../images/specs.png'

const Segment = styled.div`
  display: flex;
  justify-content: center;
  padding: 6.4rem 0 12.8rem 0;

  @media (max-width: 800px) {
    margin: 0;
    padding: 6.4rem 2.4rem;
    margin-bottom: 3.2rem;
  }

  .container{
    max-width: 90rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    .tab-list{
      display: flex;
      margin-top: 6.4rem;

      @media (max-width: 800px) {
        margin-top: 6.4rem;
      }
    }

    .tab{
      color: #AAA;
      font-size: 2.4rem;
      padding: .8rem 1.2rem;
      margin: 0 .8rem;

      @media (max-width: 800px) {
        font-size: 1.8rem;
        padding: .8rem;
      }
    }

    .tab-selected{
      color: #111;
      font-weight: 700;
    }
  }
`

export default function Navigation() {

  return(
    <Segment>
      <div className="container">
        <h2>Function & Specification</h2>

        <Tabs 
        selectedTabClassName="tab-selected"
        >
          <TabList className="tab-list"> 
            <Tab className="tab">Mode 1</Tab>
            <Tab className="tab">Mode 2</Tab> 
            <Tab className="tab">Mode 3</Tab>
            <Tab className="tab">Mode 4</Tab>
          </TabList>

          <TabPanel>
            <SpecsPanel
              image= {Mode1}
              features= {[ 
                { 
                  title: "feature Name",
                  text: "Planet Bike wil donate 25% of our profits from this purchases and any other Planet Bike product you buy, to non-profit bicycle advocacy groups to further benefit your cycling experience."
                }
              ]}
            />
          </TabPanel>
          <TabPanel>
            <p>Any content 2</p>
          </TabPanel>
          <TabPanel>
            <p>Any content 3</p>
          </TabPanel>
          <TabPanel>
            <p>Any content 4</p>
          </TabPanel>
        </Tabs>
      </div>
    </Segment>
  )
}