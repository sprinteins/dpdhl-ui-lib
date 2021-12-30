import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {adapt} from "./adapter";

import '@sprinteins/dpdhl-uilib';

function App() {
    const Theme = adapt('dpdhl-theme-desktop');
    const UIShell = adapt('dpdhl-ui-shell')
    const AppBar = adapt('dpdhl-app-bar')
    const Sidebar = adapt('dpdhl-sidebar')
    const SidebarItem = adapt('dpdhl-sidebar-item')
    const Button = adapt('dpdhl-button');
    const CardSimple = adapt('dpdhl-card-simple')
    const Table = adapt('dpdhl-table');
    const Tr = adapt('dpdhl-tr');
    const Td = adapt('dpdhl-td');
    const Th = adapt('dpdhl-th');
    const Thead = adapt('dpdhl-thead');
    const Tbody = adapt('dpdhl-tbody');
    const Tabs = adapt('dpdhl-tabs')
    const Tab = adapt('dpdhl-tab')
    const Toast = adapt('dpdhl-toast')

    const [log, setLog] = useState('')
    const [isToastOpen, setToastOpen] = useState(true);

    console.log('isToastOpen: ', isToastOpen);

    const menuItems = [
        { label: "Menu 1", click: () => { alert('You have selected "Menu 1"') }},
        { label: "Menu 2", click: () => { alert('You have selected "Menu 2"') }},
        { label: "Menu 3", click: () => { alert('You have selected "Menu 3"') }},
    ]

    const tableTitle = "Table heading"
    const tableFooter = "*Table footer annotation"
    const tableRows = [
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
    ]
    const tableHeaders = ["","Column title 1", "Column title 2"]

    return (
        <div className="App">
            <h1>React App</h1>
            
            <Theme>

                <div className="container">
                    <div>
                        <Button 
                            onClick={ () => setLog('Button Clicked') }
                            type="primary"
                        >
                            Button
                        </Button>
                        </div>

                        <div><Button>Button</Button></div>
                        <div><Button type="text">Button</Button></div>
                        <div><Button type="postyellow">Button</Button></div>

                        <div><Button size="small" type="primary">Button</Button></div>
                        <div><Button size="small" type="secondary">Button</Button></div>
                        <div><Button size="small" type="text">Button</Button></div>
                        <div><Button size="small" type="postyellow">Button</Button></div>

                        <div><Button size="tiny" type="primary">Button</Button></div>
                        <div><Button size="tiny" type="secondary">Button</Button></div>
                        <div><Button size="tiny" type="text">Button</Button></div>
                        <div><Button size="tiny" type="postyellow">Button</Button></div>


                        <div>
                            <CardSimple
                                title="Card Title"
                                content="Card Content"
                                button_label="main action"
                                menu_items={menuItems}
                                onClick={ () => { alert('🐞 you clicked main action' );}}
                            />
                        </div>



                        <div>
                            <Table title={tableTitle} footer={tableFooter}>
                                
                                <Thead slot="head">
                                    <Tr>
                                    { tableHeaders.map( (header,hi) => <Td key={hi}>{header}</Td> )}
                                    </Tr>
                                </Thead>

                                <Tbody slot="body">
                                    {tableRows.map( row => {
                                        return (
                                            <Tr>
                                                {Object.values(row).map( (cell, ci) => <Td key={ci}>{cell}</Td> )}
                                            </Tr>
                                        )
                                    })}

                                </Tbody>

                            </Table>
                        </div>

                        <div>
                            <Tabs>
                                <Tab label="Tab 1 Title">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. 
                                </Tab>
                                <Tab label="Tab 2 Title" active>
                                    At vero eos et accusam et justo duo dolores et ea rebum. 
                                    Stet clita kasd gubergren, no sea takimata sanctus est 
                                    Lorem ipsum dolor sit amet. 
                                </Tab>
                                <Tab label="Tab 3 Title">
                                    Proin consectetur at dui ut mollis. Praesent sit amet tempor sem, 
                                    et egestas lorem. Vestibulum ante ipsum primis in faucibus orci
                                    luctus et ultrices posuere cubilia curae
                                </Tab>
                            </Tabs>
                        </div>
                        <div>
                            {isToastOpen && 
                                <Toast
                                    // open={isToastOpen}
                                    onClose={() => setToastOpen(false)}
                                    type="error"
                                    title="Custom title"
                                    message="And here we go with a more detailed message."/>
                            }       
                        </div>
                        {/* TODO: open prop doesn't force Toast to update (in React only!) */}
                        {/* <Toast
                            open={isToastOpen}
                            onClose={() => setToastOpen(false)}
                            type="error"
                            title="Custom title"
                            message="And here we go with a more detailed message."
                        /> */}

                </div>

            </Theme>

            <div>
                {log}
            </div>
      
        
        </div>
        
        );
    
    
}

export default App
