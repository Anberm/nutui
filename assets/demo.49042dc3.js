import{c as t}from"./mobile.32ba0fc5.js";import{A as e,B as n,r as i,o as a,c as o,f as l,z as u,j as c}from"./index.efcda2b9.js";const{createDemo:s}=t("steps");var d=s({props:{},setup:()=>({})});const r=u();e("data-v-47ba5817");const f={class:"demo"},_=l("h2",null,"基本用法",-1),h=c("1"),p=c("2"),v=c("3"),m=l("h2",null,"标题和描述信息",-1),g=c("1"),b=c("2"),w=c("3"),x=l("h2",null,"自定义图标",-1),j=c("1"),y=c("2"),D=c("3"),z=l("h2",null,"竖向步骤条",-1),A={style:{height:"300px"}},B=c("1"),I=c("2"),k=c("3"),q={style:{height:"300px"}},C=c("1"),E=c("2"),F=c("3");n();const G=r(((t,e,n,u,c,s)=>{const d=i("nut-step"),G=i("nut-steps");return a(),o("div",f,[_,l(G,{current:"1"},{default:r((()=>[l(d,{title:"进行中"},{default:r((()=>[h])),_:1}),l(d,{title:"未开始"},{default:r((()=>[p])),_:1}),l(d,{title:"未开始"},{default:r((()=>[v])),_:1})])),_:1}),m,l(G,{current:"2"},{default:r((()=>[l(d,{title:"已完成",content:"步骤描述",icon:"nutui-iconfont nut-icon-wanshangshide"},{default:r((()=>[g])),_:1}),l(d,{title:"进行中",content:"步骤描述"},{default:r((()=>[b])),_:1}),l(d,{title:"未开始",content:"步骤描述"},{default:r((()=>[w])),_:1})])),_:1}),x,l(G,{current:"1"},{default:r((()=>[l(d,{title:"已完成",icon:"nutui-iconfont nut-icon-wanshangshide",status:"error"},{default:r((()=>[j])),_:1}),l(d,{title:"进行中",icon:"nutui-iconfont nut-icon-notice"},{default:r((()=>[y])),_:1}),l(d,{class:"nut-step-wait",title:"未开始",icon:"nutui-iconfont nut-icon-notice"},{default:r((()=>[D])),_:1})])),_:1}),z,l("div",A,[l(G,{direction:"vertical",current:"2"},{default:r((()=>[l(d,{title:"已完成",icon:"nutui-iconfont nut-icon-wanshangshide",content:"您的订单已经打包完成，商品已发出"},{default:r((()=>[B])),_:1}),l(d,{title:"进行中",content:"您的订单正在配送途中"},{default:r((()=>[I])),_:1}),l(d,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:r((()=>[k])),_:1})])),_:1})]),l("div",q,[l(G,{direction:"vertical",progressDot:"",current:"2"},{default:r((()=>[l(d,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:r((()=>[C])),_:1}),l(d,{title:"进行中",content:"您的订单正在配送途中"},{default:r((()=>[E])),_:1}),l(d,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:r((()=>[F])),_:1})])),_:1})])])}));d.render=G,d.__scopeId="data-v-47ba5817";export default d;