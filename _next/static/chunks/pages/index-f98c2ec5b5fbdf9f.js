(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9246)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,i;var s,{src:a,sizes:p,unoptimized:b=!1,priority:v=!1,loading:x,className:y,quality:j,width:C,height:E,fill:L,style:N,onLoad:S,onLoadingComplete:k,placeholder:R="empty",blurDataURL:_}=e,I=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let M=l.useContext(u.ImageConfigContext),O=l.useMemo(()=>{let e=h||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[M]),P=I,z=P.loader||g.default;if(delete P.loader,"__next_img_default"in z){if("custom"===O.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=z;z=e=>{let{config:t}=e,i=r(e,["config"]);return W(i)}}let F="",T=m(C),A=m(E);if("object"==typeof(s=a)&&(f(s)||void 0!==s.src)){let B=f(a)?a.default:a;if(!B.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(!B.height||!B.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)));if(t=B.blurWidth,i=B.blurHeight,_=_||B.blurDataURL,F=B.src,!L){if(T||A){if(T&&!A){let H=T/B.width;A=Math.round(B.height*H)}else if(!T&&A){let G=A/B.height;T=Math.round(B.width*G)}}else T=B.width,A=B.height}}let U=!v&&("lazy"===x||void 0===x);((a="string"==typeof a?a:F).startsWith("data:")||a.startsWith("blob:"))&&(b=!0,U=!1),O.unoptimized&&(b=!0);let[D,Z]=l.useState(!1),[V,q]=l.useState(!1),J=m(j),K=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},V?{}:{color:"transparent"},N),X="blur"===R&&_&&!D?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:T,heightInt:A,blurWidth:t,blurHeight:i,blurDataURL:_}),'")')}:{},Y=function(e){let{config:t,src:i,unoptimized:n,width:s,quality:a,sizes:r,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:s}=e;if(i){let a=/(^|\s)(1?\d?\d)vw/g,r=[];for(let l;l=a.exec(i);l)r.push(parseInt(l[2]));if(r.length){let o=.01*Math.min(...r);return{widths:s.filter(e=>e>=n[0]*o),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:c,kind:"x"}}(t,s,r),d=o.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:o.map((e,n)=>"".concat(l({config:t,src:i,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:a,width:o[d]})}}({config:O,src:a,unoptimized:b,width:T,quality:J,sizes:p,loader:z}),$=a,Q="imagesrcset",ee="imagesizes";Q="imageSrcSet",ee="imageSizes";let et={[Q]:Y.srcSet,[ee]:Y.sizes,crossOrigin:P.crossOrigin},ei=l.useRef(S);l.useEffect(()=>{ei.current=S},[S]);let en=l.useRef(k);l.useEffect(()=>{en.current=k},[k]);let es=n({isLazy:U,imgAttributes:Y,heightInt:A,widthInt:T,qualityInt:J,className:y,imgStyle:K,blurStyle:X,loading:x,config:O,fill:L,unoptimized:b,placeholder:R,loader:z,srcString:$,onLoadRef:ei,onLoadingCompleteRef:en,setBlurComplete:Z,setShowAltText:q},P);return l.default.createElement(l.default.Fragment,null,l.default.createElement(w,Object.assign({},es)),v?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src},et))):null)};var n=i(6495).Z,s=i(2648).Z,a=i(1598).Z,r=i(7273).Z,l=a(i(7294)),o=s(i(3121)),c=i(2675),d=i(139),u=i(8730);i(670);var g=s(i(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,s,a,r){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&r(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,o=!1;s.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>o,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let w=e=>{var{imgAttributes:t,heightInt:i,widthInt:s,qualityInt:a,className:o,imgStyle:c,blurStyle:d,isLazy:u,fill:g,placeholder:h,loading:f,srcString:m,config:w,unoptimized:b,loader:v,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:C,onLoad:E,onError:L}=e,N=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=u?"lazy":f,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},N,t,{width:s,height:i,decoding:"async","data-nimg":g?"fill":"1",className:o,loading:f,style:n({},c,d),ref:l.useCallback(e=>{e&&(L&&(e.src=e.src),e.complete&&p(e,m,h,x,y,j))},[m,h,x,y,j,L]),onLoad(e){let t=e.currentTarget;p(t,m,h,x,y,j)},onError(e){C(!0),"blur"===h&&j(!0),L&&L(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:s,blurDataURL:a}=e,r=n||t,l=s||i,o=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&s?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:s}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},9246:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(5893);i(9008),i(5675);var s=i(7294),a=i(725),r=i.n(a);let l=[{id:0,name:"Applebee's",img:"/applebees.png"},{id:1,name:"Arbys",img:"/arbys.png"},{id:2,name:"Burger King",img:"/burgerking.png"},{id:3,name:"Carrabba's",img:"/carrabba.png"},{id:4,name:"Cava",img:"/cava.png"},{id:5,name:"Charleys Cheesesteaks",img:"/charleyscheesesteaks.png"},{id:6,name:"Chick-Fil-A",img:"/chickfila.png"},{id:7,name:"Chipotle",img:"/Chipotlelogo.png"},{id:8,name:"Cracker Barrel",img:"/crackerbarrel.png"},{id:9,name:"Five Guys",img:"/fiveguys.png"},{id:10,name:"Krystal",img:"/krystal.png"},{id:11,name:"McDonalds",img:"/mcdonaldslogo.png"},{id:12,name:"Melt",img:"/melt.png"},{id:13,name:"Panda Express",img:"/pandaexpress.png"},{id:14,name:"Panera Bread",img:"/panerabread.png"},{id:15,name:"Shaggy's",img:"/shaggys.png"},{id:16,name:"Steak Out",img:"/steakout.png"},{id:17,name:"Super Chix",img:"/superchix.png"},{id:18,name:"Taco Bell",img:"/tacobell.png"},{id:19,name:"Tenders",img:"/tenders.png"},{id:20,name:"Taco Mama",img:"/tacomama.png"},{id:21,name:"Wendys",img:"/wendys.png"}],o=e=>0*Math.cos(e)+193*Math.sin(e)+193-32,c=e=>-0*Math.sin(e)+193*Math.cos(e)+193-32,d=(e,t)=>2*Math.PI*e/t+Math.PI,u=e=>{let{setShowConfetti:t,setWinner:i,onScreen:a,selectedRests:r}=e,l=(0,s.useRef)(),u=(0,s.useRef)(),g=(0,s.useRef)(),[h,f]=(0,s.useState)(null),m=()=>{g.current.style.display="block";let e=Math.floor(Math.random()*r.length),n=Math.floor(20*Math.random());n%2==1&&(n+=1),l.current.style.transform="rotate(".concat(d(e,r.length)-Math.PI+n*Math.PI,"rad)"),f(e),setTimeout(()=>{g.current.style.display="none",t(!0),i(r[e])},6e3)};return(0,s.useEffect)(()=>{a?u.current.classList.remove("wheel-right"):u.current.classList.add("wheel-right")},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"base-screen relative flex justify-center items-center",ref:u,children:[0===r.length&&(0,n.jsx)("div",{className:"absolute w-96 h-36 bg-slate-700 z-50 rounded flex justify-center items-center",children:(0,n.jsx)("h1",{children:"Please use the configure tab to add restaurants!"})}),(0,n.jsxs)("div",{ref:l,className:"rounded-full relative wheel",style:{background:"#3a0264",transform:"rotate(0deg)",transition:"transform ".concat(6,"s"),transitionTimingFunction:"ease-out",width:386,height:386},onClick:m,children:[(0,n.jsx)("div",{className:"overflow-hidden relative rounded-full w-full h-full",children:r.map((e,t)=>(0,n.jsx)("div",{className:"w-[36px] absolute top-0",style:{background:"#9100ff",width:193,height:193,transformOrigin:"bottom right",transform:"rotate(calc((".concat(360/r.length,"deg * ").concat(t,") + 45deg))"),clipPath:"polygon(0 0,56% 0, 100% 100%, 0 56%)"}},"rest-chunk-".concat(t)))}),r.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{src:"https://jonahminihan.github.io/where-to-eat-public.github.io/".concat(e.img),width:64,height:64,className:"rounded-full",style:{position:"absolute",top:c(d(t,r.length)),left:o(d(t,r.length)),width:64,height:64},alt:"Rest Logo"},"rest-".concat(t))}))]})]}),(0,n.jsx)("div",{ref:g,className:"w-[100dvw] h-[100dvh] absolute top-0 left-0 hidden"})]})},g=e=>{let{winner:t,handleCloseWinner:i}=e;return(0,n.jsx)("div",{className:"w-[100dvw] h-[100dvh] flex justify-center items-center overflow-hidden absolute top-0 left-0",children:(0,n.jsxs)("div",{className:"w-[386px] h-1/2 bg-slate-700 absolute flex flex-col justify-center items-center rounded",children:[(0,n.jsxs)("h1",{className:"text-2xl p-2 text-center",children:["Congrats! You have no choice but to eat at ",t.name,"!"]}),(0,n.jsx)("img",{src:"https://jonahminihan.github.io/where-to-eat-public.github.io/".concat(t.img),width:64,height:64,className:"rounded-full mt-12",style:{width:64,height:64},alt:"Rest Logo"}),(0,n.jsx)("button",{className:"absolute right-2 top-2",onClick:i,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:"w-8",fill:"white",children:(0,n.jsx)("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"})})})]})})},h={CONFIGURE:"CONFIGURE",WHEEL:"WHEEL"},f=e=>{let{onConfigClick:t,onToWheelClick:i,activeScreen:s}=e;return(0,n.jsxs)("div",{className:"w-[100dvw] h-12 absolute top-0 glass-card bg-accent rounded-none flex flex-row justify-between items-center pl-2 pr-2",children:[(0,n.jsxs)("button",{className:"flex flex-row justify-center items-center",style:{color:s===h.CONFIGURE?"grey":"white"},onClick:t,disabled:s===h.CONFIGURE,children:[(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:s===h.CONFIGURE?"grey":"white",className:"w-4 h-4 mr-1",children:(0,n.jsx)("path",{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})}),"Configure"]}),(0,n.jsx)("h1",{className:"text-xl font-bold",children:"What's For Lunchies??"}),(0,n.jsxs)("button",{className:"flex flex-row justify-center items-center",style:{color:s===h.WHEEL?"grey":"white"},onClick:i,disabled:s===h.WHEEL,children:["To Wheel",(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:s===h.WHEEL?"grey":"white",className:"w-4 ml-1",children:(0,n.jsx)("path",{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"})})]})]})},m=e=>{let{onScreen:t,setSelectedRests:i,selectedRests:a}=e,r=(0,s.useRef)();(0,s.useEffect)(()=>{t?r.current.classList.remove("config-left"):r.current.classList.add("config-left")},[t]);let o=e=>{a.length>=8&&-1===a.findIndex(t=>t.id===e.id)||(-1!==a.findIndex(t=>t.id===e.id)?i(a.filter(t=>t.id!==e.id)):i([...a,e]))};return(0,n.jsx)("div",{ref:r,className:"w-[100dvw] absolute top-12 h-[calc(100dvh-3rem)] flex justify-center items-center base-screen config-left",children:(0,n.jsxs)("div",{className:"glass-card w-96 h-96 rounded p-4 flex flex-col",children:[(0,n.jsx)("h1",{className:"text-2xl",children:"Pick up to 8..."}),(0,n.jsx)("div",{className:"overflow-scroll",children:l.map((e,t)=>(0,n.jsxs)("div",{className:"w-full flex flex-row overflow-hidden mt-2 cursor-pointer",onClick:()=>o(e),children:[(0,n.jsx)("input",{type:"checkbox",disabled:a.length>=8&&-1===a.findIndex(t=>t.id===e.id),checked:-1!==a.findIndex(t=>t.id===e.id),onChange(){}}),(0,n.jsx)("img",{src:"https://jonahminihan.github.io/where-to-eat-public.github.io/".concat(e.img),width:24,height:24,className:"rounded-full ml-2 mr-2",alt:"Rest Logo"}),(0,n.jsx)("p",{children:e.name})]},"rest-config-".concat(t)))})]})})};var p=i(8726);function w(e){let{}=e,[t,i]=(0,s.useState)(!1),[a,o]=(0,s.useState)(null),[c,d]=(0,s.useState)(h.WHEEL),[w,b]=(0,s.useState)(l.filter(e=>4===e.id||6===e.id||15===e.id||19===e.id)),v=()=>{o(!1),i(!1)},x=()=>{d(h.CONFIGURE)},y=()=>{d(h.WHEEL)},j=e=>{window.localStorage.selectedRests=JSON.stringify(e),b(e)};return(0,s.useEffect)(()=>{window.localStorage.selectedRests&&b(JSON.parse(window.localStorage.selectedRests))},[]),p.Z,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-[100dvw] h-[100dvh] flex justify-center items-center overflow-hidden z-10 relative",children:[(0,n.jsx)(f,{onConfigClick:x,onToWheelClick:y,activeScreen:c}),(0,n.jsx)(u,{setShowConfetti:i,setWinner:o,onScreen:c===h.WHEEL,selectedRests:w}),(0,n.jsx)(m,{onScreen:c===h.CONFIGURE,setSelectedRests:e=>j(e),selectedRests:w}),a&&(0,n.jsx)(g,{winner:a,handleCloseWinner:v})]}),t&&(0,n.jsx)("div",{className:"absolute top-0 z-20",children:(0,n.jsx)(r(),{})})]})}},9008:function(e,t,i){i(3121)},5675:function(e,t,i){i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);