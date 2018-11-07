import React, {Component} from 'react'
import Base from './component/base'
import Simple from './component/simple'
import {Show,Title,Code} from './component/horizontal'
import {WrappedNormalLoginForm,Lcode,Ltitle} from './component/login'
import {WrappedRegistrationForm,RTitle,RCode} from './component/register'
import {Search,STitle,SCode} from './component/search'
import {New,NCode,NTitle} from './component/newForm'
import {TCode,Time,TTitle} from './component/time'
import {CCode,Custom,CTitle} from './component/custom'
import {UCode,UpLayout,UTitle} from './component/uplayout'
import {ACode,ATitle,Automatic} from './component/automatic'
import {VCode,Verification,VTitle} from './component/verification'
import {FCode,FormLinkage,FTitle} from './component/Formlinkage'
import {FLCode,FLTitle,FormLayoutDemo} from './component/ELayout'
import {DCode,DTitle,DynamicCheck} from './component/DynamicCheck'
import {ECode,ETitle,Example} from './component/Example'

class form extends Component {
    render() {
        let list = [
            
            {
                show:<Show></Show>,
                title:<Title></Title>,
                code:<Code></Code>,
            },
            {
                show:<WrappedNormalLoginForm></WrappedNormalLoginForm>,
                title:<Ltitle></Ltitle>,
                code: <Lcode></Lcode>
            },
            {
                show:<WrappedRegistrationForm></WrappedRegistrationForm>,
                title:<RTitle></RTitle>,
                code:<RCode></RCode>
            },{
                show:<Search></Search>,
                title:<STitle></STitle>,
                code:<SCode></SCode>
            },{
                show:<New/>,
                title:<NTitle/>,
                code:<NCode/>
            },{
                show:<Time/>,
                title:<TTitle/>,
                code:<TCode/>
            },
            {
                show:<Custom/>,
                title:<CTitle/>,
                code:<CCode/>
            },{
                show:<UpLayout/>,
                title:<UTitle/>,
                code:<UCode/>
            },{
                show:<Automatic/>,
                title:<ATitle/>,
                code:<ACode/>
            },{
                show:<Verification/>,
                title:<VTitle/>,
                code:<VCode/>
            },{
                show:<FormLinkage/>,
                title:<FTitle/>,
                code:<FCode/>
            },{
                show:<FormLayoutDemo/>,
                title:<FLTitle/>,
                code:<FLCode/>
            },{
                show:<DynamicCheck/>,
                title:<DTitle/>,
                code:<DCode/>
            },{
                show:<Example/>,
                title:<ETitle/>,
                code:<ECode/>
            }
        ]
        return (
            <section className='Section_box'>
                <Simple></Simple>
                {
                    list.map((el,i)=>{
                        return   <Base key={i}>
                            {el.show}
                            {el.title}
                            {el.code}
                        </Base>
                    })
                }
                
            </section>
        )
    }
}

export default form
