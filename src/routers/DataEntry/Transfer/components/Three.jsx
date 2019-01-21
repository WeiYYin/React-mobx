import React, {Component} from 'react'
import {Transfer,Button} from 'antd'

export class Three extends Component {
    constructor(props){
        super(props)
        this.state={
            mockData:[],
            targetKeys:[]
        }
        
    }
    componentDidMount(){
        this.getMockData();
    }
    getMockData = ()=>{
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({mockData,targetKeys})
    }
    handleChange = (targetKeys)=>{
        this.setState({ targetKeys });
    }
    renderFooter = ()=>{
        return <Button
        size="small"
        style={{ float: 'right', margin: 5 }}
        onClick={this.getMockData}
        >
            reload
        </Button>
    }
    render() {
        let {mockData,targetKeys} = this.state;
        return (
            <Transfer 
                dataSource={mockData}
                showSearch
                listStyle={{
                    width: 250,
                    height: 300,
                }}
                render={(item )=>`${item.title}-${item.description}`}
                operations={['to right', 'to left']}
                targetKeys={targetKeys}
                onChange={this.handleChange}
                footer={this.renderFooter}
            />
        )
    }
}

export default Three
