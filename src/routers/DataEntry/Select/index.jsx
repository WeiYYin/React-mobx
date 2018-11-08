import React, {Component} from 'react'
import Common from '@/components/common/index'
import { Select } from 'antd';

const {Option,OptGroup} = Select;
class index extends Component {
    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        let left = [
            {
                show:<div>
                    <Select defaultValue="lucy" style={{ width: 120,marginRight:10}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>,
                title:'基本使用',
                code: <p>
                    基本使用， disabled 设置 可选与不可选
                </p>
            },
            {
                show: <div><Select
                    mode="multiple"
                    style={{ width: '100%',marginBottom:20 }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                >
                    {children}
                </Select>
                    <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Tags Mode"
                >
                    {children}
                </Select></div>,
                title:'多选',
                code:<p>多选，从已有条目中选择（scroll the menu）  <br/> 
                    <code>mode</code> 设置 Select 的模式为多选或标签   <code>'multiple' | 'tags'	</code> <br/>
                    <code> size </code>  <code>large default small</code>
                </p>,
            },
        ];
        let right = [
            {
                show:<Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>,
                title:'带搜索框',
                code:<p>展开后可对选项进行搜索。 <br/>
                    <code>filterOption</code>  <br/>
                    是否根据输入项进行筛选。当其为一个函数时，会接收 <code>inputValue option</code> 两个参数，当 <code>option</code> 符合筛选条件时，应返回 true，反之则返回 false。
                </p>,
            },
            {
                show:<Select
                    defaultValue="lucy"
                    style={{ width: 200 }}
                >
                    <OptGroup label="Manager">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </OptGroup>
                    <OptGroup label="Engineer">
                        <Option value="Yiminghe">yiminghe</Option>
                    </OptGroup>
                </Select>,
                title:'分组',
                code:<p> 使用 <code>OptGroup</code> 进行分组  <br/> <code>OptGroup label</code>  <code>string|React.Element</code></p>,
            },
        ];
        return (
            <Common left={left} right={right}/>
        )
    }
}

export default index
