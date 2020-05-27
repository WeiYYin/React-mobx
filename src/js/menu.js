let GetItem = (key,title,icon)=>{
    return {key,title,icon}
}

export default [
    {
        key: '/home',
        title: '首页',
        icon: 'home',
        road:'../routers/Home'
    },
    {
        key:'/general',
        title:'General',
        icon:'smile',
        list:[
            {
                key:'/button',
                title:'Button',
                icon:'border',
            },
            {
                key:'/icon',
                title:'Icon',
                icon:'italic',
            },
        ],
    },
    {
        key:'/layoutdom',
        title:'LayoutDom',
        icon:'radar-chart',
        list:[
            {
                key:'/grid',
                title:'Grid',
                icon:'project',
            },
            {
                key:'/layouts',
                title:'Layouts',
                icon:'qrcode',
            },
        ],
    },
    {
        key:'/navigation',
        title:'Navigation',
        icon:'heat-map',
        list:[
            {
                key:'/affix',
                title:'Affix',
                icon:'pushpin',
            },
            {
                key:'/breadcrumb',
                title:'Breadcrumb',
                icon:'meh',
            },
            {
                key:'/dropdown',
                title:'Dropdown',
                icon:'arrow-down',
            },
            {
                key:'/menu',
                title:'Menu',
                icon:'menu-fold',
            },
            {
                key:'/pagination',
                title:'Pagination',
                icon:'rocket',
            },
            {
                key:'/steps',
                title:'Steps',
                icon:'block',
            },
        ],
    },
    {
        key:'/data',
        title:'DataEntry',
        icon:'diff',
        list:[
            {
                key:'/autocomplete',
                title:'AutoComplete',
                icon:'sync',
            },
            {
                key:'/cascader',
                title:'Cascader',
                icon:'branches',
            },
            {
                key:'/checkbox',
                title:'Checkbox',
                icon:'sliders',
            },
            {
                key:'/datepicker',
                title:'DatePicker',
                icon:'gateway',
            },
            {
                key:'/form',
                title:'Form',
                icon:'hdd',
            },
            {
                key:'/input',
                title:'Input',
                icon:'italic',
            },
            {
                key:'/inputNumber',
                title:'InputNumber',
                icon:'frown',
            },
            {
                key:'/mention',
                title:'Mention',
                icon:'cluster',
            },
            {
                key:'/rate',
                title:'Rate',
                icon:'star',
            },
            {
                key:'/radio',
                title:'Radio',
                icon:'check-circle',
            },
            {
                key:'/select',
                title:'Select',
                icon:'down-square',
            },
            {
                key:'/slider',
                title:'Slider',
                icon:'rocket',
            },
            {
                key:'/switch',
                title:'Switch',
                icon:'retweet',
            },
            {
                key:'/transfer',
                title:'Transfer',
                icon:'swap',
            },
            {
                key:'/timePicker',
                title:'TimePicker',
                icon:'clock-circle',
            },
            {
                key:'/upload',
                title:'Upload',
                icon:'clock-circle',
            },
        ]
    },
    {
        ...GetItem('/web','前端复习','global'),
        list:[
            GetItem('/Object','内置对象','star'),
            GetItem('/JsBase','JS 基础知识','star'),
            GetItem('/JSAsynchronous','JS 异步编程','radar-chart'),
        ],
    },
]
