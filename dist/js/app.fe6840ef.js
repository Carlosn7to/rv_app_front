(function(){"use strict";var e={6333:function(e,t,a){var n=a(9242),s=a(3396);function i(e,t){const a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(a)}var l=a(89);const r={},o=(0,l.Z)(r,[["render",i]]);var d=o,u=a(5431);(0,u.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=a(2483);const p={id:"container-login"};function h(e,t,a,n,i,l){const r=(0,s.up)("CardLogin");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s.Wm)(r)])}const v={id:"card"},_={id:"logo-company"},f=["src"],m={id:"form"};function g(e,t,i,l,r,o){return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",_,[(0,s._)("img",{src:a(9078),alt:"logo_age"},null,8,f)]),(0,s._)("div",m,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e),type:"text",name:"email",id:"email",placeholder:"E-mail"},null,512),[[n.nr,r.email]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),onKeydown:t[2]||(t[2]=(0,n.D2)(((...e)=>o.authentic&&o.authentic(...e)),["enter"])),type:"password",name:"password",id:"password",placeholder:"Senha"},null,544),[[n.nr,r.password]]),(0,s._)("input",{type:"submit",value:"Entrar",onClick:t[3]||(t[3]=(...e)=>o.authentic&&o.authentic(...e))})])])}var b=a(6265),w=a.n(b);const y=w().create({baseURL:"http://v1.agerv.tote.local/api/",headers:{}});var k=a(680),D={name:"CardLogin",data(){return{email:"",password:""}},methods:{authentic:function(){const e={email:this.email,password:this.password};y({method:"POST",url:"login",headers:{"Content-Type":"application/json",Access:"application/json"},data:JSON.stringify(e)}).then((e=>{k.Z.set("rv_token",e.data.access_token),k.Z.set("name",e.data.name),k.Z.set("permission",e.data.permission),this.$router.replace("/minhas-vendas")})).catch((e=>{console.log(e)}))},teste:function(){var e=window.screen.height,t=window.screen.width;alert(e),alert(t+"largura")}},mounted(){}};const z=(0,l.Z)(D,[["render",g],["__scopeId","data-v-2c4a1bde"]]);var S=z,C={name:"LoginPage",components:{CardLogin:S}};const A=(0,l.Z)(C,[["render",h],["__scopeId","data-v-9f51bae0"]]);var j=A;const F={id:"container"},M=(0,s._)("div",{id:"content"},[(0,s._)("h1",{id:"title-page"},"Página inicial")],-1);function Z(e,t,a,n,i,l){const r=(0,s.up)("MenuMain");return(0,s.wg)(),(0,s.iD)("div",F,[(0,s.Wm)(r),M])}var V=a(7139);const E=e=>((0,s.dD)("data-v-29f8bcaf"),e=e(),(0,s.Cn)(),e),q={id:"logo-company"},O=["src"],T=E((()=>(0,s._)("i",{class:"fi fi-rr-angle-small-left"},null,-1))),U=E((()=>(0,s._)("i",{class:"fi fi-rr-menu-burger"},null,-1))),x=[T,U],B={id:"content-menu"},N={class:"href-menu"},P=E((()=>(0,s._)("span",null,"Principal",-1))),I=E((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-chart-histogram"})]),(0,s._)("span",null,"Minhas vendas")],-1))),K={class:"href-menu"},G=E((()=>(0,s._)("span",null,"Ações",-1))),H=E((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-sign-out-alt"})]),(0,s._)("span",null,"Logout")],-1)));function W(e,t,n,i,l,r){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:(0,V.C_)(["menu",{menuOff:l.menu}])},[(0,s._)("div",q,[(0,s._)("img",{src:a(9078),alt:"logo-age"},null,8,O),(0,s._)("div",{id:"menu-hamb",onClick:t[0]||(t[0]=e=>r.alterMenu())},x)]),(0,s._)("div",B,[(0,s._)("nav",null,[(0,s._)("ul",N,[P,(0,s.Wm)(o,{to:"/home"}),(0,s.Wm)(o,{to:"/minhas-vendas"},{default:(0,s.w5)((()=>[I])),_:1})]),(0,s._)("ul",K,[G,(0,s.Wm)(o,{to:"/",onClick:r.logout},{default:(0,s.w5)((()=>[H])),_:1},8,["onClick"])])])])],2)}var R={name:"MenuMain",data(){return{menu:!0}},methods:{alterMenu:function(){!1===this.menu?this.menu=!0:this.menu=!1},logout:function(){k.Z.remove("rv_token"),k.Z.remove("name")}}};const Y=(0,l.Z)(R,[["render",W],["__scopeId","data-v-29f8bcaf"]]);var L=Y,$={name:"HomePage",components:{MenuMain:L}};const J=(0,l.Z)($,[["render",Z]]);var Q=J,X={auth(e,t,a){const n=k.Z.get("rv_token");y({method:"get",url:"validatedToken",headers:{Authorization:"Bearer "+n}}).then((e=>{if(1===e.data)return a()})).catch((()=>a({path:"/"})))}};const ee=e=>((0,s.dD)("data-v-763ac1e1"),e=e(),(0,s.Cn)(),e),te={id:"container"},ae={id:"content"},ne=ee((()=>(0,s._)("h1",{id:"title-page"},"Minha Dashboard",-1))),se={id:"content-page"},ie={id:"sales"},le={id:"dashboards"},re={class:"dashboard",style:{background:"#FEA11D"}},oe=ee((()=>(0,s._)("h6",null,"Estrelas",-1))),de=ee((()=>(0,s._)("i",{class:"fi fi-ss-star"},null,-1))),ue={class:"dashboard",style:{"background-color":"#009688"}},ce=ee((()=>(0,s._)("h6",null,"Vendas válidas",-1))),pe=ee((()=>(0,s._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),he={class:"dashboard",style:{"background-color":"#3F51B5"}},ve=ee((()=>(0,s._)("h6",null,"Top plano",-1))),_e=ee((()=>(0,s._)("i",{class:"fi fi-ss-shopping-cart-check"},null,-1))),fe={class:"dashboard",style:{"background-color":"#F44336"}},me=ee((()=>(0,s._)("h6",null,"Cancelamentos",-1))),ge=ee((()=>(0,s._)("i",{class:"fi fi-ss-delete-document"},null,-1))),be={id:"dashboards"},we={class:"dashboard",style:{background:"rgba(0,150,2,0.85)"}},ye=ee((()=>(0,s._)("h6",null,"Comissão",-1))),ke=ee((()=>(0,s._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),De={class:"dashboard",style:{"background-color":"#feca1d"}},ze=ee((()=>(0,s._)("h6",null,"Valor da estrela",-1))),Se=ee((()=>(0,s._)("i",{class:"fi fi-sr-grin-stars"},null,-1))),Ce={class:"dashboard",style:{"background-color":"#983fb5"}},Ae=ee((()=>(0,s._)("h6",null,"Meta atingida",-1))),je=ee((()=>(0,s._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),Fe=ee((()=>(0,s._)("div",{class:"dashboard",style:{"background-color":"rgba(145,145,145,0.65)"}},[(0,s._)("div",null,[(0,s._)("span",null,"0%"),(0,s._)("h6",null,"Deflator")]),(0,s._)("i",{class:"fi fi-sr-settings-sliders"})],-1))),Me={class:"content-sales"},Ze={id:"list-sales"},Ve=ee((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nº contrato"),(0,s._)("th",{style:{"text-align":"left"}},"Nome do cliente"),(0,s._)("th",{style:{"text-align":"left"}},"Plano"),(0,s._)("th",null,"Status")])],-1))),Ee={style:{"text-align":"left"}},qe={style:{"text-align":"left"}},Oe={id:"calc-sales"},Te=ee((()=>(0,s._)("h6",null,"Projeção de vendas",-1))),Ue=(0,s.Uk)("Hoje é dia "),xe=(0,s.Uk)(", faltam "),Be=(0,s.Uk)(" dias para acabar seu mês e caso você mantenha esse desempenho, terminará o mês com: "),Ne={class:"info-projection"},Pe={style:{color:"#FEA11D"}},Ie=ee((()=>(0,s._)("i",{class:"fi fi-ss-star"},null,-1))),Ke=(0,s.Uk)("Estrelas: "),Ge={style:{color:"#009688"}},He=ee((()=>(0,s._)("i",{class:"fi fi-ss-rocket-lunch"},null,-1))),We=(0,s.Uk)("Vendas: "),Re={style:{color:"#983fb5"}},Ye=ee((()=>(0,s._)("i",{class:"fi fi-sr-chart-line-up"},null,-1))),Le=(0,s.Uk)("Meta atingida: "),$e={style:{color:"rgba(0,150,2,0.85)"}},Je=ee((()=>(0,s._)("i",{class:"fi fi-sr-sack-dollar"},null,-1))),Qe=(0,s.Uk)("Comissão: "),Xe={key:0,class:"tip-projection"},et=ee((()=>(0,s._)("i",{class:"fi fi-sr-lightbulb-dollar"},null,-1))),tt=ee((()=>(0,s._)("p",null,[(0,s.Uk)("Faltará pouco pra meta... "),(0,s._)("br"),(0,s._)("br"),(0,s._)("b",null,"Você consegue!")],-1))),at=[et,tt],nt={key:0,id:"filter"},st={class:"itens-filter"},it=ee((()=>(0,s._)("h6",null,"Ano",-1))),lt={id:"years"},rt={class:"itens-filter"},ot=ee((()=>(0,s._)("h6",null,"Mês",-1))),dt={class:"months"},ut={class:"itens-filter",style:{border:"none"}};function ct(e,t,a,n,i,l){const r=(0,s.up)("MenuMain");return(0,s.wg)(),(0,s.iD)("div",te,[(0,s.Wm)(r),(0,s._)("div",ae,[ne,(0,s._)("div",se,[(0,s._)("div",ie,[(0,s._)("div",le,[(0,s._)("div",re,[(0,s._)("div",null,[(0,s._)("span",null,(0,V.zw)(i.dashboard.stars.value),1),oe]),de]),(0,s._)("div",ue,[(0,s._)("div",null,[(0,s._)("span",null,(0,V.zw)(i.dashboard.sales.count),1),ce]),pe]),(0,s._)("div",he,[(0,s._)("div",null,[(0,s._)("span",null,(0,V.zw)(i.dashboard.plan.name),1),ve]),_e]),(0,s._)("div",fe,[(0,s._)("div",null,[(0,s._)("span",null,(0,V.zw)(i.dashboard.cancel),1),me]),ge])]),(0,s._)("div",be,[(0,s._)("div",we,[(0,s._)("div",null,[(0,s._)("span",null,"R$"+(0,V.zw)(i.dashboard.stars.amount),1),ye]),ke]),(0,s._)("div",De,[(0,s._)("div",null,[(0,s._)("span",null,"R$"+(0,V.zw)(i.dashboard.stars.price),1),ze]),Se]),(0,s._)("div",Ce,[(0,s._)("div",null,[(0,s._)("span",null,(0,V.zw)(i.dashboard.stars.meta)+"%",1),Ae]),je]),Fe]),(0,s._)("div",Me,[(0,s._)("div",Ze,[(0,s._)("table",null,[Ve,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.dashboard.sales.sales,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id_contrato},[(0,s._)("td",null,(0,V.zw)(e.id_contrato)+"1",1),(0,s._)("td",Ee,(0,V.zw)(e.nome_cliente),1),(0,s._)("td",qe,(0,V.zw)(e.plano),1),(0,s._)("td",null,(0,V.zw)(e.status),1)])))),128))])])]),(0,s._)("div",Oe,[Te,(0,s._)("p",null,[Ue,(0,s._)("b",null,(0,V.zw)(i.projection.today),1),xe,(0,s._)("b",null,(0,V.zw)(i.projection.missing),1),Be]),(0,s._)("div",Ne,[(0,s._)("span",Pe,[Ie,Ke,(0,s._)("b",null,(0,V.zw)(i.projection.stars),1)]),(0,s._)("div",null,[(0,s._)("span",Ge,[He,We,(0,s._)("b",null,(0,V.zw)(i.projection.sales),1)])]),(0,s._)("div",null,[(0,s._)("span",Re,[Ye,Le,(0,s._)("b",null,(0,V.zw)(i.projection.meta)+"%",1)])]),(0,s._)("div",null,[(0,s._)("span",$e,[Je,Qe,(0,s._)("b",null,"R$"+(0,V.zw)(i.projection.comission),1)])])]),i.projection.meta>70&&i.projection.meta<100?((0,s.wg)(),(0,s.iD)("div",Xe,at)):(0,s.kq)("",!0)])])]),2===i.operator?((0,s.wg)(),(0,s.iD)("div",nt,[(0,s._)("div",st,[it,(0,s._)("div",lt,[(0,s._)("span",{class:(0,V.C_)(["itemFilter",{isActive:2022===i.filter.year}]),onClick:t[0]||(t[0]=e=>l.filterYear(2022))},"2022",2)])]),(0,s._)("div",rt,[ot,(0,s._)("div",dt,[(0,s._)("span",{class:(0,V.C_)(["itemFilter",{isActive:"05"===i.filter.month}]),onClick:t[1]||(t[1]=e=>l.filterMonth("05"))},"Mai",2),(0,s._)("span",{class:(0,V.C_)(["itemFilter",{isActive:"06"===i.filter.month}]),onClick:t[2]||(t[2]=e=>l.filterMonth("06"))},"Jun",2),(0,s._)("span",{class:(0,V.C_)(["itemFilter",{isActive:"07"===i.filter.month}]),onClick:t[3]||(t[3]=e=>l.filterMonth("07"))},"Jul",2),(0,s._)("span",{class:(0,V.C_)(["itemFilter",{isActive:"08"===i.filter.month}]),onClick:t[4]||(t[4]=e=>l.filterMonth("08"))},"Ago",2)])]),(0,s._)("div",ut,[(0,s._)("button",{onClick:t[5]||(t[5]=(...e)=>l.getFilterData&&l.getFilterData(...e))},"Filtrar")])])):(0,s.kq)("",!0)])])])}var pt={name:"MySales",components:{MenuMain:L},data(){return{operator:k.Z.get("operator"),filter:{year:null,month:null,status:null},dashboard:{stars:{value:null,amount:null,price:null,meta:null},sales:{count:null,sales:null},plan:{name:null,un:null},cancel:null},projection:{today:null,missing:null,stars:null,sales:null,meta:null,comission:null}}},methods:{filterYear:function(e){this.filter.year=e},filterMonth:function(e){this.filter.month=e},filterStatus:function(e){null===this.filter.status||this.filter.status!==e?this.filter.status=e:this.filter.status=null},getFilterData:function(){y({method:"GET",url:"data_items/filter-sales",headers:{Authorization:"Bearer "+k.Z.get("rv_token"),username:k.Z.get("name")},params:{year:this.filter.year,month:this.filter.month,status:this.filter.status}}).then((e=>{this.dashboard.sales.count="",this.dashboard.sales.sales="",this.dashboard.stars.value=0,this.dashboard.stars.amount=0,this.dashboard.stars.price=0,this.dashboard.stars.meta=0,this.dashboard.plan.name="",this.dashboard.plan.un="",this.dashboard.cancel=0,this.projection.today=e.data.dashboard.stars.original.projection.original.today,this.projection.missing=e.data.dashboard.stars.original.projection.original.missing,this.projection.stars=e.data.dashboard.stars.original.projection.original.stars,this.projection.sales=e.data.dashboard.stars.original.projection.original.comission.original.sales,this.projection.meta=e.data.dashboard.stars.original.projection.original.comission.original.meta,this.projection.comission=e.data.dashboard.stars.original.projection.original.comission.original.comission,this.dashboard.sales.count=e.data.dashboard.sales,this.dashboard.sales.sales=e.data.sales,this.dashboard.stars.value=e.data.dashboard.stars.original.stars,this.dashboard.stars.amount=e.data.dashboard.stars.original.comission,this.dashboard.stars.price=e.data.dashboard.stars.original.price,this.dashboard.stars.meta=e.data.dashboard.stars.original.meta,this.dashboard.plan.name=e.data.dashboard.plan,this.dashboard.plan.un=e.data.dashboard.plan_qntd,this.dashboard.cancel=e.data.dashboard.cancelled})).catch((e=>{console.log(e)}))}},mounted(){this.getFilterData()}};const ht=(0,l.Z)(pt,[["render",ct],["__scopeId","data-v-763ac1e1"]]);var vt=ht;const _t=e=>((0,s.dD)("data-v-cb20793c"),e=e(),(0,s.Cn)(),e),ft={id:"container"},mt={id:"content"},gt=_t((()=>(0,s._)("h1",{id:"title-page"},"Todas as vendas instaladas",-1))),bt={id:"content-page"},wt={id:"filter-table"},yt={id:"container-search"},kt=_t((()=>(0,s._)("i",{class:"fi fi-rr-filter"},null,-1))),Dt=[kt],zt={id:"table"},St=_t((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nº contrato"),(0,s._)("th",null,"Nome do cliente"),(0,s._)("th",null,"Vendedor"),(0,s._)("th",null,"Supervisor"),(0,s._)("th",null,"Status"),(0,s._)("th",null,"Situação"),(0,s._)("th",null,"Plano")])],-1))),Ct={key:0,class:"static-td sucess"},At={key:1,class:"static-td pendent"},jt={key:2,class:"static-td pendent"},Ft={key:0,class:"static-td sucess"},Mt={key:1,class:"static-td failure"},Zt={key:2,class:"static-td failure",style:{"font-size":"1rem"}},Vt={key:3,class:"static-td failure",style:{"font-size":"1rem"}},Et={key:4,class:"static-td offline"},qt={key:5,class:"static-td offline"},Ot={key:6,class:"static-td failure"},Tt={key:7,class:"static-td offline"};function Ut(e,t,a,i,l,r){const o=(0,s.up)("MenuMain"),d=(0,s.up)("FilterCard");return(0,s.wg)(),(0,s.iD)("div",ft,[(0,s.Wm)(o),(0,s._)("div",mt,[gt,(0,s._)("div",bt,[(0,s._)("div",wt,[(0,s._)("div",yt,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do vendedor...",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>l.search.value=e),onKeydown:t[1]||(t[1]=(0,n.D2)((e=>r.getSalesSearch()),["enter"]))},null,544),[[n.nr,l.search.value]])]),(0,s._)("div",{id:"filter",onClick:t[2]||(t[2]=(...e)=>r.onFilter&&r.onFilter(...e))},Dt)]),(0,s._)("div",zt,[(0,s._)("table",null,[St,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.sales.data,((e,t)=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",null,(0,V.zw)(e.id_contrato),1),(0,s._)("td",null,(0,V.zw)(e.nome_cliente),1),(0,s._)("td",null,(0,V.zw)(e.vendedor),1),(0,s._)("td",null,(0,V.zw)(e.supervisor),1),(0,s._)("td",null,["Aprovado"===e.status?((0,s.wg)(),(0,s.iD)("span",Ct,(0,V.zw)(e.status),1)):(0,s.kq)("",!0),"Pré-Contrato"===e.status?((0,s.wg)(),(0,s.iD)("span",At,(0,V.zw)(e.status),1)):(0,s.kq)("",!0),"Em Aprovação"===e.status?((0,s.wg)(),(0,s.iD)("span",jt,(0,V.zw)(e.status),1)):(0,s.kq)("",!0)]),(0,s._)("td",null,["Normal"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Ft,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Cancelado"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Mt,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Bloqueio Financeiro"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Zt,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Bloqueio Administrativo"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Vt,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Demonstração"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Et,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Encerrado"===e.situacao?((0,s.wg)(),(0,s.iD)("span",qt,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Suspenso"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Ot,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0),"Cortesia"===e.situacao?((0,s.wg)(),(0,s.iD)("span",Tt,(0,V.zw)(e.situacao),1)):(0,s.kq)("",!0)]),(0,s._)("td",null,(0,V.zw)(e.plano),1)])))),128))])])])])]),1===l.filter.value?((0,s.wg)(),(0,s.j4)(d,{key:0,onOnFilter:r.onFilter,onApplyFilters:r.applyFilters},null,8,["onOnFilter","onApplyFilters"])):(0,s.kq)("",!0)])}const xt=e=>((0,s.dD)("data-v-5bbdef28"),e=e(),(0,s.Cn)(),e),Bt={id:"modal"},Nt={id:"card"},Pt=xt((()=>(0,s._)("i",{class:"fi fi-rr-cross-small"},null,-1))),It=[Pt],Kt={id:"content-filter"},Gt={class:"input-filter"},Ht=xt((()=>(0,s._)("label",{for:"n_contrato"},"Nº Contrato",-1))),Wt={class:"input-filter"},Rt=xt((()=>(0,s._)("label",{for:"nome_cliente"},"Nome do cliente",-1))),Yt={class:"input-filter"},Lt=xt((()=>(0,s._)("label",{for:"vendedor"},"Vendedor",-1))),$t={class:"input-filter"},Jt=xt((()=>(0,s._)("label",{for:"supervisor"},"Supervisor",-1))),Qt={class:"input-filter"},Xt=xt((()=>(0,s._)("label",{for:""},"Status",-1))),ea={class:"check-container"},ta=["id","value"],aa=["for"],na={class:"input-filter"},sa=xt((()=>(0,s._)("label",{for:""},"Situação",-1))),ia={class:"check-container"},la=["id","value"],ra=["for"];function oa(e,t,a,i,l,r){return(0,s.wg)(),(0,s.iD)("div",Bt,[(0,s._)("div",Nt,[(0,s._)("div",{id:"close-button",onClick:t[0]||(t[0]=(...e)=>r.onFilter&&r.onFilter(...e))},It),(0,s._)("div",Kt,[(0,s._)("div",Gt,[Ht,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.filter.inputs.id_contrato=e),type:"text",name:"n_contrato",id:"n_contrato"},null,512),[[n.nr,l.filter.inputs.id_contrato]])]),(0,s._)("div",Wt,[Rt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.filter.inputs.nome_cliente=e),type:"text",name:"nome_cliente",id:"nome_cliente"},null,512),[[n.nr,l.filter.inputs.nome_cliente]])]),(0,s._)("div",Yt,[Lt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.filter.inputs.vendedor=e),type:"text",name:"vendedor",id:"vendedor"},null,512),[[n.nr,l.filter.inputs.vendedor]])]),(0,s._)("div",$t,[Jt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.filter.inputs.supervisor=e),type:"text",name:"supervisor",id:"supervisor"},null,512),[[n.nr,l.filter.inputs.supervisor]])]),(0,s._)("div",Qt,[Xt,(0,s._)("div",ea,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.filter.status,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"check",key:e.status},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>l.filter.inputs.status=e),type:"checkbox",name:"status",id:e.status,value:e.status},null,8,ta),[[n.e8,l.filter.inputs.status]]),(0,s._)("label",{for:e.status},(0,V.zw)(e.status),9,aa)])))),128))])]),(0,s._)("div",na,[sa,(0,s._)("div",ia,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.filter.situation,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"check",key:e.situacao},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>l.filter.inputs.situacao=e),type:"checkbox",name:"situacao",id:e.situacao,value:e.situacao},null,8,la),[[n.e8,l.filter.inputs.situacao]]),(0,s._)("label",{for:e.situacao},(0,V.zw)(e.situacao),9,ra)])))),128))])])]),(0,s._)("input",{type:"submit",class:"submit",value:"Aplicar filtros",onClick:t[7]||(t[7]=e=>r.applyFilters("oi"))})])])}var da={name:"FilterCard",data(){return{filter:{type:Object,default:null,status:null,situation:null,inputs:{id_contrato:"",nome_cliente:"",vendedor:"",supervisor:"",status:[],situacao:[]}}}},methods:{onFilter:function(){this.$emit("on-filter")},getFilters:function(){y({method:"GET",url:"data_items/status",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.filter.status=e.data[0],this.filter.situation=e.data[1]}))},applyFilters:function(){this.$emit("apply-filters",this.filter.inputs),this.onFilter()}},mounted(){this.getFilters()}};const ua=(0,l.Z)(da,[["render",oa],["__scopeId","data-v-5bbdef28"]]);var ca=ua,pa={name:"SalesAll",components:{MenuMain:L,FilterCard:ca},data(){return{sales:{type:Object,default:null},search:{type:String,default:null,value:""},filter:{type:Number,default:0,value:0}}},methods:{getSales:function(){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.sales=e}))},getSalesSearch:function(){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{vendedor:this.search.value}}).then((e=>{this.sales=e}))},onFilter(){0===this.filter.value?this.filter.value=1:this.filter.value=0},applyFilters:function(e){y({method:"GET",url:"data_voalle",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:e}).then((e=>{this.sales=e}))}},mounted(){this.getSales()}};const ha=(0,l.Z)(pa,[["render",Ut],["__scopeId","data-v-cb20793c"]]);var va=ha;const _a=e=>((0,s.dD)("data-v-71740a8e"),e=e(),(0,s.Cn)(),e),fa={id:"container"},ma={key:0,id:"content"},ga=_a((()=>(0,s._)("h1",{id:"title-page"},"Todas os Supervisores/Vendedores",-1))),ba={id:"content-page"},wa={id:"filter-table"},ya={id:"container-search"},ka={id:"container-search"},Da={id:"table"},za=_a((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Supervisor"),(0,s._)("th",null,"Ações")])],-1))),Sa={class:"actions"},Ca=["onClick"],Aa=_a((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Vendedor"),(0,s._)("th",null,"Ações")])],-1))),ja=_a((()=>(0,s._)("td",{class:"actions"},[(0,s._)("i",{class:"fi fi-rr-sign-in-alt"})],-1)));function Fa(e,t,a,i,l,r){const o=(0,s.up)("MenuMain"),d=(0,s.up)("SupervisorDashboard");return(0,s.wg)(),(0,s.iD)("div",fa,[(0,s.Wm)(o),"all"===l.page.name?((0,s.wg)(),(0,s.iD)("div",ma,[ga,(0,s._)("div",ba,[(0,s._)("div",wa,[(0,s._)("div",ya,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do supervisor...",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchSupervisor.value=e),onKeydown:t[1]||(t[1]=(0,n.D2)((e=>r.getSupervisorsSearch()),["enter"]))},null,544),[[n.nr,l.searchSupervisor.value]])]),(0,s._)("div",ka,[(0,s.wy)((0,s._)("input",{type:"text",name:"search",id:"search",placeholder:"Nome do vendedor...",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=e=>l.searchVendor.value=e),onKeydown:t[3]||(t[3]=(0,n.D2)((e=>r.getVendorsSearch()),["enter"]))},null,544),[[n.nr,l.searchVendor.value]])])]),(0,s._)("div",Da,[(0,s._)("table",null,[za,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.supervisors.value,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.vendedor},[(0,s._)("td",null,(0,V.zw)(e.supervisor),1),(0,s._)("td",Sa,[(0,s._)("i",{class:"fi fi-rr-sign-in-alt",onClick:t=>r.pageAlter("supervisor",e.supervisor)},null,8,Ca)])])))),128))])]),(0,s._)("table",null,[Aa,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.vendors.value,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.vendedor},[(0,s._)("td",null,(0,V.zw)(e.vendedor),1),ja])))),128))])])])])])):(0,s.kq)("",!0),"supervisor"===l.page.name?((0,s.wg)(),(0,s.j4)(d,{key:1,supervisor:l.page.supervisor.name},null,8,["supervisor"])):(0,s.kq)("",!0)])}const Ma=e=>((0,s.dD)("data-v-b6822a2c"),e=e(),(0,s.Cn)(),e),Za={id:"content"},Va={id:"title-page"},Ea=Ma((()=>(0,s._)("div",{id:"content-page"},null,-1)));function qa(e,t,a,n,i,l){return(0,s.wg)(),(0,s.iD)("div",Za,[(0,s._)("h1",Va,"Supervisor(a) - "+(0,V.zw)(a.supervisor),1),Ea])}var Oa=a(4851),Ta={name:"SupervisorDashboard",components:{},props:{supervisor:{required:!0,type:String}},data(){return{vendors:{},graph:{bar:{data:null,label:null},pie:{data:null,label:null}}}},methods:{getDataSupervisor:function(){y({method:"GET",url:"data_items/supervisor_data",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{supervisor:this.supervisor}}).then((e=>{this.vendors=e.data})).catch((e=>{console.log(e)}))},getAmount:function(){y({method:"GET",url:"data_items/supervisor_amount",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.graph.bar.data=e.data.amount,this.graph.bar.label=e.data.month})).catch((e=>{console.log(e)}))},getTeam:function(){y({method:"GET",url:"data_items/supervisor_team",headers:{Authorization:"Bearer "+k.Z.get("rv_token")}}).then((e=>{this.graph.pie.data=e.data}))},graphBar:function(){const e=this.graph.bar.label,t=document.getElementById("myChart"),a=new Oa.Z(t,{type:"bar",data:{labels:e,datasets:[{label:"Receita R$",data:this.graph.bar.data,backgroundColor:["#0f297d"],borderColor:["#0f297d"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1}});return a},graphPizza:function(){const e=document.getElementById("pizza"),t=new Oa.Z(e,{type:"pie",data:{labels:["Ativo","Inativo"],datasets:[{label:"Dataset 1",data:[12,16],backgroundColor:["green","red"]}]},options:{responsive:!0,maintainAspectRatio:!1}});return t}},created(){this.getAmount()},mounted(){this.getDataSupervisor(),this.getTeam()}};const Ua=(0,l.Z)(Ta,[["render",qa],["__scopeId","data-v-b6822a2c"]]);var xa=Ua,Ba={name:"VendorsAll",components:{MenuMain:L,SupervisorDashboard:xa},data(){return{searchVendor:{type:String,default:null,value:""},searchSupervisor:{type:String,default:null,value:""},vendors:{type:Object,default:null,value:null},supervisors:{type:Object,default:null,value:null},page:{name:"all",supervisor:{name:""},vendor:{name:""}}}},methods:{getVendorsSearch:function(){y({method:"GET",url:"data_items/vendors",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{vendedor:this.searchVendor.value}}).then((e=>{this.vendors.value=e.data}))},getSupervisorsSearch:function(){y({method:"GET",url:"data_items/supervisors",headers:{Authorization:"Bearer "+k.Z.get("rv_token")},params:{supervisor:this.searchSupervisor.value}}).then((e=>{this.supervisors.value=e.data}))},pageAlter:function(e,t){this.page.name=e,"supervisor"===e?this.page.supervisor.name=t:"vendor"===e&&(this.page.vendor.name=t)}},mounted(){this.getVendorsSearch(),this.getSupervisorsSearch(),this.pageAlter("supervisor","Keila Jaqueline da Silva")}};const Na=(0,l.Z)(Ba,[["render",Fa],["__scopeId","data-v-71740a8e"]]);var Pa=Na;const Ia=[{path:"/",name:"LoginPage",component:j},{path:"/home",name:"HomePage",component:Q,beforeEnter:X.auth},{path:"/vendas",name:"SalesAll",component:va,beforeEnter:X.auth},{path:"/minhas-vendas",name:"MySales",component:vt,beforeEnter:X.auth},{path:"/equipes",name:"VendorsAll",component:Pa,beforeEnter:X.auth}],Ka=(0,c.p7)({history:(0,c.PO)(),routes:Ia});var Ga=Ka;(0,n.ri)(d).use(Ga).mount("#app")},9078:function(e,t,a){e.exports=a.p+"img/logo_azul_laranja.28283efc.png"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,i){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,o=0;o<n.length;o++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(r=!1,i<l&&(l=i));if(r){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,l=n[0],r=n[1],o=n[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(o)var u=o(a)}for(t&&t(n);d<l.length;d++)i=l[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6333)}));n=a.O(n)})();
//# sourceMappingURL=app.fe6840ef.js.map