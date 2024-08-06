const __vite__fileDeps=["static/js/index-BMd0dgrZ.js","static/js/vendor-Bhc2M4pH.js","static/js/createSvgIcon-BCx0yKii.js","static/js/index-CQn3dCWD.js","static/js/DashboardViewParams-BHBduMXd.js","static/js/index-CAXTGTpX.js","static/js/DashboardWidgets-CUchnzcK.js","static/js/DashboardContent-CdiaxyBG.js","static/js/Edit-BLuUL5Mi.js","static/js/index-Ch20OSW1.js","static/js/index-E0hmgG-P.js","static/js/ContentCopy-bqrH-e3i.js","static/css/index-C5isHALn.css","static/js/index-CvB9RFvP.js","static/js/index-CnLh7AdB.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Q=Object.defineProperty;var Y=(e,t,s)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(Y(e,typeof t!="symbol"?t+"":t,s),s);import{c as M,g as y,u as K,j as r,A as L,a as A,i as X,T as P,b as Z,R as C,r as ee,S as te,B as b,I as re,C as se,d as oe,e as ne,f as ie,h as k,L as ce,k as ae,G as I,F as he,l as le,m as de,n as ue,o as pe,M as f,D as B,p as fe,q as me,s as O,z as p,t as je,v as xe,w as ye,x as ge}from"./vendor-Bhc2M4pH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const{transitions:w}=M(),x="#02b3e3",_e="#ded5d5",ve=M({shape:{borderRadius:5},palette:{primary:{main:y[900],light:y[200]},secondary:{main:x,dark:"#c10400",light:y[200]},background:{default:"#fff",paper:"#fff"}},components:{MuiLink:{styleOverrides:{root:{transition:w.create("color",{duration:w.duration.enteringScreen}),"&:hover":{color:x}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:x}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:y[800]}},outlined:{"&:hover":{color:x,borderColor:x,background:"#fff"}},text:{"&:hover":{color:x,borderColor:x}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:y[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:w.create("color",{duration:w.duration.enteringScreen}),color:y[900],"&:hover":{color:x}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:w.create("color",{duration:w.duration.enteringScreen}),color:y[900],"&:hover":{color:x},"&.Mui-disabled":{border:"unset",background:y[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:_e}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),_=()=>{var t;const e=K();return r.jsxs(L,{severity:"error",children:[r.jsx(A,{children:"Something went wrong"}),X(e)&&r.jsxs(r.Fragment,{children:[r.jsx(P,{fontWeight:"bold",children:[`Status: ${e.status}`,typeof((t=e.data)==null?void 0:t.detail)=="string"&&e.data.detail].filter(Boolean).join(", ")}),typeof e.data=="string"&&r.jsx(P,{children:e.data})]}),typeof e=="string"&&r.jsx(P,{fontWeight:"bold",children:e})]})},N=({data:e})=>{const[t,s]=C.useState(!1),n=C.useRef(null);return ee.useEffect(()=>{e!=null&&e.error&&(n.current=e.error,s(!0))},[e]),r.jsx(te,{open:t,onClose:(i,o)=>{o!=="clickaway"&&s(!1)},children:r.jsx(L,{severity:"error",children:r.jsxs(b,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:2,children:[r.jsxs(b,{children:[r.jsx(A,{children:"Something went wrong"}),n.current&&r.jsx(P,{fontWeight:"bold",children:[typeof n.current.status_code=="number"&&`Status: ${n.current.status_code}`,typeof n.current.detail=="string"&&n.current.detail].filter(Boolean).join(", ")})]}),r.jsx(b,{children:r.jsx(re,{size:"small","aria-label":"close",color:"inherit",onClick:()=>{s(!1)},children:r.jsx(se,{})})})]})})})},R=()=>{const e=Z();return r.jsx(N,{data:e})},Ee=()=>{var s;const t=(s=oe().find(n=>{var i;return!!((i=n.data)!=null&&i.error)}))==null?void 0:s.data;return r.jsx(N,{data:t})},Se="modulepreload",be=function(e){return"/"+e},$={},g=function(t,s,n){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(s.map(a=>{if(a=be(a),a in $)return;$[a]=!0;const m=a.endsWith(".css"),l=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Se,m||(h.as="script",h.crossOrigin=""),h.href=a,c&&h.setAttribute("nonce",c),document.head.appendChild(h),m)return new Promise((E,S)=>{h.addEventListener("load",E),h.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o})};function u(e){return e!=null&&e.notThrowExc?we:ke}const ke=e=>{const{data:t,error:s,response:n}=e;if(s)throw ne(s,{status:n.status});return t},we=e=>{const{data:t,error:s,response:n}=e;return s?{error:{...s,status_code:n.status}}:t},Pe=({api:e})=>({loader:()=>e.GET("/api/version").then(u())}),Te=ie,v=Te({baseUrl:"/"}),Ie="/static/img/logo.png",{loader:Oe}=Pe({api:v}),De={path:"/",lazy:async()=>{const{HomeComponentTemplate:e,...t}=await g(()=>import("./index-BMd0dgrZ.js"),__vite__mapDeps([0,1,2]));return{Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(Ee,{}),r.jsx(e,{logoSrc:Ie})]}),...t}},loader:Oe,ErrorBoundary:_},G=e=>{if(e.id)return{...e,id:e.id};throw`"id" is missing in object: ${JSON.stringify(e)}`},U=e=>{if(e.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})},Ce=({api:e})=>({loader:({params:t})=>{const{projectId:s}=t;return k(s),e.GET("/api/projects/{project_id}/info",{params:{path:{project_id:s}}}).then(u()).then(G)}});function D(e){return typeof e!=typeof new Date?(console.log(`not a date ${typeof e}: ${e}`),e):`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}T${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const d={FROM:"date_from",TO:"date_to"},Le=e=>{let t=e.get(d.FROM),s=e.get(d.TO);return{date_from:t,date_to:s}},Ae=({dataRanges:e})=>{const[t,s]=me(),{date_from:n,date_to:i}=Le(t),o=O(n||e.minDate),c=O(i||e.maxDate);return{isCorrectTimeInterval:o.isValid()&&c.isValid()&&(o.isSame(c)||o.isBefore(c)),date_from:o,date_to:c,setSearchParams:s}},dt=({dataRanges:e,isDashboardHideDates:t,setIsDashboardHideDates:s,isShowDateFilter:n})=>{const{isCorrectTimeInterval:i,date_from:o,date_to:c,setSearchParams:a}=Ae({dataRanges:e}),m=i?"":"incorrect time interval",l=h=>E=>{a(S=>(S.delete(h),E&&S.append(h,D(E.toDate())),S),{preventScrollReset:!0,replace:!0})};return r.jsx(ce,{dateAdapter:ae,adapterLocale:"en-gb",children:r.jsxs(I,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",alignItems:"flex-end",children:[r.jsx(I,{item:!0,children:r.jsx(b,{minWidth:180,display:"flex",justifyContent:"center",children:r.jsx(he,{control:r.jsx(le,{checked:t,onChange:h=>s(h.target.checked)}),label:"Show in order"})})}),n&&r.jsxs(r.Fragment,{children:[r.jsx(I,{item:!0,xs:12,md:2,children:r.jsxs(de,{fullWidth:!0,children:[r.jsx(ue,{children:"Period"}),r.jsxs(pe,{variant:"standard",defaultValue:"",onChange:h=>{const[E,S]=h.target.value.split(",");if(E===""){a(j=>(j.delete(d.FROM),j.delete(d.TO),j),{preventScrollReset:!0,replace:!0});return}const[J,q]=[Number(E),S],F=e.maxDate.subtract(J,q);a(j=>(j.delete(d.FROM),j.delete(d.TO),j.append(d.FROM,D(F.isBefore(e.minDate)?e.minDate.toDate():F.toDate())),j.append(d.TO,D(e.maxDate.toDate())),j),{preventScrollReset:!0,replace:!0})},children:[r.jsx(f,{value:"",children:r.jsx("em",{children:"None"})}),r.jsx(f,{value:"10,minutes",children:"Last 10 Minutes"}),r.jsx(f,{value:"30,minutes",children:"Last 30 Minutes"}),r.jsx(f,{value:"1,hours",children:"Last 1 Hours"}),r.jsx(f,{value:"2,hours",children:"Last 2 Hours"}),r.jsx(f,{value:"8,hours",children:"Last 8 Hours"}),r.jsx(f,{value:"24,hours",children:"Last 24 Hours"}),r.jsx(f,{value:"7,days",children:"Last 7 Days"}),r.jsx(f,{value:"14,days",children:"Last 14 Days"}),r.jsx(f,{value:"28,days",children:"Last 28 Days"}),r.jsx(f,{value:"60,days",children:"Last 60 Days"})]})]})}),r.jsx(I,{item:!0,children:r.jsxs(b,{display:"flex",alignItems:"center",gap:2,children:[r.jsx(B,{minDate:e.minDate,maxDate:e.maxDate&&c,slotProps:{textField:{variant:"standard"}},label:"From",value:o,onChange:l(d.FROM)}),r.jsx(b,{height:1,display:"flex",alignItems:"center",children:r.jsx(P,{children:" - "})}),r.jsx(B,{minDate:e.minDate&&o,maxDate:e.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:c,onChange:l(d.TO)})]})}),r.jsx(I,{item:!0,xs:12,children:r.jsx(fe,{unmountOnExit:!0,in:!i,children:r.jsxs(L,{severity:"error",children:[r.jsx(A,{children:"Error"}),m]})})})]})]})})};class Re{constructor(){T(this,"at",0);T(this,"ch","");T(this,"text","");T(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(t){throw{name:"SyntaxError",message:t,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(t){t!==this.ch&&this.error(`Expected '${t}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var t="";if(this.ch==="-"&&(t="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();if(this.ch===".")for(t+=".";this.next()&&this.ch>="0"&&this.ch<="9";)t+=this.ch;if(this.ch==="e"||this.ch==="E")for(t+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(t+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();return+t}string(){var t,s,n="",i;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),n;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(i=0,s=0;s<4&&(t=parseInt(this.next(),16),!!isFinite(t));s++)i=i*16+t;n+=String.fromCharCode(i)}else if(this.escapee[this.ch])n+=this.escapee[this.ch];else break;else n+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var t=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),t;for(;this.ch;){if(t.push(this.value()),this.white(),this.ch==="]")return this.check("]"),t;this.check(","),this.white()}}this.error("Bad array")}object(){var t,s={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),s;for(;this.ch;){if(t=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(s,t)&&this.error('Duplicate key "'+t+'"'),s[t]=this.value(),this.white(),this.ch==="}")return this.check("}"),s;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(t,s){let n;return this.text=t,this.at=0,this.ch=" ",n=this.value(),this.white(),this.ch&&this.error("Syntax error"),s!==void 0?function i(o,c){var a,m,l=o[c];if(l&&typeof l=="object")for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(m=i(l,a),m!==void 0?l[a]=m:delete l[a]);return s.call(o,c,l)}({"":n},""):n}}const z=e=>new Re().parse(e),Fe=({api:e})=>({loader:({params:t,request:s})=>{k(t.projectId);const{searchParams:n}=new URL(s.url);let i=n.get(d.FROM),o=n.get(d.TO);return i&&!O(i).isValid()&&(i=null),o&&!O(o).isValid()&&(o=null),e.GET("/api/projects/{project_id}/dashboard",{params:{path:{project_id:t.projectId},query:{timestamp_start:i,timestamp_end:o}},parseAs:"text"}).then(u()).then(z)}}),{loader:Be}=Fe({api:v}),$e={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:e},{DashboardWidgets:t}]=await Promise.all([g(()=>import("./index-CQn3dCWD.js"),__vite__mapDeps([3,1,4,5])),g(()=>import("./DashboardWidgets-CUchnzcK.js"),__vite__mapDeps([6,1,7,4,2,8]))]);return{Component:()=>r.jsx(e,{Dashboard:({data:{widgets:s}})=>r.jsx(t,{widgets:s})})}},loader:Be,ErrorBoundary:_},H={RELOAD_SNAPSHOTS:"reload-snapshots",DELETE_SNAPSHOT:"delete-snapshot"},Me=p.object({action:p.literal(H.RELOAD_SNAPSHOTS)}),Ne=p.object({action:p.literal(H.DELETE_SNAPSHOT),snapshotId:p.string().uuid()}),V=e=>async({request:t,params:s})=>{k(s.projectId),U(t);const n=await t.json();if(Me.safeParse(n).success)return e.GET("/api/projects/{project_id}/reload",{params:{path:{project_id:s.projectId}}}).then(u({notThrowExc:!0}));const o=Ne.safeParse(n);return o.success?e.DELETE("/api/projects/{project_id}/{snapshot_id}",{params:{path:{project_id:s.projectId,snapshot_id:o.data.snapshotId}}}).then(u({notThrowExc:!0})):{error:{status_code:!1,detail:"Unknown action"}}},Ge=({api:e})=>({loader:({params:t})=>(k(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/reports",{params:{path:{project_id:t.projectId}}}).then(u())),action:V(e)}),Ue=({api:e})=>({loader:({params:t})=>(k(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/test_suites",{params:{path:{project_id:t.projectId}}}).then(u())),action:V(e)}),ze=({api:e})=>({loader:({params:t})=>{const{projectId:s,snapshotId:n}=t;return k(s),k(n),e.GET("/api/projects/{project_id}/{snapshot_id}/data",{params:{path:{project_id:s,snapshot_id:n}},parseAs:"text"}).then(u()).then(z)}}),{loader:He}=ze({api:v}),W={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:e,...t}=await g(()=>import("./index-Ch20OSW1.js"),__vite__mapDeps([9,1,7,4,2,8]));return{Component:()=>r.jsx(e,{api:v}),...t}},loader:He,ErrorBoundary:_},{loader:Ve,action:We}=Ge({api:v}),Je={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await g(()=>import("./index-E0hmgG-P.js"),__vite__mapDeps([10,1,5,11,2,12]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(R,{}),r.jsx(e,{type:"reports"})]})}},loader:Ve,action:We,ErrorBoundary:_,children:[W]},{loader:qe,action:Qe}=Ue({api:v}),Ye={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await g(()=>import("./index-E0hmgG-P.js"),__vite__mapDeps([10,1,5,11,2,12]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(R,{}),r.jsx(e,{type:"test suites"})]})}},loader:qe,action:Qe,ErrorBoundary:_,children:[W]},{loader:Ke}=Ce({api:v}),Xe={path:"projects/:projectId",lazy:()=>g(()=>import("./index-CvB9RFvP.js"),__vite__mapDeps([13,1,11,2])),loader:Ke,ErrorBoundary:_,children:[$e,Je,Ye]},Ze=p.object({action:p.literal("edit-project")}),et=p.object({action:p.literal("create-new-project")}),tt=p.object({action:p.literal("delete-project"),projectId:p.string().uuid()}),rt=({api:e})=>({loader:()=>e.GET("/api/projects").then(u()).then(t=>t.map(G)),action:async({request:t})=>{U(t);const s=await t.json();if(et.safeParse(s).success)return e.POST("/api/projects",{body:s}).then(u({notThrowExc:!0}));const n=tt.safeParse(s);if(n.success)return e.DELETE("/api/projects/{project_id}",{params:{path:{project_id:n.data.projectId}}}).then(u({notThrowExc:!0}));if(Ze.safeParse(s).success)return e.POST("/api/projects/{project_id}/info",{params:{path:{project_id:s.id}},body:s}).then(u({notThrowExc:!0}));throw"Undefined action"}}),{loader:st,action:ot}=rt({api:v}),nt={index:!0,lazy:()=>g(()=>import("./index-CnLh7AdB.js"),__vite__mapDeps([14,1,8,2,5])).then(e=>({...e,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(R,{}),r.jsx(e.Component,{})]})})),loader:st,action:ot,ErrorBoundary:_},it={path:"*",Component:()=>r.jsx(b,{display:"flex",justifyContent:"center",children:r.jsx(P,{variant:"h4",children:"Page Not Found"})})},ct={...De,children:[nt,Xe,it],ErrorBoundary:_},at=je([ct]);xe.createRoot(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(ye,{theme:ve,children:r.jsx(ge,{router:at})})}));export{dt as D,z as J,u as r};
