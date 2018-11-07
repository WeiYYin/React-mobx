import React, {Component} from 'react'
import {Row,Col,DatePicker ,Radio} from 'antd'
import moment from 'moment';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class date extends Component {
    constructor(props){
        super(props)
        this.state={
            size:'default',
            startValue: null,
            endValue: null,
            endOpen: false,
        }
    }
    render() {
        let onChange = (date, dateString)=>{
            console.log(date, dateString);
        }
        let code = (show,code,title,i)=>{
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'> <span>{title}</span> </div>
                    {!!code?code:''}
                </section>
            </section>
        }
        let datePicker =  ()=><DatePicker onChange={onChange} />
        let monthPicker  = ()=><MonthPicker onChange={onChange} placeholder="Select month" />
        let rangePicker =  ()=><RangePicker onChange={onChange} />
        let weekPicker = ()=><WeekPicker onChange={onChange} placeholder="Select week" />
        let date = [datePicker,monthPicker,rangePicker,weekPicker]
        const dateFormat = 'YYYY/MM/DD';
        const monthFormat = 'YYYY/MM';
        let left = [
            {
                title:'基本',
                show: <div>
                    {
                        date.map((el,i)=>{
                            return <div key={i} style={{margin:'10px 0'}}> {el()} </div>
                        })
                    }
                </div>,
                code: <p>
                    最简单的用法，在浮层中可以选择或者输入日期。 <br/> 
                    日期类组件包括以下四种形式。 
                    <code>datePicker</code>  <code>monthPicker</code> 
                    <code>rangePicker</code> <code>weekPicker</code>
                </p>
            },
            {
                title:'三种大小',
                show: <div>
                    <Radio.Group value={this.state.size} onChange={(e)=>{
                        this.setState({
                            size:e.target.value,
                        })
                    }}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br /><br />
                    <DatePicker size={this.state.size} />
                    <br /><br />
                    <MonthPicker size={this.state.size} placeholder="Select Month" />
                    <br /><br />
                    <RangePicker size={this.state.size} />
                    <br /><br />
                    <WeekPicker size={this.state.size} placeholder="Select Week" />
                </div>,
                code: <p>三种大小的输入框，若不设置，则为 <code>default</code>.  <code>large</code> <code>default</code> <code>small</code> </p>
            },
            {
                title:'禁用',
                show: <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />,
                code: <p>选择框的不可用状态。</p>
            },
            {
                title:'自定义日期范围选择',
                show: <div>
                    <DatePicker
                        disabledDate={(startValue)=>{
                            const endValue = this.state.endValue;
                            if (!startValue || !endValue) {
                                return false;
                            }
                            return startValue.valueOf() > endValue.valueOf();
                        }}
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        value={this.state.startValue}
                        placeholder="Start"
                        onChange={(value)=>{
                            this.setState({
                                startValue: value,
                            });
                        }}
                        onOpenChange={(open) => {
                            if (!open) {
                                this.setState({ endOpen: true });
                                }
                            }
                        }
                    />
                    <DatePicker
                        disabledDate={(endValue) => {
                            const startValue = this.state.startValue;
                            if (!endValue || !startValue) {
                                return false;
                            }
                            return endValue.valueOf() <= startValue.valueOf();
                        }}
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        value={this.state.endValue}
                        placeholder="End"
                        onChange={(value)=>{
                            this.setState({
                                endValue: value,
                            });
                        }}
                        open={this.state.endOpen}
                        onOpenChange={(open) => {
                            if (!open) {
                                this.setState({ endOpen: open });
                                }
                            }
                        }
                    />
                </div>,
                code: <p>当 <code>RangePicker</code> 无法满足业务需求时，可以使用两个 <code>DatePicker</code> 实现类似的功能。</p>
            },
            {
                title:'定制的日期单元格',
                show: <div>
                    <DatePicker
                        dateRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                            <div className="ant-calendar-date" style={style}>
                                {current.date()}
                            </div>
                            );
                        }}
                    />
                    <RangePicker
                        dateRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                            <div className="ant-calendar-date" style={style}>
                                {current.date()}
                            </div>
                            );
                        }}
                    />
                </div>,
                code: <p>使用 <code>dateRender</code> 可以自定义日期单元格的内容和样式。</p>
            }
        ];
        let range = (start, end)=>{
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        }
        let disabledDate = (e)=>{
            return e && e < moment().endOf('day');
        }
        let disabledDateTime = (e)=>{
            return {
                disabledHours: () => range(0, 24).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        let disabledRangeTime = (_, type)=> {
            if (type === 'start') {
            return {
                disabledHours: () => range(0, 60).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
                };
            }
            return {
                disabledHours: () => range(0, 60).splice(20, 4),
                disabledMinutes: () => range(0, 31),
                disabledSeconds: () => [55, 56],
            };
        }
        let right = [
            {
                title:'日期格式',
                show: <div>
                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    <br/><br/>
                    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                    <br /><br/>
                    <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                    />
                </div>,
                code: <p>
                    使用 <code>format</code> 属性，可以自定义日期显示格式。<br/>
                    使用 <code>moment.js </code> 对日期格式进行处理 
                    <a href="http://momentjs.com/" style={{color:'#1890ff'}} target="_blank" rel="noopener noreferrer"> moment.js </a>
                </p>
            },
            {
                title:'不可选择日期',
                show: <div>
                <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                    <br /><br />
                    <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
                    <br /><br />
                    <RangePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledRangeTime}
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                    />
                </div>,
                code: <p>可用 <code>disabledDate</code> 和 <code>disabledTime</code> 分别禁止选择部分日期和时间，其中 <code>disabledTime</code> 需要和 <code>showTime</code> 一起使用。 <code>showTime</code> 选择时间功能 </p>
            },
            {
                title:'预设范围',
                show: <div>
                    <RangePicker
                        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                        onChange={(dates, dateStrings)=>{
                            console.log('From: ', dates[0], ', to: ', dates[1]);
                            console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
                        }}
                        />
                    <br /><br />
                    <RangePicker
                        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                        showTime
                        format="YYYY/MM/DD HH:mm:ss"
                        onChange={onChange}
                    />
                </div>,
                code: <p>可以预设常用的日期范围以提高用户体验。</p>
            },
            {
                title:'额外的页脚',
                show: <div>
                    <DatePicker renderExtraFooter={() => 'extra footer'} />
                    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                    <RangePicker renderExtraFooter={() => 'extra footer'} />
                    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                    <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
                </div>,
                code: <p>在浮层中加入额外的页脚，以满足某些定制信息的需求。</p>
            }
        ];
        return ( 
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el,i)=>{
                                return code(el.show,el.code,el.title,i);
                            })
                        }
                    </Col>
                    <Col span={12}>
                        {
                            right.map((el,i)=>{
                                return code(el.show,el.code,el.title,i);
                            })
                        }
                    </Col>
                </Row>
            </section>
        )
    }
}

export default date
