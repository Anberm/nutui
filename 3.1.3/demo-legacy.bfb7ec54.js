!function(){var e=document.createElement("style");e.innerHTML="@keyframes nutFadeIn-7c997070{0%{opacity:0}to{opacity:1}}@keyframes nutFadeOut-7c997070{0%{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-7c997070],.nutFadeIn[data-v-7c997070],.nutFade-leave-active[data-v-7c997070],.nutFadeOut[data-v-7c997070]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-7c997070],.nutFadeIn[data-v-7c997070]{animation-name:nutFadeIn-7c997070}.nutFade-leave-active[data-v-7c997070],.nutFadeOut[data-v-7c997070]{animation-name:nutFadeOut-7c997070}@keyframes nutZoomIn-7c997070{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-7c997070{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-7c997070],.nutZoomIn[data-v-7c997070],.nutZoom-leave-active[data-v-7c997070],.nutZoomOut[data-v-7c997070]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-7c997070],.nutZoomIn[data-v-7c997070]{animation-name:nutZoomIn-7c997070}.nutZoom-leave-active[data-v-7c997070],.nutZoomOut[data-v-7c997070]{animation-name:nutZoomOut-7c997070}@keyframes nutEaseIn-7c997070{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-7c997070{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-7c997070],.nutEaseIn[data-v-7c997070],.nutEase-leave-active[data-v-7c997070],.nutEaseOut[data-v-7c997070]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-7c997070],.nutEaseIn[data-v-7c997070]{animation-name:nutEaseIn-7c997070}.nutEase-leave-active[data-v-7c997070],.nutEaseOut[data-v-7c997070]{animation-name:nutEaseOut-7c997070}@keyframes nutDropIn-7c997070{0%{opacity:0;transform:scaleY(.8)}to{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-7c997070{0%{opacity:1;transform:scaleY(1)}to{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-7c997070],.nutDropIn[data-v-7c997070],.nutDrop-leave-active[data-v-7c997070],.nutDropOut[data-v-7c997070]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-7c997070],.nutDropIn[data-v-7c997070]{animation-name:nutDropIn-7c997070}.nutDrop-leave-active[data-v-7c997070],.nutDropOut[data-v-7c997070]{animation-name:nutDropOut-7c997070}@keyframes rotation-7c997070{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-7c997070],.nutRotateIn[data-v-7c997070],.nutRotate-leave-active[data-v-7c997070],.nutRotateOut[data-v-7c997070]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-7c997070],.nutRotateIn[data-v-7c997070]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-7c997070],.nutRotateOut[data-v-7c997070]{animation-name:nutRotateOut}.demo .nut-cell[data-v-7c997070]{align-items:center}.demo .nut-cell .nut-cell__value[data-v-7c997070]{margin-right:8px}\n",document.head.appendChild(e),System.register(["./mobile-legacy.7b8d1d2b.js","./vendor-legacy.5bafa3ec.js","./index-legacy.b2c92e23.js"],(function(e){"use strict";var t,n,a,o,c,i,s,d,l,r,u;return{setters:[function(e){t=e.c},function(e){n=e.a,a=e.m,o=e.A,c=e.B,i=e.C,s=e.r,d=e.o,l=e.e,r=e.j,u=e.g},function(){}],execute:function(){const{createDemo:m}=t("address");var v=e("default",m({props:{},setup(){const e=n({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"},{id:5,name:"浙江"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"},{id:3,name:"八里庄街道"},{id:9,name:"北苑"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),t=n({normal:!1,normal2:!1,exist:!1,customImg:!1,other:!1}),c=n({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),i=a([{id:1,addressDetail:"",cityName:"次渠镇",countyName:"通州区",provinceName:"北京市",selectedAddress:!0,townName:"",name:"探探鱼",phone:"182****1718"},{id:2,addressDetail:"",cityName:"钓鱼岛全区",countyName:"",provinceName:"钓鱼岛",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"},{id:3,addressDetail:"京东大厦",cityName:"大兴区",countyName:"科创十一街18号院",provinceName:"北京市",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"}]),s=n({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址",five:"请选择地址"});return{showAddress:()=>{t.normal=!t.normal},showAddress2:()=>{t.normal2=!t.normal2},showPopup:t,onChange:(n,a)=>{e[n.next].length<1&&(t[a]=!1)},close1:e=>{console.log(e),s.one=e.data.addressStr},showAddressExist:()=>{t.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:t,cityName:n,countyName:a,townName:o,addressDetail:c}=e.data;s.two=t+n+a+o+c}else s.two=e.data.addressStr},close5:e=>{console.log(e),s.five=e.data.addressStr},selected:(e,t,n)=>{console.log(e),console.log(t)},existAddress:i,showAddressOther:()=>{t.other=!0},showCustomImg:()=>{t.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:t,cityName:n,countyName:a,townName:o,addressDetail:c}=e.data;s.three=t+n+a+o+c}else s.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:t,cityName:n,countyName:a,townName:o,addressDetail:c}=e.data;s.four=t+n+a+o+c}else s.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)},...o(c),...o(s),...o(t),...o(e)}}}));c("data-v-7c997070");const p={class:"demo"},y=u("h2",null,"选择自定义地址",-1),h=u("h2",null,"选择自定义地址2",-1),f=u("h2",null,"选择已有地址",-1),b=u("h2",null,"自定义图标",-1),g=u("h2",null,"自定义地址与已有地址切换",-1);i(),v.render=function(e,t,n,a,o,c){const i=s("nut-cell"),u=s("nut-address");return d(),l("div",p,[y,r(i,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),r(u,{visible:e.normal,"onUpdate:visible":t[0]||(t[0]=t=>e.normal=t),province:e.province,city:e.city,country:e.country,town:e.town,onChange:t[1]||(t[1]=t=>e.onChange(t,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),h,r(i,{title:"选择地址",desc:e.five,"is-link":"",onClick:e.showAddress2},null,8,["desc","onClick"]),r(u,{visible:e.normal2,"onUpdate:visible":t[2]||(t[2]=t=>e.normal2=t),type:"custom2",province:e.province,city:e.city,country:e.country,town:e.town,height:"270px",onChange:t[3]||(t[3]=t=>e.onChange(t,"normal2")),onClose:e.close5,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),f,r(i,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),r(u,{visible:e.exist,"onUpdate:visible":t[4]||(t[4]=t=>e.exist=t),type:"exist","exist-address":e.existAddress,onChange:t[5]||(t[5]=t=>e.onChange(t,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),b,r(i,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),r(u,{visible:e.customImg,"onUpdate:visible":t[6]||(t[6]=t=>e.customImg=t),type:"exist","exist-address":e.existAddress,onChange:t[7]||(t[7]=t=>e.onChange(t,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),g,r(i,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),r(u,{visible:e.other,"onUpdate:visible":t[8]||(t[8]=t=>e.other=t),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:t[9]||(t[9]=t=>e.onChange(t,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])},v.__scopeId="data-v-7c997070"}}}))}();