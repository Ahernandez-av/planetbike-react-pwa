import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SpecsPanel from './SpecsPanel'
import Mode1 from '../images/mode-1.png'
import Mode2 from '../images/mode-2.png'
import Mode3 from '../images/mode-3.png'
import Mode4 from '../images/mode-4.png'

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
                  title: "Current Speed",
                  text: "Miles or kilometers per hour | 0-99.9 mph/kph | Increments of 0.1 Mph/Kph"
                },
                { 
                  title: 'Ride Time "RTM"',
                  text: "Up to 9:59:59 | Increments of 1 second"
                }, 
                { 
                  title: 'Ride Distance "DST"',
                  text: "Up to 999.9 M or K | Increments of 0.01 Mph/Kph"
                },
                { 
                  title: 'Odometer "ODO"',
                  text: "Up to 999.9 M or K | Increments of 0.01 M or K (ODO= cumulative distance for BIKE 1 and BIKE 2)"
                }
              ]}
            />
          </TabPanel>
          <TabPanel>
            <SpecsPanel
              image= {Mode2}
              features= {[ 
                { 
                  title: "Current Speed",
                  text: "Miles or kilometers per hour | 0-99.9 mph/kph | Increments of 0.1 Mph/Kph"
                },
                { 
                  title: 'Ride Time "RTM"',
                  text: "Up to 9:59:59 | Increments of 1 second"
                }, 
                { 
                  title: 'Ride Distance "DST"',
                  text: "Up to 999.9 M or K | Increments of 0.01 Mph/Kph"
                },
                { 
                  title: 'Odometer "ODO"',
                  text: "Up to 999.9 M or K | Increments of 0.01 M or K (ODO= cumulative distance for BIKE 1 and BIKE 2)"
                },
                { 
                  title: 'Average Speed "AVS"',
                  text: "0-99.9M mph/kph | Increments of 0.01 Mph/Kph"
                },
                { 
                  title: 'Maximun Speed "Max"',
                  text: "0-99.9M mph/kph | Increments of 0.01 Mph/Kph"
                }
              ]}
            />
          </TabPanel>
          <TabPanel>
            <SpecsPanel
              image= {Mode3}
              features= {[ 
                { 
                  title: "Current Speed",
                  text: "Miles or kilometers per hour | 0-99.9 mph/kph | Increments of 0.1 Mph/Kph"
                },
                { 
                  title: 'Ride Time "RTM"',
                  text: "Up to 9:59:59 | Increments of 1 second"
                }, 
                { 
                  title: 'Ride Distance "DST"',
                  text: "Up to 999.9 M or K | Increments of 0.01 Mph/Kph"
                },
                { 
                  title: 'Odometer "ODO"',
                  text: "Up to 999.9 M or K | Increments of 0.01 M or K (ODO= cumulative distance for BIKE 1 and BIKE 2)"
                },
                { 
                  title: 'Temperature',
                  text: "-19 to 120 F/ -19 to 50C (Protegé 9.0 ONLY)"
                },
                { 
                  title: 'Clock',
                  text: "12 Hr format | Indicated by flashing colon"
                }
              ]}
            />
          </TabPanel>
          <TabPanel>
            <SpecsPanel
              image= {Mode4}
              features= {[ 
                { 
                  title: "Current Speed",
                  text: "Miles or kilometers per hour | 0-99.9 mph/kph | Increments of 0.1 Mph/Kph"
                },
                { 
                  title: 'Ride Time "RTM"',
                  text: "Up to 9:59:59 | Increments of 1 second"
                }, 
                { 
                  title: 'Ride Distance "DST"',
                  text: "Up to 999.9 M or K | Increments of 0.01 Mph/Kph"
                },
                { 
                  title: 'Odometer "ODO"',
                  text: "Up to 999.9 M or K | Increments of 0.01 M or K (ODO= cumulative distance for BIKE 1 and BIKE 2)"
                },
                { 
                  title: 'Bike Odometer "Bike ODO"',
                  text: "Up to 999.9 M or K | Increments of 0.01 Mph/Kph"
                }
              ]}
            />
          </TabPanel>
        </Tabs>
      </div>
    </Segment>
  )
}