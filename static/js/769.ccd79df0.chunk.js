"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[769],{3769:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(2791),i=n(1087),r=n(6842),s=n(184),c=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var h=d,p=n(5671),m=n(3144),y=n(136),f=n(516),g=n(9142);function j(e,t,n){return(t=(0,g.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.handleClick,n=e.active,a=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},k=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,r=t.title,c={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=b(b({},c),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:c,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:o}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};k.defaultProps={categories:[]};var N=k,S=function(e){(0,y.Z)(n,e);var t=(0,f.Z)(n);function n(e){var a;return(0,p.Z)(this,n),(a=t.call(this,e)).handleChildClick=function(e){a.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return b(b({},n),{},j({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},a.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return b(b({},e),{},j({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),a}return(0,m.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(N,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Skills"})}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(a.Component);S.defaultProps={skills:[],categories:[]};var D=S,P=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var w=P,O=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(w,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:O(t)})]})};C.defaultProps={data:[]};var E=function(){return(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)(i.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:"References are available upon request"})})})]})},L=[{school:"University of Milano-Bicocca",degree:"PhD Computer Science",link:"https://en.unimib.it",year:"2020~Present"},{school:"Universidad Industrial de Santander",degree:"M.S. Computer Science",link:"https://uis.edu.co/en/",year:"2015-2017"},{school:"Universidad Industrial de Santander",degree:"B.S. Computer Science",link:"https://uis.edu.co/en/",year:"2010-2015"}],R=[{company:"Disco@Unimib",position:"Researcher",link:"https://www.disco.unimib.it/en",daterange:"Nobember 2020 - Present",points:["Neural information retrieval.","Adaptation of neural models to domain-specific search tasks"]},{company:"ICFES Colombia",position:"Data scientist",link:"https://www.icfes.gov.co/en/",daterange:"January 2018 - October 2020",points:["Deployed quantitative strategies to evaluate educational tests.","Built production, on-line, end-to-end optimized pipelines with Pandas, Numpy, Scikit, SQL."]},{company:"DANE Colombia",position:"Data scientist",link:"https://www.dane.gov.co/index.php/en/",daterange:"May 2020 - October 2020",points:["Deployed quantitative strategies to compute statistics on surveys data.","Built production, on-line, end-to-end optimized pipelines with Pandas, Numpy, Scikit, Dash."]}],A=n(3433),M=[{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:2,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Pytorch and Pytorch lightning",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:2,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","Data Science","Python"]}].map((function(e){return b(b({},e),{},{category:e.category.sort()})})),B=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],Z=(0,A.Z)(new Set(M.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:B[t]}})),U=["Education","Experience","Skills","References"],W=function(){return(0,s.jsx)(r.Z,{title:"Resume",description:"Oscar's Resume.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{children:(0,s.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:U.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:L}),(0,s.jsx)(h,{data:R}),(0,s.jsx)(D,{skills:M,categories:Z}),(0,s.jsx)(E,{})]})})}}}]);
//# sourceMappingURL=769.ccd79df0.chunk.js.map