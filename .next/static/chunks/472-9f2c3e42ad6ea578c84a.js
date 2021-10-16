(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{3472:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),a=n(6265),o=n(1385),l=n(8347),i=n(7294),c=n(4028),s=n(9669),u=n.n(s),m=n(6808),d=n.n(m),p=1e3,x=new Intl.NumberFormat("en-US",{currency:"USD"}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=0,n=0,r=0,a=0,o=0,l=0,i=0,c=0,s=0,u=0,m=0,d=0;e&&e.map((function(e,l){t+=Number(e.loan_amnt),n+=Number(e.total_pymnt),"late_16_30_days"!==e.loan_status&&"late_30_120_days"!==e.loan_status&&"late_grace_period"!==e.loan_status||(r+=Number(e.total_pymnt)),"default"!==e.loan_status&&"charged_off"!==e.loan_status||(a+=Number(e.loan_amnt)-Number(e.total_pymnt)),o+=Number(e.total_rec_principal),Number(e.installment)*Number(e.term.slice(0,1))*12,"default"!=e.loan_status&&"charged_off"!=e.loan_status&&"fully_paid"!=e.loan_status&&(m+=Number(e.loan_amnt)-Number(e.total_rec_principal),"late_16_30_days"!==e.loan_status&&"late_30_120_days"!==e.loan_status&&"late_grace_period"!==e.loan_status||(d+=Number(e.loan_amnt)-Number(e.total_pymnt)),s+=Number(e.total_rec_principal),c+=Number(e.total_rec_interest),i+=3*Number(e.installment)*12),u=m-d}));var f=i-(s+c);return l=t-o-a,{blocks:[{title:"Total Amount Invested",value:"$".concat(x.format(t.toFixed(2)*p))},{title:"Total Received",value:"$".concat(x.format(n.toFixed(2)*p))},{title:"% of Late Payments",value:"".concat((r/n*100).toFixed(2),"%")},{title:"Total Princ. Lost",value:"$".concat(x.format(a.toFixed(2)*p))},{title:"Total Princ. Received",value:"$".concat(x.format(o.toFixed(2)*p))},{title:"Total Princ. Pending",value:"$".concat(x.format(l.toFixed(2)*p))},{title:"Expected Returns",value:"".concat((100*(f/u-1)).toFixed(2),"%")},{title:"Received Returns",value:"".concat((100*(n/o-1)).toFixed(2),"%")}],total_princ_received:Number(o.toFixed(2)),total_princ_pending:Number(l.toFixed(2)),total_princ_lost:Number(a.toFixed(2))}},h=n(3850),b=n(8017),g=n(4096),_=n(8104),y=n(4831),j=n(4195),v=n(3023),O=n(5358),N=n(9307),w=n(8460),k=n(3815),P=n(5145);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Math.PI;var D=function(e){var t=e.selectedNav,n=((0,l.Z)(e,["selectedNav"]),(0,i.useState)(null)),a=n[0],s=n[1],m=(0,i.useState)("all"),p=m[0],x=m[1];(0,i.useEffect)((function(){var e="secondaryLenders/loans/".concat(t.split(" ")[0]);u().get(e,{headers:{pToken:d().get("pToken")}}).then((function(e){var t=e.data;s(t.loans)}))}),[t]);var S={A:{category:"A",categorySum:0},B:{category:"B",categorySum:0},C:{category:"C",categorySum:0},D:{category:"D",categorySum:0}},D=1e3,F=1e18,A=0,T=(a&&a.map((function(e){Number(e.loan_amnt_sec)>A&&(A=Number(e.loan_amnt_sec)),Number(e.loan_amnt_sec)<F&&(F=Number(e.loan_amnt_sec)),"A"===e.loan_grade&&(S.A.categorySum+=Number(e.loan_amnt_sec)*D),"B"===e.loan_grade&&(S.B.categorySum+=Number(e.loan_amnt_sec)*D),"C"===e.loan_grade&&(S.C.categorySum+=Number(e.loan_amnt_sec)*D),"D"===e.loan_grade&&(S.D.categorySum+=Number(e.loan_amnt_sec)*D)})),function(e){return a&&a.reduce((function(t,n){return t[n[e]]||(t[n[e]]={loans:[],loan_amnt_sec:0}),t[n[e]].loans=[].concat((0,o.Z)(t[n[e]].loans),[n]),t[n[e]].loan_amnt_sec=t[n[e]].loan_amnt_sec+parseInt(n.loan_amnt_sec,"10")*D,t}),{})}),I=T("issue_month"),R=C(C({},{Jan:"Jan",Feb:"Feb",Mar:"Mar",Apr:"Apr",May:"May",Jun:"Jun",Jul:"Jul",Aug:"Aug",Sep:"Sep",Oct:"Oct",Nov:"Nov",Dec:"Dec"}),I),B=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],M=I&&Object.keys(R).sort((function(e,t){return B.indexOf(e)-B.indexOf(t)})).map((function(e){return I[e]?{xAxis:e,monthTotal:I[e].loan_amnt_sec}:{xAxis:e,monthTotal:0}})),E=f(a),J=a&&f(a.filter((function(e){return"all"===p?e:e.loan_grade===p}))),L=J&&[{name:"Total Principal Received",value:J.total_princ_received,fill:"#0088FE"},{name:"Total Principal Pending",value:J.total_princ_pending,fill:"#dd7876"},{name:"Total Principal Lost",value:J.total_princ_lost,fill:"#FFBB28"}],W=T("loan_status"),K=W&&Object.keys(W).map((function(e,t){return{name:e,value:W[e].loans.length}}));return(0,r.jsx)(c.ThemeContext.Consumer,{children:function(e){return a?(0,r.jsxs)(h.W,{padding:{sm:"0px",md:"inherit"},children:[(0,r.jsx)(b.xu,{mt:"30px",fontWeight:"700",children:"Loans Overview"}),(0,r.jsx)(g.k,{flexWrap:"wrap",margin:"auto",mt:"30px",justifyContent:{md:"center",sm:"space-between"},children:E.blocks.map((function(n,a){return"Incoming Stats"===t&&"Received Return"===n.title||"Completed Stats"===t&&"Expected Returns"===n.title||"NaN%"===n.value?null:(0,r.jsxs)(g.k,{mr:{md:"10px",sm:"0px"},mb:"25px",w:{md:"19%",sm:"48%"},justifyContent:"center",alignItems:"center",border:"1px solid ".concat(e.colors.gray),borderRadius:"3px",p:"10px",flexDirection:"column",children:[(0,r.jsx)(b.xu,{children:n.title}),(0,r.jsx)(b.xu,{children:n.value})]},a)}))}),(0,r.jsxs)(g.k,{mt:"60px",flexWrap:"wrap",alignItems:"baseline",justifyContent:"center",children:[(0,r.jsxs)(g.k,{w:{md:"50%",sm:"100%"},h:"400px",justifyContent:"center",alignItems:"center",flexDirection:"column",children:[(0,r.jsx)(g.k,{fontWeight:"700",mb:"50px",children:"Total Amount Across Grades"}),(0,r.jsxs)(y.v,{width:400,height:300,data:Object.values(S),margin:{left:50,right:50},children:[(0,r.jsx)(j.q,{vertical:!1,stroke:"#ebf3f0"}),(0,r.jsx)(v.K,{dataKey:"category",fontSize:"12"}),(0,r.jsx)(O.B,{type:"number"}),(0,r.jsx)(N.u,{}),(0,r.jsx)(w.$,{dataKey:"categorySum",fill:"red",barSize:"170px",fontFamily:"sans-serif",children:Object.values(S).map((function(t){return(0,r.jsx)(k.b,{fill:e.colors.primary})}))})]})]}),(0,r.jsxs)(g.k,{mt:{md:"0px",sm:"60px"},w:{md:"50%",sm:"100%"},h:"400px",justifyContent:"center",alignItems:"center",flexDirection:"column",children:[(0,r.jsx)(g.k,{fontWeight:"700",mb:"48px",children:"Total Amount Across Months"}),(0,r.jsxs)(y.v,{width:400,height:300,data:M,margin:{left:50,right:45},children:[(0,r.jsx)(j.q,{vertical:!1,stroke:"#ebf3f0"}),(0,r.jsx)(v.K,{dataKey:"xAxis",fontSize:"12",angle:"-50",interval:0,tickMargin:9}),(0,r.jsx)(O.B,{type:"number",dataKey:"monthTotal"}),(0,r.jsx)(N.u,{}),(0,r.jsx)(w.$,{dataKey:"monthTotal",fill:"red",barSize:"170px",fontFamily:"sans-serif",children:M.map((function(t){return(0,r.jsx)(k.b,{fill:e.colors.primary})}))})]})]})]}),(0,r.jsxs)(g.k,{w:"100%",flexWrap:"wrap",alignItems:"baseline",mt:{sm:"75px",md:"125px"},children:[(0,r.jsxs)(g.k,{w:{md:"50%",sm:"100%"},justifyContent:"baseline",alignItems:"center",flexDirection:"column",children:[(0,r.jsxs)(g.k,{alignItems:"center",flexDirection:"column",children:[(0,r.jsx)(g.k,{fontWeight:"700",mb:"20px",children:"Loan Principal Amount"}),(0,r.jsx)(_.Ph,{mt:"5px",name:"loans",id:"loans",onChange:function(e){return x(e.target.value)},style:{border:"1px solid ".concat(e.colors.gray)},children:["all","A","B","C","D"].map((function(t,n){return(0,r.jsx)("option",{value:t,border:"1px solid ".concat(e.colors.gray),children:0===n?"All Loans":"Grade ".concat(t," Loans")},t)}))})]}),(0,r.jsx)(P.default,{mt:{sm:"75px",md:"50px"},data:L,showPieCrumbs:JSON.stringify(L.map((function(e){return e.value})))!=JSON.stringify([0,0,0])})]}),(0,r.jsxs)(g.k,{w:{md:"50%",sm:"100%"},h:"400px",justifyContent:"center",alignItems:"center",flexDirection:"column",mt:{sm:"150px",md:"0px"},children:[(0,r.jsx)(g.k,{justifyContent:"center",children:(0,r.jsx)(g.k,{fontWeight:"700",mb:"20px",children:"Loans Status"})}),(0,r.jsx)(P.default,{mt:{sm:"-20px",md:"58px"},data:K})]})]})]},t):null}})}},5145:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(6265),o=n(8347),l=(n(7294),n(2931)),i=n(6208),c=n(3815),s=n(4096);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=Math.PI/180,p=function(e){var t=e.cx,n=e.cy,a=e.midAngle,o=e.innerRadius,l=e.outerRadius,i=e.percent,c=(e.index,o+.5*(l-o)),s=t+c*Math.cos(-a*d),u=n+c*Math.sin(-a*d);return 0===i?null:(0,r.jsx)("text",{x:s,y:u,fill:"white",textAnchor:s>t?"start":"end",dominantBaseline:"central",children:"".concat((100*i).toFixed(0),"%")})};t.default=function(e){var t=e.data,n=void 0===t?[]:t,a=e.showPieCrumbs,u=void 0===a||a,d=(0,o.Z)(e,["data","showPieCrumbs"]),x=["#0088FE","#dd7876","#FFBB28","brown","pink","black"];return u?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.k,m(m({h:"400px",justifyContent:"center",alignItems:"center",flexDirection:"column"},d),{},{children:[(0,r.jsx)(l.u,{width:400,height:400,children:(0,r.jsx)(i.b,{data:n,cx:"50%",cy:"50%",labelLine:!1,label:p,outerRadius:125,fill:"#8884d8",dataKey:"value",children:n.map((function(e,t){return(0,r.jsx)(c.b,{fill:x[t]},"cell-".concat(t))}))})}),(0,r.jsx)("div",{style:{display:"flex",maxWidth:"100%",flexWrap:"wrap",justifyContent:"center",marginLeft:"75px"},children:n.map((function(e,t){return(0,r.jsxs)(s.k,{marginRight:"40px",paddingBottom:"80px",marginTop:"-40px",alignItems:"center",justifyContent:{md:"center",sm:"flex-start"},children:[(0,r.jsx)("div",{style:{height:"25px",width:"25px",backgroundColor:x[t],marginRight:"8px"}}),(0,r.jsx)("div",{children:e.name})]})}))})]}))}):(0,r.jsx)(s.k,{justifyContent:"center",alignItems:"center",width:"400px",height:"100px",children:"No Data to show"})}}}]);