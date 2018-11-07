import React, {Component} from 'react'
import {Icon,Radio,Row,Col,Button,message } from 'antd'


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
class icon extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:[
                'outlined','filled','twoTone'
            ],
            icon:['border','filled'],
            title:['方向性图标','提示建议性图标','编辑类图标','数据类图标','网站通用图标','品牌和标识'],
            key:['direction','proposal','edit','data','website','brand'],
            outlined:{
                direction:['step-backward','step-forward','fast-backward','fast-forward','shrink','arrows-alt','down','up','left','right','caret-up','caret-down','caret-left','caret-right','up-circle','down-circle','left-circle','right-circle','double-left','double-right','vertical-left','vertical-right','forward','backward','rollback','enter','retweet','swap','swap-left','swap-right','arrow-up','arrow-down','arrow-left','arrow-right','play-circle','up-square','down-square','left-square','right-square','login','logout','menu-fold','menu-unfold','border-bottom','border-top','border-left','border-right','border-horizontal','border-inner','border-verticle','pic-center','pic-left','pic-right','radius-bottomleft','radius-bottomright','radius-upleft','radius-upright','fullscreen','fullscreen-exit'],
                proposal:['question','question-circle','plus','plus-circle','pause','pause-circle','minus','minus-circle','plus-square','minus-square','info','info-circle','exclamation','exclamation-circle','close','close-circle','close-square','check','check-circle','check-square','clock-circle','warning','issues-close','stop'],
                edit:['edit','form','copy','scissor','delete','snippets','diff','highlight','align-center','align-left','align-right','bg-colors','bold','italic','underline','strikethrough','redo','undo','zoom-in','zoom-out','font-colors','font-size','line-height','colum-height','dash','small-dash','sort-ascending','sort-descending','drag','ordered-list','radius-setting'],
                data:['area-chart','pie-chart','bar-chart','dot-chart','line-chart','radar-chart','heat-map','fall','rise','stock','box-plot','fund','sliders'],
                website:['lock','unlock','bars','book','calendar','cloud','cloud-download','code','copy','credit-card','delete','desktop','download','ellipsis','file','file-text','file-unknown','file-pdf','file-word','file-excel','file-jpg','file-ppt','file-markdown','file-add','folder','folder-open','folder-add','hdd','frown','meh','smile','inbox','laptop','appstore','link','mail','mobile','notification','paper-clip','picture','poweroff','reload','search','setting','share-alt','shopping-cart','tablet','tag','tags','to-top','upload','user','video-camera','home','loading','loading-3-quarters','cloud-upload','star','heart','environment','eye','camera','save','team','solution','phone','filter','exception','export','customer-service','qrcode','scan','like','dislike','message','pay-circle','calculator','pushpin','bulb','select','switcher','rocket','bell','disconnect','database','compass','barcode','hourglass','key','flag','layout','printer','sound','usb','skin','tool','sync','wifi','car','schedule','user-add','user-delete','usergroup-add','usergroup-delete','man','woman','shop','gift','idcard','medicine-box','red-envelope','coffee','copyright','trademark','safety','wallet','bank','trophy','contacts','global','shake','api','fork','dashboard','table','profile','alert','audit','branches','build','border','crown','experiment','fire','money-collect','property-safety','read','reconciliation','rest','security-scan','insurance','interation','safety-certificate','project','thunderbolt','block','cluster','deployment-unit','dollar','euro','pound','file-done','file-exclamation','file-protect','file-search','file-sync','gateway','gold','robot','shopping'],
                brand:['android','apple','windows','ie','chrome','github','aliwangwang','dingding','weibo-square','weibo-circle','taobao-circle','html5','weibo','twitter','wechat','youtube','alipay-circle','taobao','skype','qq','medium-workmark','gitlab','medium','linkedin','google-plus','dropbox','facebook','codepen','code-sandbox','amazon','google','codepen-circle','alipay','ant-design','aliyun','zhihu','slack','slack-square','behance','behance-square','dribbble','dribbble-square','instagram','yuque','alibaba','yahoo'],
            },
            filled:{

            },
            twoTone:{},
            typevalue:'outlined',
            BDom:React.createRef(),
        }
        this.GoTop = this.GoTop.bind(this);
    }

    GoTop(){
        let d = document.querySelector('.routeWrap');
        if(d.scrollTop>0){
            d.scrollTop-=50;
            window.requestAnimationFrame(this.GoTop)
        }
    }
    
    render() {
        let code = (show,code,title)=>{
            return <section className='Button_box'>
                    {show}
                    <section className='Code_box'>
                        <div className='Code_title'> <span>{title}</span> </div>
                        {!!code?code:''}
                    </section>
                </section>
        }
        let svg = {
            one:()=><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
                    <path d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z" fill="#6B676E" p-id="1143" />
                    <path d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z" fill="#FFEBD2" p-id="1144" />
                    <path d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z" fill="#E9D7C3" p-id="1145" />
                    <path d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z" fill="#FFFFFF" p-id="1146" />
                    <path d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z" fill="#6B676E" p-id="1147" />
                    <path d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z" fill="#464655" p-id="1148" />
                    <path d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1149" />
                    <path d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1150" />
                </svg>,
            two:()=><svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>
        }
        let Ya = {
            baseShow:<section className='Show_button'>
                        <Icon type="home" />
                        <Icon type="setting" theme="filled" />
                        <Icon type="smile" theme="outlined" />
                        <Icon type="sync" spin />
                        <Icon type="loading" />
                    </section>,
            baseCode:<code>
                        {
                            `"使用 <Icon /> 标签声明组件，指定图标对应的 type 属性。可以通过 theme 属性来设置不同的主题风格的图标，也可以通过设置 spin 属性来实现动画旋转效果."   
                            <Icon type="home" />
                            <Icon type="setting" theme="filled" />
                            <Icon type="smile" theme="outlined" />
                            <Icon type="sync" spin />
                            <Icon type="loading" />`
                        }
                    </code>,
            twoShow:<section className='Show_button'>
                        <Icon type="smile" theme="twoTone" />
                        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                    </section>,
            twoCode:<code>
                        {
                            `
                                可以通过设置 theme 属性为 twoTone 来渲染双色图标，并且可以设置主题色。
                                <Icon type="smile" theme="twoTone" />
                                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                            `
                        }
                    </code>,
            svgShow:<section className='Show_button'>
                        <Icon component={svg.one} />
                        <Icon component={svg.two} />
                    </section>,
            iconShow:<section className='Show_button'>
                        <IconFont type="icon-tuichu" />
                        <IconFont type="icon-facebook" />
                        <IconFont type="icon-twitter" />
                    </section>,
            iconCode:<code>
                        {
                            `
                                对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。
                                <IconFont type="icon-tuichu" />
                                <IconFont type="icon-facebook" />
                                <IconFont type="icon-twitter" />
                            `
                        }
                    </code>,
            iconlink:<a href="http://iconfont.cn/"  target='_blank' rel='noopener noreferrer'>iconfont</a>
        }
        
        return (
            <div className='Section_box' ref={this.state.BDom}>
                <RadioGroup  style={{margin:'20px'}} defaultValue="outlined" onChange={(e)=>{
                    this.setState({
                        'typevalue':e.target.value,
                    })
                }}>
                    {
                        this.state.type.map(el=>
                            <RadioButton key={el} value={el}>{el}</RadioButton>
                        )
                    }
                </RadioGroup >
                {
                    this.state.title.map((el,i)=>{
                        let c = <h1 className='icon_head'>{el}</h1>;
                        let list = this.state.outlined[this.state.key[i]];
                        let b = <ul className='icon_list clearfix'>
                            {
                                list.map((e,j)=>{
                                    return <li key={i+''+j} onClick={()=>{
                                        let ipt = document.createElement('input');
                                        ipt.setAttribute('value',e);
                                        document.body.appendChild(ipt);
                                        ipt.select();
                                        document.execCommand("copy");
                                        document.body.removeChild(ipt);
                                        message.success('复制成功!');
                                    }}> <Icon type={e} theme="outlined" theme={this.state.typevalue}/> <span>{e}</span> </li>
                                })
                            }
                        </ul>
                        let d = <div key={i}>
                            {c}
                            {b}
                        </div>
                        return d;
                    })
                }
                <h1 className='icon_head'>代码展示</h1>
                
                <Row type="flex"  justify="start"  align="top" gutter={10} className='Icon_show'>
                    <Col span={12}>
                        {code(Ya.baseShow,Ya.baseCode,'Base')}
                        {code(Ya.svgShow,'','Svg')}
                    </Col>
                    <Col span={12}>
                        {code(Ya.twoShow,Ya.twoCode,'TwoTone')}
                        {code(Ya.iconShow,Ya.iconCode,Ya.iconlink)}
                    </Col>
                </Row> 


                <Button className='UpTop' onClick={this.GoTop} type='primary' shape='circle' icon='arrow-up'></Button>
            </div>
        )
    }
}

export default icon
