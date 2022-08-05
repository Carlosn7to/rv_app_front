(function(){"use strict";var e={9853:function(e,t,a){var n=a(9242),s=a(3396);function o(e,t){const a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(a)}var i=a(89);const l={},r=(0,i.Z)(l,[["render",o]]);var d=r,u=a(5431);(0,u.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=a(2483);const p={id:"container-login"};function h(e,t,a,n,o,i){const l=(0,s.up)("CardLogin");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s.Wm)(l)])}const _={id:"card"},v={id:"logo-company"},m=["src"],f={id:"form"};function g(e,t,o,i,l,r){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",v,[(0,s._)("img",{src:a(9078),alt:"logo_age"},null,8,m)]),(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),type:"text",name:"email",id:"email",placeholder:"E-mail"},null,512),[[n.nr,l.email]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e),onKeydown:t[2]||(t[2]=(0,n.D2)(((...e)=>r.authentic&&r.authentic(...e)),["enter"])),type:"password",name:"password",id:"password",placeholder:"Senha"},null,544),[[n.nr,l.password]]),(0,s._)("input",{type:"submit",value:"Entrar",onClick:t[3]||(t[3]=(...e)=>r.authentic&&r.authentic(...e))})])])}var b=a(6265),w=a.n(b);const y=w().create({baseURL:"http://localhost:8000/api/",headers:{}});var k=a(680),C={name:"CardLogin",data(){return{email:"",password:""}},methods:{authentic:function(){const e={email:this.email,password:this.password};y({method:"POST",url:"login",headers:{"Content-Type":"application/json",Access:"application/json"},data:JSON.stringify(e)}).then((e=>{k.Z.set("rv_token",e.data.access_token),k.Z.set("name",e.data.name),k.Z.set("permission",e.data.permission),this.$router.replace("/minhas-vendas")})).catch((e=>{console.log(e)}))},teste:function(){var e=window.screen.height,t=window.screen.width;alert(e),alert(t+"largura")}},mounted(){}};const D=(0,i.Z)(C,[["render",g],["__scopeId","data-v-2c4a1bde"]]);var z=D,S={name:"LoginPage",components:{CardLogin:z}};const A=(0,i.Z)(S,[["render",h],["__scopeId","data-v-9f51bae0"]]);var M=A;const j={id:"container"},F=(0,s._)("div",{id:"content"},[(0,s._)("h1",{id:"title-page"},"Página inicial")],-1);function Z(e,t,a,n,o,i){const l=(0,s.up)("MenuMain");return(0,s.wg)(),(0,s.iD)("div",j,[(0,s.Wm)(l),F])}var E=a(7139);const V=e=>((0,s.dD)("data-v-46106ae2"),e=e(),(0,s.Cn)(),e),q={id:"logo-company"},P=["src"],T=V((()=>(0,s._)("i",{class:"fi fi-rr-angle-small-left"},null,-1))),U=V((()=>(0,s._)("i",{class:"fi fi-rr-menu-burger"},null,-1))),B=[T,U],x={id:"content-menu"},O={class:"href-menu"},I=V((()=>(0,s._)("span",null,"Principal",-1))),N=V((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-chart-histogram"})]),(0,s._)("span",null,"Minhas vendas")],-1))),W={key:0,class:"href-menu"},G=V((()=>(0,s._)("span",null,"Gerenciamento",-1))),K=V((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-users-alt"})]),(0,s._)("span",null,"Colaboradores")],-1))),H={class:"href-menu"},$=V((()=>(0,s._)("span",null,"Ações",-1))),R=V((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,s._)("span",null,"Logout")],-1)));function Y(e,t,n,o,i,l){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:(0,E.C_)(["menu",{menuOff:i.menu}])},[(0,s._)("div",q,[(0,s._)("img",{src:a(9078),alt:"logo-age"},null,8,P),(0,s._)("div",{id:"menu-hamb",onClick:t[0]||(t[0]=e=>l.alterMenu())},B)]),(0,s._)("div",x,[(0,s._)("nav",null,[(0,s._)("ul",O,[I,(0,s.Wm)(r,{to:"/home"}),(0,s.Wm)(r,{to:"/minhas-vendas"},{default:(0,s.w5)((()=>[N])),_:1})]),2==i.permission?((0,s.wg)(),(0,s.iD)("ul",W,[G,(0,s.Wm)(r,{to:"/colaboradores"},{default:(0,s.w5)((()=>[K])),_:1})])):(0,s.kq)("",!0),(0,s._)("ul",H,[$,(0,s.Wm)(r,{to:"/",onClick:l.logout},{default:(0,s.w5)((()=>[R])),_:1},8,["onClick"])])])])],2)}var L={name:"MenuMain",data(){return{menu:!0,permission:k.Z.get("permission")}},methods:{alterMenu:function(){!1===this.menu?this.menu=!0:this.menu=!1},logout:function(){k.Z.remove("rv_token"),k.Z.remove("name")}}};const J=(0,i.Z)(L,[["render",Y],["__scopeId","data-v-46106ae2"]]);var Q=J,X={name:"HomePage",components:{MenuMain:Q}};const ee=(0,i.Z)(X,[["render",Z]]);var te=ee,ae={auth(e,t,a){const n=k.Z.get("rv_token");y({method:"get",url:"validatedToken",headers:{Authorization:"Bearer "+n}}).then((e=>{if(1===e.data)return a()})).catch((()=>a({path:"/"})))}};const ne=e=>((0,s.dD)("data-v-5d00fe2c"),e=e(),(0,s.Cn)(),e),se={id:"container"},oe={id:"content"},ie=ne((()=>(0,s._)("h1",{id:"title-page"},"Minha Dashboard",-1))),le={id:"content-page"},re={id:"sales"},de={id:"dashboards"},ue={class:"dashboard",style:{background:"#FEA11D"}},ce=ne((()=>(0,s._)("h6",null,"Estrelas",-1))),pe=ne((()=>(0,s._)("i",{class:"fi fi-ss-star"},null,-1))),he={class:"dashboard",style:{"background-color":"#009688"}},_e=ne((()=>(0,s._)("h6",null,"Vendas válidas",-1))),ve=ne((()=>(0,s._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),me={class:"dashboard",style:{"background-color":"#3F51B5"}},fe=ne((()=>(0,s._)("h6",null,"Top plano",-1))),ge=ne((()=>(0,s._)("i",{class:"fi fi-ss-shopping-cart-check"},null,-1))),be={class:"dashboard",style:{"background-color":"#F44336"}},we=ne((()=>(0,s._)("h6",null,"Cancelamentos",-1))),ye=ne((()=>(0,s._)("i",{class:"fi fi-ss-delete-document"},null,-1))),ke={id:"dashboards"},Ce={class:"dashboard",style:{background:"rgba(0,150,2,0.85)"}},De=ne((()=>(0,s._)("h6",null,"Comissão",-1))),ze=ne((()=>(0,s._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),Se={class:"dashboard",style:{"background-color":"#feca1d"}},Ae=ne((()=>(0,s._)("h6",null,"Valor da estrela",-1))),Me=ne((()=>(0,s._)("i",{class:"fi fi-sr-grin-stars"},null,-1))),je={class:"dashboard",style:{"background-color":"#983fb5"}},Fe=ne((()=>(0,s._)("h6",null,"Meta atingida",-1))),Ze=ne((()=>(0,s._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),Ee=ne((()=>(0,s._)("div",{class:"dashboard",style:{"background-color":"rgba(145,145,145,0.65)"}},[(0,s._)("div",null,[(0,s._)("span",null,"0%"),(0,s._)("h6",null,"Deflator")]),(0,s._)("i",{class:"fi fi-sr-settings-sliders"})],-1))),Ve={class:"content-sales"},qe={id:"list-sales"},Pe=ne((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nº contrato"),(0,s._)("th",{style:{"text-align":"left"}},"Nome do cliente"),(0,s._)("th",{style:{"text-align":"left"}},"Plano"),(0,s._)("th",null,"Status")])],-1))),Te={style:{"text-align":"left"}},Ue={style:{"text-align":"left"}},Be={id:"calc-sales"},xe=ne((()=>(0,s._)("h6",null,"Projeção de vendas",-1))),Oe=(0,s.Uk)("Hoje é dia "),Ie=(0,s.Uk)(", faltam "),Ne=(0,s.Uk)(" dias para acabar seu mês e caso você mantenha esse desempenho, terminará o mês com: "),We={class:"info-projection"},Ge={style:{color:"#FEA11D"}},Ke=ne((()=>(0,s._)("i",{class:"fi fi-ss-star"},null,-1))),He=(0,s.Uk)("Estrelas: "),$e={style:{color:"#009688"}},Re=ne((()=>(0,s._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),Ye=(0,s.Uk)("Vendas: "),Le={style:{color:"#983fb5"}},Je=ne((()=>(0,s._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),Qe=(0,s.Uk)("Meta atingida: "),Xe={style:{color:"rgba(0,150,2,0.85)"}},et=ne((()=>(0,s._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),tt=(0,s.Uk)("Comissão: "),at={key:0,class:"tip-projection"},nt=ne((()=>(0,s._)("i",{class:"fi fi-sr-lightbulb-dollar"},null,-1))),st=ne((()=>(0,s._)("p",null,[(0,s.Uk)("Faltará pouco pra meta... "),(0,s._)("br"),(0,s._)("br"),(0,s._)("b",null,"Você consegue!")],-1))),ot=[nt,st],it={key:0,id:"filter"},lt={class:"itens-filter"},rt=ne((()=>(0,s._)("h6",null,"Ano",-1))),dt={id:"years"},ut={class:"itens-filter"},ct=ne((()=>(0,s._)("h6",null,"Mês",-1))),pt={class:"months"},ht={class:"itens-filter",style:{border:"none"}};function _t(e,t,a,n,o,i){const l=(0,s.up)("MenuMain");return(0,s.wg)(),(0,s.iD)("div",se,[(0,s.Wm)(l),(0,s._)("div",oe,[ie,(0,s._)("div",le,[(0,s._)("div",re,[(0,s._)("div",de,[(0,s._)("div",ue,[(0,s._)("div",null,[(0,s._)("span",null,(0,E.zw)(o.dashboard.stars.value),1),ce]),pe]),(0,s._)("div",he,[(0,s._)("div",null,[(0,s._)("span",null,(0,E.zw)(o.dashboard.sales.count),1),_e]),ve]),(0,s._)("div",me,[(0,s._)("div",null,[(0,s._)("span",null,(0,E.zw)(o.dashboard.plan.name),1),fe]),ge]),(0,s._)("div",be,[(0,s._)("div",null,[(0,s._)("span",null,(0,E.zw)(o.dashboard.cancel),1),we]),ye])]),(0,s._)("div",ke,[(0,s._)("div",Ce,[(0,s._)("div",null,[(0,s._)("span",null,"R$"+(0,E.zw)(o.dashboard.stars.amount),1),De]),ze]),(0,s._)("div",Se,[(0,s._)("div",null,[(0,s._)("span",null,"R$"+(0,E.zw)(o.dashboard.stars.price),1),Ae]),Me]),(0,s._)("div",je,[(0,s._)("div",null,[(0,s._)("span",null,(0,E.zw)(o.dashboard.stars.meta)+"%",1),Fe]),Ze]),Ee]),(0,s._)("div",Ve,[(0,s._)("div",qe,[(0,s._)("table",null,[Pe,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.dashboard.sales.sales,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id_contrato},[(0,s._)("td",null,(0,E.zw)(e.id_contrato)+"1",1),(0,s._)("td",Te,(0,E.zw)(e.nome_cliente),1),(0,s._)("td",Ue,(0,E.zw)(e.plano),1),(0,s._)("td",null,(0,E.zw)(e.status),1)])))),128))])])]),(0,s._)("div",Be,[xe,(0,s._)("p",null,[Oe,(0,s._)("b",null,(0,E.zw)(o.projection.today),1),Ie,(0,s._)("b",null,(0,E.zw)(o.projection.missing),1),Ne]),(0,s._)("div",We,[(0,s._)("span",Ge,[Ke,He,(0,s._)("b",null,(0,E.zw)(o.projection.stars),1)]),(0,s._)("div",null,[(0,s._)("span",$e,[Re,Ye,(0,s._)("b",null,(0,E.zw)(o.projection.sales),1)])]),(0,s._)("div",null,[(0,s._)("span",Le,[Je,Qe,(0,s._)("b",null,(0,E.zw)(o.projection.meta)+"%",1)])]),(0,s._)("div",null,[(0,s._)("span",Xe,[et,tt,(0,s._)("b",null,"R$"+(0,E.zw)(o.projection.comission),1)])])]),o.projection.meta>70&&o.projection.meta<100?((0,s.wg)(),(0,s.iD)("div",at,ot)):(0,s.kq)("",!0)])])]),2===o.operator?((0,s.wg)(),(0,s.iD)("div",it,[(0,s._)("div",lt,[rt,(0,s._)("div",dt,[(0,s._)("span",{class:(0,E.C_)(["itemFilter",{isActive:2022===o.filter.year}]),onClick:t[0]||(t[0]=e=>i.filterYear(2022))},"2022",2)])]),(0,s._)("div",ut,[ct,(0,s._)("div",pt,[(0,s._)("span",{class:(0,E.C_)(["itemFilter",{isActive:"05"===o.filter.month}]),onClick:t[1]||(t[1]=e=>i.filterMonth("05"))},"Mai",2),(0,s._)("span",{class:(0,E.C_)(["itemFilter",{isActive:"06"===o.filter.month}]),onClick:t[2]||(t[2]=e=>i.filterMonth("06"))},"Jun",2),(0,s._)("span",{class:(0,E.C_)(["itemFilter",{isActive:"07"===o.filter.month}]),onClick:t[3]||(t[3]=e=>i.filterMonth("07"))},"Jul",2),(0,s._)("span",{class:(0,E.C_)(["itemFilter",{isActive:"08"===o.filter.month}]),onClick:t[4]||(t[4]=e=>i.filterMonth("08"))},"Ago",2)])]),(0,s._)("div",ht,[(0,s._)("button",{onClick:t[5]||(t[5]=(...e)=>i.getFilterData&&i.getFilterData(...e))},"Filtrar")])])):(0,s.kq)("",!0)])])])}var vt={name:"MySales",components:{MenuMain:Q},data(){return{operator:k.Z.get("operator"),name:k.Z.get("name"),filter:{year:null,month:null,status:null},dashboard:{stars:{value:null,amount:null,price:null,meta:null},sales:{count:null,sales:null},plan:{name:null,un:null},cancel:null},projection:{today:null,missing:null,stars:null,sales:null,meta:null,comission:null}}},methods:{filterYear:function(e){this.filter.year=e},filterMonth:function(e){this.filter.month=e},filterStatus:function(e){null===this.filter.status||this.filter.status!==e?this.filter.status=e:this.filter.status=null},getFilterData:function(){y({method:"GET",url:"data_items/filter-sales",headers:{Authorization:"Bearer "+k.Z.get("rv_token"),username:k.Z.get("name")},params:{year:this.filter.year,month:this.filter.month,status:this.filter.status}}).then((e=>{this.dashboard.sales.count="",this.dashboard.sales.sales="",this.dashboard.stars.value=0,this.dashboard.stars.amount=0,this.dashboard.stars.price=0,this.dashboard.stars.meta=0,this.dashboard.plan.name="",this.dashboard.plan.un="",this.dashboard.cancel=0,this.projection.today=e.data.dashboard.stars.original.projection.original.today,this.projection.missing=e.data.dashboard.stars.original.projection.original.missing,this.projection.stars=e.data.dashboard.stars.original.projection.original.stars,this.projection.sales=e.data.dashboard.stars.original.projection.original.comission.original.sales,this.projection.meta=e.data.dashboard.stars.original.projection.original.comission.original.meta,this.projection.comission=e.data.dashboard.stars.original.projection.original.comission.original.comission,this.dashboard.sales.count=e.data.dashboard.sales,this.dashboard.sales.sales=e.data.sales,this.dashboard.stars.value=e.data.dashboard.stars.original.stars,this.dashboard.stars.amount=e.data.dashboard.stars.original.comission,this.dashboard.stars.price=e.data.dashboard.stars.original.price,this.dashboard.stars.meta=e.data.dashboard.stars.original.meta,this.dashboard.plan.name=e.data.dashboard.plan,this.dashboard.plan.un=e.data.dashboard.plan_qntd,this.dashboard.cancel=e.data.dashboard.cancelled})).catch((e=>{console.log(e)}))}},mounted(){this.getFilterData()}};const mt=(0,i.Z)(vt,[["render",_t],["__scopeId","data-v-5d00fe2c"]]);var ft=mt;const gt=e=>((0,s.dD)("data-v-cb20793c"),e=e(),(0,s.Cn)(),e),bt={id:"container"},wt={id:"content"},yt=gt((()=>(0,s._)("h1",{id:"title-page"},"Todas as vendas instaladas",-1))),kt={id:"content-page"},Ct={id:"filter-table"},Dt={id:"container-search"},zt=gt((()=>(0,s._)("i",{class:"fi fi-rr-filter"},null,-1))),St=[zt],At={id:"table"},Mt=gt((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nº contrato"),(0,s._)("th",null,"Nome do cliente"),(0,s._)("th",null,"Vendedor"),(0,s._)("th",null,"Supervisor"),(0,s._)("th",null,"Status"),(0,s._)("th",null,"Situação"),(0,s._)("th",null,"Plano")])],-1))),jt={key:0,class:"static-td sucess"},Ft={key:1,class:"static-td pendent"},Zt={key:2,class:"static-td pendent"},Et={key:0,class:"static-td sucess"},Vt={key:1,class:"static-td failure"},qt={key:2,class:"static-td failure",style:{"font-size":"1rem"}},Pt={key:3,class:"static-td failure",style:{"font-size":"1rem"}},Tt={key:4,class:"static-td offline"},Ut={key:5,class:"static-td offline"},Bt={key:6,class:"static-td failure"},xt={key:7,class:"static-td offline"};function Ot(e,t,a,o,i,l){const r=(0,s.up)("MenuMain"),d=(0,s.up)("FilterCard");return(0,s.wg)(),(0,s.iD)("div",bt,[(0,s.Wm)(r),(0,s._)("div",wt,[yt,(0,s._)("div",kt,[(0,s._)("div",Ct,[(0,s._)("div",Dt,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do vendedor...",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>i.search.value=e),onKeydown:t[1]||(t[1]=(0,n.D2)((e=>l.getSalesSearch()),["enter"]))},null,544),[[n.nr,i.search.value]])]),(0,s._)("div",{id:"filter",onClick:t[2]||(t[2]=(...e)=>l.onFilter&&l.onFilter(...e))},St)]),(0,s._)("div",At,[(0,s._)("table",null,[Mt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.sales.data,((e,t)=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,(0,E.zw)(e.id_contrato),1),(0,s._)("td",null,(0,E.zw)(e.nome_cliente),1),(0,s._)("td",null,(0,E.zw)(e.vendedor),1),(0,s._)("td",null,(0,E.zw)(e.supervisor),1),(0,s._)("td",null,["Aprovado"===e.status?((0,s.wg)(),(0,s.iD)("span",jt,(0,E.zw)(e.status),1)):(0,s.kq)("",!0),"Pré-Contrato"===e.status?((0,s.wg)(),(0,s.iD)("span",Ft,(0,E.zw)(e.status),1)):(0,s.kq)("",!0),"Em Aprovação"===e.status?((0,s.wg)(),(0,s.iD)("span",Zt,(0,E.zw)(e.status),1)):(0,s.kq)("",!0)]),(0,s._)("td",null,["Normal"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Et,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Cancelado"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Vt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Bloqueio Financeiro"===e.situacao?((0,s.wg)(),(0,s.iD)("span",qt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Bloqueio Administrativo"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Pt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Demonstração"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Tt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Encerrado"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Ut,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Suspenso"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Bt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0),"Cortesia"===e.situacao?((0,s.wg)(),(0,s.iD)("span",xt,(0,E.zw)(e.situacao),1)):(0,s.kq)("",!0)]),(0,s._)("td",null,(0,E.zw)(e.plano),1)])))),128))])])])])]),1===i.filter.value?((0,s.wg)(),(0,s.j4)(d,{key:0,onOnFilter:l.onFilter,onApplyFilters:l.applyFilters},null,8,["onOnFilter","onApplyFilters"])):(0,s.kq)("",!0)])}const It=e=>((0,s.dD)("data-v-5bbdef28"),e=e(),(0,s.Cn)(),e),Nt={id:"modal"},Wt={id:"card"},Gt=It((()=>(0,s._)("i",{class:"fi fi-rr-cross-small"},null,-1))),Kt=[Gt],Ht={id:"content-filter"},$t={class:"input-filter"},Rt=It((()=>(0,s._)("label",{for:"n_contrato"},"Nº Contrato",-1))),Yt={class:"input-filter"},Lt=It((()=>(0,s._)("label",{for:"nome_cliente"},"Nome do cliente",-1))),Jt={class:"input-filter"},Qt=It((()=>(0,s._)("label",{for:"vendedor"},"Vendedor",-1))),Xt={class:"input-filter"},ea=It((()=>(0,s._)("label",{for:"supervisor"},"Supervisor",-1))),ta={class:"input-filter"},aa=It((()=>(0,s._)("label",{for:""},"Status",-1))),na={class:"check-container"},sa=["id","value"],oa=["for"],ia={class:"input-filter"},la=It((()=>(0,s._)("label",{for:""},"Situação",-1))),ra={class:"check-container"},da=["id","value"],ua=["for"];function ca(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("div",Nt,[(0,s._)("div",Wt,[(0,s._)("div",{id:"close-button",onClick:t[0]||(t[0]=(...e)=>l.onFilter&&l.onFilter(...e))},Kt),(0,s._)("div",Ht,[(0,s._)("div",$t,[Rt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.filter.inputs.id_contrato=e),type:"text",name:"n_contrato",id:"n_contrato"},null,512),[[n.nr,i.filter.inputs.id_contrato]])]),(0,s._)("div",Yt,[Lt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.filter.inputs.nome_cliente=e),type:"text",name:"nome_cliente",id:"nome_cliente"},null,512),[[n.nr,i.filter.inputs.nome_cliente]])]),(0,s._)("div",Jt,[Qt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.filter.inputs.vendedor=e),type:"text",name:"vendedor",id:"vendedor"},null,512),[[n.nr,i.filter.inputs.vendedor]])]),(0,s._)("div",Xt,[ea,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.filter.inputs.supervisor=e),type:"text",name:"supervisor",id:"supervisor"},null,512),[[n.nr,i.filter.inputs.supervisor]])]),(0,s._)("div",ta,[aa,(0,s._)("div",na,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.filter.status,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"check",key:e.status},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.filter.inputs.status=e),type:"checkbox",name:"status",id:e.status,value:e.status},null,8,sa),[[n.e8,i.filter.inputs.status]]),(0,s._)("label",{for:e.status},(0,E.zw)(e.status),9,oa)])))),128))])]),(0,s._)("div",ia,[la,(0,s._)("div",ra,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.filter.situation,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"check",key:e.situacao},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.filter.inputs.situacao=e),type:"checkbox",name:"situacao",id:e.situacao,value:e.situacao},null,8,da),[[n.e8,i.filter.inputs.situacao]]),(0,s._)("label",{for:e.situacao},(0,E.zw)(e.situacao),9,ua)])))),128))])])]),(0,s._)("input",{type:"submit",class:"submit",value:"Aplicar filtros",onClick:t[7]||(t[7]=e=>l.applyFilters("oi"))})])])}var pa={name:"FilterCard",data(){return{filter:{type:Object,default:null,status:null,situation:null,inputs:{id_contrato:"",nome_cliente:"",vendedor:"",supervisor:"",status:[],situacao:[]}}}},methods:{onFilter:function(){this.$emit("on-filter")},getFilters:function(){y({method:"GET",url:"data_items/status",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.filter.status=e.data[0],this.filter.situation=e.data[1]}))},applyFilters:function(){this.$emit("apply-filters",this.filter.inputs),this.onFilter()}},mounted(){this.getFilters()}};const ha=(0,i.Z)(pa,[["render",ca],["__scopeId","data-v-5bbdef28"]]);var _a=ha,va={name:"SalesAll",components:{MenuMain:Q,FilterCard:_a},data(){return{sales:{type:Object,default:null},search:{type:String,default:null,value:""},filter:{type:Number,default:0,value:0}}},methods:{getSales:function(){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.sales=e}))},getSalesSearch:function(){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{vendedor:this.search.value}}).then((e=>{this.sales=e}))},onFilter(){0===this.filter.value?this.filter.value=1:this.filter.value=0},applyFilters:function(e){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:e}).then((e=>{this.sales=e}))}},mounted(){this.getSales()}};const ma=(0,i.Z)(va,[["render",Ot],["__scopeId","data-v-cb20793c"]]);var fa=ma;const ga=e=>((0,s.dD)("data-v-71740a8e"),e=e(),(0,s.Cn)(),e),ba={id:"container"},wa={key:0,id:"content"},ya=ga((()=>(0,s._)("h1",{id:"title-page"},"Todas os Supervisores/Vendedores",-1))),ka={id:"content-page"},Ca={id:"filter-table"},Da={id:"container-search"},za={id:"container-search"},Sa={id:"table"},Aa=ga((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Supervisor"),(0,s._)("th",null,"Ações")])],-1))),Ma={class:"actions"},ja=["onClick"],Fa=ga((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Vendedor"),(0,s._)("th",null,"Ações")])],-1))),Za=ga((()=>(0,s._)("td",{class:"actions"},[(0,s._)("i",{class:"fi fi-rr-sign-in-alt"})],-1)));function Ea(e,t,a,o,i,l){const r=(0,s.up)("MenuMain"),d=(0,s.up)("SupervisorDashboard");return(0,s.wg)(),(0,s.iD)("div",ba,[(0,s.Wm)(r),"all"===i.page.name?((0,s.wg)(),(0,s.iD)("div",wa,[ya,(0,s._)("div",ka,[(0,s._)("div",Ca,[(0,s._)("div",Da,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do supervisor...",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>i.searchSupervisor.value=e),onKeydown:t[1]||(t[1]=(0,n.D2)((e=>l.getSupervisorsSearch()),["enter"]))},null,544),[[n.nr,i.searchSupervisor.value]])]),(0,s._)("div",za,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do vendedor...",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=e=>i.searchVendor.value=e),onKeydown:t[3]||(t[3]=(0,n.D2)((e=>l.getVendorsSearch()),["enter"]))},null,544),[[n.nr,i.searchVendor.value]])])]),(0,s._)("div",Sa,[(0,s._)("table",null,[Aa,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.supervisors.value,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.vendedor},[(0,s._)("td",null,(0,E.zw)(e.supervisor),1),(0,s._)("td",Ma,[(0,s._)("i",{class:"fi fi-rr-sign-in-alt",onClick:t=>l.pageAlter("supervisor",e.supervisor)},null,8,ja)])])))),128))])]),(0,s._)("table",null,[Fa,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.vendors.value,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.vendedor},[(0,s._)("td",null,(0,E.zw)(e.vendedor),1),Za])))),128))])])])])])):(0,s.kq)("",!0),"supervisor"===i.page.name?((0,s.wg)(),(0,s.j4)(d,{key:1,supervisor:i.page.supervisor.name},null,8,["supervisor"])):(0,s.kq)("",!0)])}const Va=e=>((0,s.dD)("data-v-b6822a2c"),e=e(),(0,s.Cn)(),e),qa={id:"content"},Pa={id:"title-page"},Ta=Va((()=>(0,s._)("div",{id:"content-page"},null,-1)));function Ua(e,t,a,n,o,i){return(0,s.wg)(),(0,s.iD)("div",qa,[(0,s._)("h1",Pa,"Supervisor(a) - "+(0,E.zw)(a.supervisor),1),Ta])}var Ba=a(4851),xa={name:"SupervisorDashboard",components:{},props:{supervisor:{required:!0,type:String}},data(){return{vendors:{},graph:{bar:{data:null,label:null},pie:{data:null,label:null}}}},methods:{getDataSupervisor:function(){y({method:"GET",url:"data_items/supervisor_data",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{supervisor:this.supervisor}}).then((e=>{this.vendors=e.data})).catch((e=>{console.log(e)}))},getAmount:function(){y({method:"GET",url:"data_items/supervisor_amount",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.graph.bar.data=e.data.amount,this.graph.bar.label=e.data.month})).catch((e=>{console.log(e)}))},getTeam:function(){y({method:"GET",url:"data_items/supervisor_team",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.graph.pie.data=e.data}))},graphBar:function(){const e=this.graph.bar.label,t=document.getElementById("myChart"),a=new Ba.Z(t,{type:"bar",data:{labels:e,datasets:[{label:"Receita R$",data:this.graph.bar.data,backgroundColor:["#0f297d"],borderColor:["#0f297d"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1}});return a},graphPizza:function(){const e=document.getElementById("pizza"),t=new Ba.Z(e,{type:"pie",data:{labels:["Ativo","Inativo"],datasets:[{label:"Dataset 1",data:[12,16],backgroundColor:["green","red"]}]},options:{responsive:!0,maintainAspectRatio:!1}});return t}},created(){this.getAmount()},mounted(){this.getDataSupervisor(),this.getTeam()}};const Oa=(0,i.Z)(xa,[["render",Ua],["__scopeId","data-v-b6822a2c"]]);var Ia=Oa,Na={name:"VendorsAll",components:{MenuMain:Q,SupervisorDashboard:Ia},data(){return{searchVendor:{type:String,default:null,value:""},searchSupervisor:{type:String,default:null,value:""},vendors:{type:Object,default:null,value:null},supervisors:{type:Object,default:null,value:null},page:{name:"all",supervisor:{name:""},vendor:{name:""}}}},methods:{getVendorsSearch:function(){y({method:"GET",url:"data_items/vendors",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{vendedor:this.searchVendor.value}}).then((e=>{this.vendors.value=e.data}))},getSupervisorsSearch:function(){y({method:"GET",url:"data_items/supervisors",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{supervisor:this.searchSupervisor.value}}).then((e=>{this.supervisors.value=e.data}))},pageAlter:function(e,t){this.page.name=e,"supervisor"===e?this.page.supervisor.name=t:"vendor"===e&&(this.page.vendor.name=t)}},mounted(){this.getVendorsSearch(),this.getSupervisorsSearch(),this.pageAlter("supervisor","Keila Jaqueline da Silva")}};const Wa=(0,i.Z)(Na,[["render",Ea],["__scopeId","data-v-71740a8e"]]);var Ga=Wa;const Ka=e=>((0,s.dD)("data-v-e31b4d08"),e=e(),(0,s.Cn)(),e),Ha={id:"container"},$a={id:"content"},Ra=Ka((()=>(0,s._)("h1",{id:"title-page"},"Colaboradores",-1))),Ya={id:"content-page"},La={id:"list-collaborators"},Ja=Ka((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Nome"),(0,s._)("th",null,"Função"),(0,s._)("th",null,"Supervisão"),(0,s._)("th",null,"Canal"),(0,s._)("th",null,"Meta atual"),(0,s._)("th",null,"Ações")])],-1))),Qa=["onClick"],Xa=Ka((()=>(0,s._)("div",{id:"filters"},null,-1))),en={key:0,id:"modal"};function tn(e,t,a,n,o,i){const l=(0,s.up)("MenuMain"),r=(0,s.up)("EditCollaborator"),d=(0,s.up)("InfoMsg");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Ha,[(0,s.Wm)(l),(0,s._)("div",$a,[Ra,(0,s._)("div",Ya,[(0,s._)("div",La,[(0,s._)("table",null,[Ja,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.collaborators,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,E.zw)(e.id),1),(0,s._)("td",null,(0,E.zw)(e.nome),1),(0,s._)("td",null,(0,E.zw)(e.funcao),1),(0,s._)("td",null,(0,E.zw)(e.supervisor),1),(0,s._)("td",null,(0,E.zw)(e.canal),1),(0,s._)("td",null,(0,E.zw)(e.meta),1),(0,s._)("td",null,[(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-edit",onClick:t=>i.editCollaborator(e.id,e.supervisor,e.canal,e.meta)},null,8,Qa)])])])))),128))])]),Xa])])])]),2===o.page?((0,s.wg)(),(0,s.iD)("div",en,[(0,s.Wm)(r,{collaborator:this.collaborator,onClosePage:t[0]||(t[0]=e=>i.pageTrade(1)),onRefreshData:i.getCollaborators,onMsg:i.infoMsg},null,8,["collaborator","onRefreshData","onMsg"])])):(0,s.kq)("",!0),o.info.status?((0,s.wg)(),(0,s.j4)(d,{key:1,msg:o.info.msg,type:"sucess"},null,8,["msg"])):(0,s.kq)("",!0)],64)}const an=e=>((0,s.dD)("data-v-a8c91a50"),e=e(),(0,s.Cn)(),e),nn={id:"card-modal"},sn={id:"content-card"},on=an((()=>(0,s._)("h6",null,"Editar configurações",-1))),ln={id:"inputs"},rn={class:"input"},dn=an((()=>(0,s._)("label",{for:"supervisor"},"Supervisor",-1))),un={class:"input"},cn=an((()=>(0,s._)("label",{for:"supervisor"},"Canal",-1))),pn={class:"input"},hn=an((()=>(0,s._)("label",{for:"supervisor"},"Meta atual",-1)));function _n(e,t,a,o,i,l){const r=(0,s.up)("CloseButton");return(0,s.wg)(),(0,s.iD)("div",nn,[(0,s.Wm)(r,{onClosePage:t[0]||(t[0]=e=>l.closePage())}),(0,s._)("div",sn,[on,(0,s._)("div",ln,[(0,s._)("div",rn,[dn,(0,s.wy)((0,s._)("input",{type:"text",name:"supervisor",id:"supervisor","onUpdate:modelValue":t[1]||(t[1]=e=>i.inputs.supervisor=e),autocomplete:"off"},null,512),[[n.nr,i.inputs.supervisor]])]),(0,s._)("div",un,[cn,(0,s.wy)((0,s._)("input",{type:"text",name:"canal",id:"canal","onUpdate:modelValue":t[2]||(t[2]=e=>i.inputs.channel=e),autocomplete:"off"},null,512),[[n.nr,i.inputs.channel]])]),(0,s._)("div",pn,[hn,(0,s.wy)((0,s._)("input",{type:"number",name:"meta",id:"meta","onUpdate:modelValue":t[3]||(t[3]=e=>i.inputs.meta=e)},null,512),[[n.nr,i.inputs.meta]])]),(0,s._)("button",{onClick:t[4]||(t[4]=e=>l.editCollaborator())},"Cadastrar informações")])])])}function vn(e,t,a,n,o,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[0]||(t[0]=(...e)=>i.closePage&&i.closePage(...e))})])}var mn={name:"CloseButton",methods:{closePage:function(){this.$emit("close-page")}}};const fn=(0,i.Z)(mn,[["render",vn],["__scopeId","data-v-72b45ad6"]]);var gn=fn,bn={name:"EditCollaborator",components:{CloseButton:gn},props:{collaborator:{required:!0,type:Object}},data(){return{inputs:{supervisor:this.collaborator.supervisor,channel:this.collaborator.channel,meta:this.collaborator.meta},msg:""}},methods:{closePage:function(){this.$emit("close-page")},refreshData:function(e,t){this.$emit("refresh-data"),this.closePage(),this.$emit("msg",{data:{msg:e,type:t}})},editCollaborator:function(){y({method:"PUT",url:"collaborator/"+this.collaborator.id,headers:{Authorization:"Bearer "+k.Z.get("rv_token")},data:{supervisor:this.inputs.supervisor,canal:this.inputs.channel,meta:this.inputs.meta}}).then((e=>{1===e.data.status?this.refreshData(e.data.msg,"sucess"):alert(e.data.msg)})).catch((e=>{console.log(e)}))}}};const wn=(0,i.Z)(bn,[["render",_n],["__scopeId","data-v-a8c91a50"]]);var yn=wn;function kn(e,t,a,n,o,i){return(0,s.wg)(),(0,s.iD)("div",{id:"box-msg",class:(0,E.C_)({sucess:"sucess"===a.type,trigger:"trigger"===a.type})},(0,E.zw)(a.msg),3)}var Cn={name:"InfoMsg",props:{type:{required:!0,type:String},msg:{required:!0,type:String}}};const Dn=(0,i.Z)(Cn,[["render",kn],["__scopeId","data-v-6fe86d00"]]);var zn=Dn,Sn={name:"CollaboratorPage",components:{MenuMain:Q,EditCollaborator:yn,InfoMsg:zn},data(){return{collaborators:{},collaborator:{id:null,supervisor:null,channel:null,meta:null},page:1,info:{msg:null,status:!1}}},methods:{getCollaborators:function(){y({method:"GET",url:"collaborator",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.collaborators=e.data})).catch((e=>{console.log(e)}))},editCollaborator:function(e,t,a,n){this.pageTrade(2),this.collaborator.id=e,this.collaborator.supervisor=t,this.collaborator.channel=a,this.collaborator.meta=n},pageTrade:function(e){this.page=e},infoMsg:function(e){this.info.msg=e.data.msg,this.info.type=e.data.type,this.info.status=!0,setTimeout((()=>{this.info.status=!1}),3e3)}},mounted(){this.getCollaborators()}};const An=(0,i.Z)(Sn,[["render",tn],["__scopeId","data-v-e31b4d08"]]);var Mn=An;const jn=[{path:"/",name:"LoginPage",component:M},{path:"/home",name:"HomePage",component:te,beforeEnter:ae.auth},{path:"/vendas",name:"SalesAll",component:fa,beforeEnter:ae.auth},{path:"/minhas-vendas",name:"MySales",component:ft,beforeEnter:ae.auth},{path:"/equipes",name:"VendorsAll",component:Ga,beforeEnter:ae.auth},{path:"/colaboradores",name:"CollaboratorPage",component:Mn,beforeEnter:ae.auth}],Fn=(0,c.p7)({history:(0,c.PO)(),routes:jn});var Zn=Fn;(0,n.ri)(d).use(Zn).mount("#app")},9078:function(e,t,a){e.exports=a.p+"img/logo_azul_laranja.28283efc.png"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,i=n[0],l=n[1],r=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var u=r(a)}for(t&&t(n);d<i.length;d++)o=i[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9853)}));n=a.O(n)})();
//# sourceMappingURL=app.13efc34d.js.map