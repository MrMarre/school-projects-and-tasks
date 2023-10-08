(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5351],{22212:function(n,e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CategoryPageQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"tab"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeFullOppetArkiv"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"abTestVariants"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AbTestVariant"}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userIsAbroad"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryPage"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"abTestVariants"},value:{kind:"Variable",name:{kind:"Name",value:"abTestVariants"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"heading"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"changed"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"analyticsIdentifiers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"viewType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"lazyLoadedTabs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"tab"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selectionType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"listPresentation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"analyticsIdentifiers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"listId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"listType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"includeFullOppetArkiv"},value:{kind:"Variable",name:{kind:"Name",value:"includeFullOppetArkiv"}}},{kind:"ObjectField",name:{kind:"Name",value:"userIsAbroad"},value:{kind:"Variable",name:{kind:"Name",value:"userIsAbroad"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ContentItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"heading"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"changed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:1274}};i.loc.source={body:'#import "app/components/ContentItem/ContentItemFragment.graphql"\n\nquery CategoryPageQuery(\n    $id: String!\n    $tab: String\n    $includeFullOppetArkiv: Boolean\n    $abTestVariants: [AbTestVariant!]\n    $userIsAbroad: Boolean\n) {\n    categoryPage(id: $id, abTestVariants: $abTestVariants) {\n        heading\n        description\n        image {\n            id\n            changed\n        }\n        analyticsIdentifiers {\n            viewId\n            viewType\n        }\n        lazyLoadedTabs(slug: $tab) {\n            name\n            slug\n            id\n            selections {\n                id\n                name\n                selectionType\n                listPresentation\n                analyticsIdentifiers {\n                    listId\n                    listType\n                }\n                items(\n                    filter: { includeFullOppetArkiv: $includeFullOppetArkiv, userIsAbroad: $userIsAbroad }\n                ) {\n                    ...ContentItem\n                }\n                categories {\n                    heading\n                    id\n                    image {\n                        id\n                        changed\n                        description\n                    }\n                }\n            }\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};i.definitions=i.definitions.concat(t(7254).definitions.filter(function(n){if("FragmentDefinition"!==n.kind)return!0;var e=n.name.value;return!a[e]&&(a[e]=!0,!0)}));var r={};function o(n,e){for(var t=0;t<n.definitions.length;t++){var i=n.definitions[t];if(i.name&&i.name.value==e)return i}}i.definitions.forEach(function(n){if(n.name){var e=new Set;(function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){n(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){n(e,t)}),e.definitions&&e.definitions.forEach(function(e){n(e,t)})})(n,e),r[n.name.value]=e}}),n.exports=i,n.exports.CategoryPageQuery=function(n,e){var t={kind:n.kind,definitions:[o(n,e)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var i=r[e]||new Set,a=new Set,d=new Set;for(i.forEach(function(n){d.add(n)});d.size>0;){var l=d;d=new Set,l.forEach(function(n){a.has(n)||(a.add(n),(r[n]||new Set).forEach(function(n){d.add(n)}))})}return a.forEach(function(e){var i=o(n,e);i&&t.definitions.push(i)}),t}(i,"CategoryPageQuery")},26040:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kategori/[id]",function(){return t(46596)}])},18111:function(n,e,t){"use strict";t.d(e,{$u:function(){return N},JD:function(){return x},NV:function(){return w},XZ:function(){return S},Xl:function(){return j},__:function(){return y},kI:function(){return b}});var i=t(82729),a=t(73815),r=t(24859),o=t(48431),d=t(92846),l=t(41429),c=t(87379);function s(){let n=(0,i._)(["\n    color: ",";\n    margin: 40px 0;\n\n    .no-js & {\n        display: none;\n    }\n\n    @media "," {\n        float: right;\n        margin: 12px 0 0 0;\n    }\n"]);return s=function(){return n},n}function u(){let n=(0,i._)(["\n    display: block;\n    margin-bottom: 15px;\n    position: relative;\n\n    @media "," {\n        display: inline-block;\n        margin: 0 0 0 25px;\n    }\n"]);return u=function(){return n},n}function m(){let n=(0,i._)(["\n    cursor: pointer;\n    ","\n    ","\n\n    @media "," {\n        ","\n    }\n"]);return m=function(){return n},n}function g(){let n=(0,i._)(["\n    display: inline-block;\n    vertical-align: middle;\n"]);return g=function(){return n},n}function p(){let n=(0,i._)(["\n            background-color: ",";\n            border-color: ",";\n        "]);return p=function(){return n},n}function f(){let n=(0,i._)(["\n    border-radius: 2px;\n    ","\n    display: inline-block;\n    width: 14px;\n    height: 13px;\n    border: 1px solid ",";\n    background-color: ",";\n    margin-right: 5px;\n    color: ",";\n    vertical-align: middle;\n    margin-top: -2px;\n\n    ","\n"]);return f=function(){return n},n}function h(){let n=(0,i._)(["\n    ~ "," {\n        "," {\n            ","\n        }\n    }\n"]);return h=function(){return n},n}function v(){let n=(0,i._)(["\n    ","\n    position: absolute;\n    cursor: pointer;\n    height: 100%;\n    opacity: 0;\n\n    &:focus {\n        ","\n    }\n\n    &:focus-visible {\n        ","\n    }\n\n    &:focus:not(:focus-visible) {\n        ~ "," {\n            "," {\n                outline: none;\n            }\n        }\n    }\n"]);return v=function(){return n},n}function k(){let n=(0,i._)(["\n    ","\n"]);return k=function(){return n},n}let x=c.ZP.form.withConfig({componentId:"sc-228a6694-0"})(s(),r.O5,a.U.GteSmall),b=c.ZP.span.withConfig({componentId:"sc-228a6694-1"})(u(),a.U.GteSmall),y=c.ZP.label.withConfig({componentId:"sc-228a6694-2"})(m(),d.Sp,(0,o.uo)(1.6),a.U.GteLarge,(0,o.uo)(1.7)),w=c.ZP.span.withConfig({componentId:"sc-228a6694-3"})(g()),j=c.ZP.span.withConfig({componentId:"sc-228a6694-4"})(f(),(0,o.uo)(1.1),r.O5,r.O5,r._P,n=>n.checked&&(0,c.iv)(p(),r.g5,r.g5)),I=(0,c.iv)(h(),y,j,(0,o.Q0)(2)),S=c.ZP.input.withConfig({componentId:"sc-228a6694-5"})(v(),(0,l.fk)(),I,I,y,j),N=c.ZP.span.withConfig({componentId:"sc-228a6694-6"})(k(),l.TX)},86239:function(n,e,t){"use strict";t.d(e,{Z:function(){return g}});var i=t(41844),a=t(89797),r=t(34380);t(55784);var o=t(5793),d=t(96719),l=t(18111),c=t(24535),s=t(50470);let u=n=>{let{filterAbroad:e,showFilter:t,toggleAbroad:a}=n,r=(0,o.Z)();if(!t)return null;let u=()=>{r((0,c.WS)(!e)),a()};return(0,i.jsx)(l.JD,{children:(0,i.jsxs)(l.kI,{children:[(0,i.jsx)(l.XZ,{type:"checkbox",id:"abroad",name:"abroad",checked:e,onChange:u,"data-rt":"filter-abroad"}),(0,i.jsxs)(l.__,{as:"label",htmlFor:"abroad",children:[(0,i.jsx)(l.Xl,{checked:e,children:e&&(0,i.jsx)(d.Z,{icon:s._s.CLOSE,width:14,verticalAjust:-1})}),(0,i.jsx)(l.$u,{children:"Visa inneh\xe5ll med "}),(0,i.jsx)(l.NV,{children:"Kan ses utomlands"})]})]})})},m=n=>{let{showFilter:e}=n,t=(0,r.CG)(a.LB),o=(0,r.TL)();return(0,i.jsx)(u,{showFilter:e,toggleAbroad:()=>o((0,a.IV)()),filterAbroad:t})};var g=m},47967:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var i=t(41844),a=t(20353);t(55784);var r=t(82729),o=t(87379),d=t(28469),l=t(73815);function c(){let n=(0,r._)(["\n    overflow: visible;\n    white-space: normal;\n    padding: 2px;\n    width: 100%;\n    clear: both;\n    margin-top: 2px;\n    display: block;\n"]);return c=function(){return n},n}function s(){let n=(0,r._)(["\n    margin-bottom: 20px;\n\n    overflow: visible;\n    margin-right: 5px;\n    &:nth-child(2n) {\n        margin-right: 0;\n    }\n\n    margin-left: 0;\n\n    clear: both;\n    width: calc((100% - 5px) / 2);\n\n    @media "," {\n        width: calc((100% - (2 * 5px)) / 3);\n        margin-right: 5px;\n\n        &:nth-child(2n) {\n            margin-right: 5px;\n        }\n\n        &:nth-child(3n) {\n            margin-right: 0;\n        }\n\n        margin-left: 0;\n    }\n\n    @media "," {\n        width: calc((100% - (3 * 11px)) / 4);\n        margin-right: 10px;\n\n        &:nth-child(2n) {\n            margin-right: 10px;\n        }\n\n        &:nth-child(3n) {\n            margin-right: 10px;\n        }\n\n        &:nth-child(4n) {\n            margin-right: 0;\n        }\n    }\n\n    @media "," {\n        width: calc((100% - (4 * 11px)) / 5);\n\n        &:nth-child(4n) {\n            margin-right: 10px;\n        }\n\n        &:nth-child(5n) {\n            margin-right: 0;\n        }\n    }\n\n    @media "," {\n        width: calc((100% - (5 * 11px)) / 6);\n\n        &:nth-child(5n) {\n            margin-right: 10px;\n        }\n\n        &:nth-child(6n) {\n            margin-right: 0;\n        }\n    }\n"]);return s=function(){return n},n}let u=o.ZP.div.withConfig({componentId:"sc-7c81ffaa-0"})(c()),m=(0,o.ZP)(d.Z).withConfig({componentId:"sc-7c81ffaa-1"})(s(),l.U.GteMedium,l.U.GteLarge,l.U.GteXLarge,l.U.FullScreen),g=n=>{let{items:e,id:t,editModeActivated:r=!1,preferredAccessVersion:o,listTracking:d,onItemClick:l,onItemImpression:c,autoPlay:s=!1,showInfoOnHover:g,markedAsDeleted:p=[],onMarkedAsDeleted:f=()=>({})}=n;return e.length<=0?(0,i.jsx)(a.Z,{}):(0,i.jsx)(u,{"data-rt":"content-item-grid",children:e.map((n,e)=>{let a={content:n,listId:t,editModeActivated:r,onClick:l,listTracking:d,onItemImpression:c,itemPosition:e+1,autoPlay:s,showInfoOnHover:g,onMarkedAsDeleted:f,preferredAccessVersion:o,markedAsDeleted:(()=>{if(0===p.length)return!1;let e=p.findIndex(e=>e.titleArticleId===n.item.parent.svtId);return e>-1})()};return(0,i.jsx)(m,{...a},n.item.id)})})};var p=g},20353:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var i=t(41844);t(55784);var a=t(60505),r=t(82729),o=t(87379),d=t(64789),l=t(24859),c=t(73815),s=t(92846);function u(){let n=(0,r._)(["\n    background-color: ",";\n    padding: 32px 10px;\n    margin: 40px 0;\n    text-align: center;\n\n    @media "," {\n        padding: 50px;\n    }\n"]);return u=function(){return n},n}function m(){let n=(0,r._)(["\n    ",";\n\n    display: block;\n    margin-top: 10px;\n\n    @media "," {\n        margin-top: 15px;\n    }\n"]);return m=function(){return n},n}let g=o.ZP.div.withConfig({componentId:"sc-dde2de26-0"})(u(),l.XQ,c.U.GteMedium),p=(0,o.ZP)(d.Z).withConfig({componentId:"sc-dde2de26-1"})(m(),s.Sp,c.U.GteMedium);var f=t(33782);let h=n=>{let{heading:e="Inga avsnitt tillg\xe4ngliga just nu."}=n;return(0,i.jsxs)(g,{children:[(0,i.jsx)(a.by,{children:e}),(0,i.jsx)(p,{href:"https://www.svt.se/kontakt/rattigheter",children:(0,i.jsx)(f.Z,{as:"span",children:"Hur funkar upphovsr\xe4tt i SVT Play?"})})]})};var v=h},84040:function(n,e,t){"use strict";t.d(e,{e:function(){return c}});var i=t(82729),a=t(87379),r=t(24859);function o(){let n=(0,i._)(["\n    border-top: 1px solid ",";\n    border-radius: 0px;\n"]);return o=function(){return n},n}function d(){let n=(0,i._)(["\n    ","\n"]);return d=function(){return n},n}let l=(0,a.iv)(o(),r.uR),c=a.ZP.hr.withConfig({componentId:"sc-bdbf41a6-0"})(d(),l)},59039:function(n,e,t){"use strict";t.d(e,{Lz:function(){return b},OK:function(){return w},td:function(){return y},x4:function(){return j}});var i=t(41844),a=t(55784),r=t(82729),o=t(87379),d=t(73815),l=t(24859),c=t(48431),s=t(41429);function u(){let n=(0,r._)(["\n    position: relative;\n    overflow: hidden;\n    border-bottom: 1px solid ",";\n\n    @media print {\n        display: none !important;\n    }\n"]);return u=function(){return n},n}function m(){let n=(0,r._)(["\n    &:after,\n    .no-touchevents &:hover:after {\n        transform: translateY(-3px);\n    }\n"]);return m=function(){return n},n}function g(){let n=(0,r._)(["\n    ","\n    ",";\n    position: relative;\n    font-weight: ",";\n    display: inline-block;\n    text-decoration: none;\n    padding-bottom: 8px;\n    margin: 2px 20px 2px 2px;\n\n    transition: font-weight 100ms linear, color 100ms linear;\n    color: ",";\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    @media "," {\n        ",";\n    }\n\n    @media "," {\n        ","\n        margin-right: 30px;\n    }\n\n    &:after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        bottom: -5px;\n        transform: translateY(0);\n        left: 0;\n        background-color: ",";\n        height: 3px;\n        transition: transform 200ms linear;\n    }\n\n    ","\n\n    &:hover {\n        &:after {\n            background-color: ",";\n            transform: translateY(-5px);\n        }\n    }\n\n    &:active:after {\n        background-color: ",";\n    }\n\n    .no-touchevents &:hover:after {\n        transform: translateY(-3px);\n    }\n"]);return g=function(){return n},n}function p(){let n=(0,r._)(["\n    ",";\n"]);return p=function(){return n},n}let f=o.ZP.div.withConfig({componentId:"sc-a2551064-0"})(u(),l.uR),h=(0,o.iv)(m()),v=o.ZP.button.withConfig({componentId:"sc-a2551064-1"})(g(),(0,s.fk)(),(0,c.uo)(1.6),l.uc,l.O5,d.U.GteXsmall,(0,c.uo)(1.8),d.U.GteSmall,(0,c.uo)(2),l.g5,n=>n.isSelected&&h,l.g5,l.g5),k=o.ZP.div.withConfig({componentId:"sc-a2551064-2"})(p(),(0,s.fk)()),x={LEFT:37,RIGHT:39},b=n=>{let{children:e,onChange:t,activeTabIndex:r}=n,[o,d]=(0,a.useState)(0);(0,a.useEffect)(()=>{null!==r&&r!==o&&d(r)},[r,o]);let l=(n,e,i)=>{d(n),t&&t(n,e,i)};return(0,i.jsx)(i.Fragment,{children:a.Children.map(e,n=>n?a.cloneElement(n,{selectTab:l,selectedTabIndex:o}):null)})},y=n=>{let{children:e,selectTab:t,selectedTabIndex:r,className:o}=n,[d,l]=(0,a.useState)(0),c=(0,a.useRef)([]),s=(0,a.useRef)(!1),u=c.current;(0,a.useEffect)(()=>{c.current=c.current.slice(0,a.Children.count(e))},[e]),(0,a.useEffect)(()=>{d>=a.Children.count(e)&&l(a.Children.count(e)-1)},[e,d]),(0,a.useEffect)(()=>{s.current=!0},[]);let m=n=>{let e;if(n.keyCode===x.RIGHT?(e=d+1,d>=u.length-1&&(e=0)):n.keyCode===x.LEFT&&(e=d-1,d<1&&(e=u.length-1)),void 0!==e){var t;l(e),null===(t=u[e])||void 0===t||t.focus()}};return(0,i.jsx)(f,{role:"tablist",onKeyDown:m,className:o,children:a.Children.map(e,n=>a.cloneElement(n,{selectTab:t,selectedTabIndex:r,tabRef:c,tabFocusIndex:d}))})},w=n=>{let{children:e,index:t,selectTab:a,selectedTabIndex:r,slug:o,tabRef:d,tabFocusIndex:l}=n,c=r===t;return(0,i.jsx)(v,{onClick:()=>a(t,o,e),isSelected:c,"aria-selected":c,tabIndex:l===t?0:-1,type:"button",ref:n=>{d.current[t]=n},id:"tab-".concat(t),"aria-controls":"panel-".concat(t),role:"tab","data-rt":"tab-list-item",children:e})},j=n=>{let{children:e,selectedTabIndex:t}=n;return(0,i.jsx)(k,{id:"panel-".concat(t),"aria-labelledby":"tab-".concat(t),tabIndex:0,role:"tabpanel",children:e})}},46596:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nQ}});var i,a,r=t(41844),o=t(55784),d=t(5069),l=t(66318),c=t(18109),s=t(97730),u=t(76197),m=t(89797),g=t(76048),p=t(34380),f=t(47967),h=t(94493),v=t(43331),k=t(39833),x=t(24859),b=t(20353),y=t(59039),w=t(82729),j=t(87379),I=t(73815),S=t(48431);function N(){let n=(0,w._)(["\n    color: ",";\n    font-weight: ",";\n    text-transform: uppercase;\n    margin-bottom: 1em;\n\n    ","\n\n    @media "," {\n        ","\n    }\n\n    @media "," {\n        ","\n    }\n"]);return N=function(){return n},n}function C(){let n=(0,w._)(["\n    vertical-align: middle;\n"]);return C=function(){return n},n}function P(){let n=(0,w._)(["\n    font-family: Publik !important;\n    font-weight: ",";\n    font-size: 1em;\n    vertical-align: middle;\n\n    /* Play slash is now a glyph in font-family. */\n    &:before {\n        content: '\\221A';\n    }\n"],["\n    font-family: Publik !important;\n    font-weight: ",";\n    font-size: 1em;\n    vertical-align: middle;\n\n    /* Play slash is now a glyph in font-family. */\n    &:before {\n        content: '\\\\221A';\n    }\n"]);return P=function(){return n},n}let Z=j.ZP.h1.withConfig({componentId:"sc-6b1c5b48-0"})(N(),x.O5,x.vq,(0,S.uo)(2.4),I.U.GteSmall,(0,S.uo)(3),I.U.GteLarge,(0,S.uo)(3.4)),_=j.ZP.span.withConfig({componentId:"sc-6b1c5b48-1"})(C()),F=j.ZP.span.withConfig({componentId:"sc-6b1c5b48-2"})(P(),x.uc);(i=a||(a={})).H1="h1",i.H2="h2",i.H3="h3",i.H4="h4",i.H5="h5";let T=n=>{let{text:e,type:t,dataRt:i}=n;return(0,r.jsxs)(Z,{as:t,"data-rt":i,children:[(0,r.jsx)(F,{"aria-hidden":!0}),(0,r.jsx)(_,{"data-rt":"slash-header-text",children:e})]})};var A=t(83557),G=t(72058),L=t(36076),U=t(302),O=t(98447),V=t(3922),E=t(11163),D=t(92432),q=t(41077),X=t(1657),z=t(37128),H=t(70872),R=t(86239),$=t(74588),Q=t(41429),M=t(33782),B=t(18111);function K(){let n=(0,w._)(["\n    max-width: 40em;\n    margin-bottom: 40px;\n\n    @media "," {\n        margin-bottom: 50px;\n    }\n"]);return K=function(){return n},n}function J(){let n=(0,w._)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    width: 100%;\n\n    "," {\n        margin: 10px 0 20px 0;\n    }\n\n    @media "," {\n        "," {\n            margin: 10px 0 20px auto;\n        }\n    }\n"]);return J=function(){return n},n}function Y(){let n=(0,w._)(["\n    margin-bottom: 10px;\n\n    @media "," {\n        margin-bottom: 20px;\n    }\n"]);return Y=function(){return n},n}function W(){let n=(0,w._)(["\n    ","\n"]);return W=function(){return n},n}let nn=(0,j.ZP)(M.Z).withConfig({componentId:"sc-eb5bd684-0"})(K(),I.U.GteMedium),ne=j.ZP.section.withConfig({componentId:"sc-eb5bd684-1"})(J(),B.JD,I.U.GteSmall,B.JD),nt=(0,j.ZP)(y.td).withConfig({componentId:"sc-eb5bd684-2"})(Y(),I.U.GteXLarge),ni=j.ZP.h2.withConfig({componentId:"sc-eb5bd684-3"})(W(),Q.TX);var na=t(22212),nr=t.n(na),no=t(55817),nd=t(84040);function nl(){let n=(0,w._)([""]);return nl=function(){return n},n}function nc(){let n=(0,w._)(["\n    height: 30px;\n    width: 170px;\n    background-color: ",";\n    margin-bottom: 30px;\n"]);return nc=function(){return n},n}function ns(){let n=(0,w._)(["\n    height: 18px;\n    width: 100%;\n    background-color: ",";\n    margin-bottom: 5px;\n\n    @media "," {\n        width: 620px;\n    }\n\n    &:nth-of-type(3) {\n        width: 80%;\n        margin-bottom: 55px;\n\n        @media "," {\n            width: 480px;\n        }\n    }\n"]);return ns=function(){return n},n}function nu(){let n=(0,w._)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 10px;\n"]);return nu=function(){return n},n}function nm(){let n=(0,w._)(["\n    height: 18px;\n    width: 80px;\n    margin-right: 13px;\n    background-color: ",";\n"]);return nm=function(){return n},n}function ng(){let n=(0,w._)(["\n    margin-bottom: 20px;\n    border-color: ","30;\n"]);return ng=function(){return n},n}function np(){let n=(0,w._)(["\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 10px;\n    margin-bottom: 42px;\n\n    @media "," {\n        grid-template-columns: repeat(2, 1fr);\n    }\n    @media "," {\n        grid-template-columns: repeat(5, 1fr);\n    }\n    @media "," {\n        grid-template-columns: repeat(6, 1fr);\n    }\n"]);return np=function(){return n},n}function nf(){let n=(0,w._)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 10px;\n    margin-bottom: 42px;\n\n    @media "," {\n        grid-template-columns: repeat(4, 1fr);\n    }\n    @media "," {\n        grid-template-columns: repeat(5, 1fr);\n    }\n    @media "," {\n        grid-template-columns: repeat(6, 1fr);\n    }\n"]);return nf=function(){return n},n}function nh(){let n=(0,w._)(["\n    margin-bottom: 10px;\n    margin-right: 10px;\n    width: 100%;\n\n    @media "," {\n        &:last-child {\n            display: none;\n        }\n    }\n    @media "," {\n        &:last-child {\n            display: block;\n        }\n    }\n"]);return nh=function(){return n},n}function nv(){let n=(0,w._)(["\n    margin-bottom: 10px;\n    margin-right: 10px;\n    width: 100%;\n    &:nth-child(n + 3) {\n        display: none;\n    }\n    @media "," {\n        &:nth-child(-n + 4) {\n            display: block;\n        }\n    }\n    @media "," {\n        &:nth-child(-n + 5) {\n            display: block;\n        }\n    }\n    @media "," {\n        &:last-child {\n            display: block;\n        }\n    }\n"]);return nv=function(){return n},n}function nk(){let n=(0,w._)(["\n    background-color: ",";\n    height: 128px;\n    width: auto;\n\n    @media "," {\n        height: 290px;\n    }\n\n    @media "," {\n        height: 150px;\n    }\n"]);return nk=function(){return n},n}function nx(){let n=(0,w._)(["\n    background-color: ",";\n    padding-top: 56.25%;\n    width: 100%;\n"]);return nx=function(){return n},n}function nb(){let n=(0,w._)(["\n    position: relative;\n    height: 18px;\n    width: 100%;\n    background-color: ",";\n    margin-bottom: 10px;\n    margin-top: 10px;\n\n    @media "," {\n        width: 80%;\n    }\n\n    &:nth-of-type(3) {\n        width: 80%;\n        margin-bottom: 55px;\n\n        @media "," {\n            width: 65%;\n        }\n    }\n"]);return nb=function(){return n},n}let ny=j.ZP.div.withConfig({componentId:"sc-523753f2-0"})(nl()),nw=j.ZP.div.withConfig({componentId:"sc-523753f2-1"})(nc(),x.XQ),nj=j.ZP.div.withConfig({componentId:"sc-523753f2-2"})(ns(),x.XQ,I.U.GteMedium,I.U.GteMedium),nI=j.ZP.div.withConfig({componentId:"sc-523753f2-3"})(nu()),nS=j.ZP.div.withConfig({componentId:"sc-523753f2-4"})(nm(),x.XQ),nN=(0,j.ZP)(nd.e).withConfig({componentId:"sc-523753f2-5"})(ng(),x.nL),nC=j.ZP.div.withConfig({componentId:"sc-523753f2-6"})(np(),I.U.GteSmall,I.U.GteLarge,I.U.FullScreen),nP=j.ZP.div.withConfig({componentId:"sc-523753f2-7"})(nf(),I.U.GteSmall,I.U.GteLarge,I.U.FullScreen),nZ=j.ZP.div.withConfig({componentId:"sc-523753f2-8"})(nh(),I.U.GteLarge,I.U.FullScreen),n_=j.ZP.div.withConfig({componentId:"sc-523753f2-9"})(nv(),I.U.GteSmall,I.U.GteLarge,I.U.FullScreen),nF=j.ZP.div.withConfig({componentId:"sc-523753f2-10"})(nk(),x.XQ,I.U.GteLarge,I.U.GteLarge),nT=j.ZP.div.withConfig({componentId:"sc-523753f2-11"})(nx(),x.uR),nA=j.ZP.div.withConfig({componentId:"sc-523753f2-12"})(nb(),x.XQ,I.U.GteMedium,I.U.GteMedium),nG=()=>(0,r.jsxs)(nZ,{children:[(0,r.jsx)(nT,{}),(0,r.jsx)(nF,{})]}),nL=()=>(0,r.jsxs)(n_,{children:[(0,r.jsx)(nT,{}),(0,r.jsx)(nA,{}),(0,r.jsx)(nA,{})]}),nU=()=>((0,o.useEffect)(()=>{let n=document.querySelectorAll(".placeholder-heading");n&&(0,no.j)(n,...x.at);let e=document.querySelectorAll(".placeholder-card");e&&(0,no.j)(e,...x.at)}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ny,{className:"placeholder-heading",children:[(0,r.jsx)(nw,{}),(0,r.jsx)(nj,{}),(0,r.jsx)(nj,{}),(0,r.jsxs)(nI,{children:[(0,r.jsx)(nS,{}),(0,r.jsx)(nS,{})]})]}),(0,r.jsx)(nN,{className:"placeholder-card"}),(0,r.jsx)(nC,{className:"placeholder-card",children:[...Array(6)].map((n,e)=>(0,r.jsx)(nG,{},e))}),[void 0,void 0,void 0].map((n,e)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(nw,{className:"placeholder-heading"}),(0,r.jsx)(nP,{className:"placeholder-card",children:[...Array(6)].map((n,e)=>(0,r.jsx)(nL,{},e))})]},e))]}));var nO=t(40201),nV=t(80737);function nE(){let n=(0,w._)(["\n    display: none;\n\n    @media "," {\n        display: flex;\n    }\n"]);return nE=function(){return n},n}function nD(){let n=(0,w._)(["\n    display: block;\n\n    @media "," {\n        display: none;\n    }\n"]);return nD=function(){return n},n}let nq=(0,j.ZP)(nO.Z).withConfig({componentId:"sc-ef875836-0"})(nE(),I.U.GteXLarge),nX=(0,j.ZP)(nV.Z).withConfig({componentId:"sc-ef875836-1"})(nD(),I.U.GteXLarge),nz=n=>{let{description:e}=n;return e?(0,r.jsx)(nn,{size:l.Z.LARGE,fontColor:x.O5,children:e}):null},nH=n=>{var e,t;let i,{router:l}=n,x=(0,p.CG)(m.LB),w=(0,p.CG)(g.$o),[j,I]=(0,o.useState)(null),{contentoAbTestVariants:S}=(0,d.Z)();(0,o.useEffect)(()=>{l.query.tab?I(l.query.tab):I(null)},[l.query.tab]);let[N]=(0,D.aM)({query:nr(),variables:{id:String(l.query.id),includeFullOppetArkiv:u.Z.FLAG_ENABLE_ALL_OA,tab:j,abTestVariants:S,userIsAbroad:u.Z.FLAG_USER_ABROAD},context:(0,o.useMemo)(()=>({includeAuthWhenLoggedIn:!0}),[]),requestPolicy:"cache-and-network"}),{data:C,error:P,fetching:Z}=N;if(Z)return(0,r.jsx)(nU,{});if(P)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{pathname:l.asPath,shouldDispatchHttpStatus:!0}),(0,r.jsx)(X.Z,{statisticsObject:(0,O.r)(500,l.asPath)})]});if(!C)return null;let _=C.categoryPage;if(!C.categoryPage)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H.Z,{shouldDispatchHttpStatus:!0}),(0,r.jsx)(X.Z,{statisticsObject:(0,O.r)(404,l.asPath)})]});let F=_.image?(0,V.zO)((0,V.pT)(_.image.id,_.image.changed),650):null,E=_.lazyLoadedTabs.find(n=>n.slug===j)||_.lazyLoadedTabs[0],Q=_.lazyLoadedTabs.findIndex(n=>n.slug===j);{let n=(0,A.w)(window);i=(0,L.R0)(String(l.query.id),_.analyticsIdentifiers.viewId,_.analyticsIdentifiers.viewType,n,_.heading,F)}let M=(n,e)=>{I(e),l.push({query:{...l.query,tab:e}},void 0,{scroll:!1})},B={listType:"personlig historik",listId:"fortsatt titta"},K=(0,U.d)(B);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)($.pc,{pathForFeeds:"/kategori/".concat(l.query.id),title:_.heading,description:_.description,keywords:"svt play television ".concat(_.heading),children:[F&&[(0,r.jsx)("meta",{property:"og:image",content:F},"og:image"),(0,r.jsx)("meta",{property:"og:image:width",content:"650"},"og:image:width"),(0,r.jsx)("meta",{property:"og:image:height",content:"366"},"og:image:height")],F&&(0,r.jsx)("meta",{name:"twitter:image:src",content:F},"twitter:image:src")]}),(0,r.jsx)(T,{text:_.heading,type:a.H1,dataRt:"genre-title"}),(0,r.jsx)(nz,{description:_.description}),"barn"===l.query.id&&(0,r.jsx)(s.Z,{onlyKidsContent:!0,listTracking:B,onItemImpression:K},"startpage-continue-watching"),(0,r.jsxs)(y.Lz,{onChange:M,activeTabIndex:Q>0?Q:0,children:[(null===(e=_.lazyLoadedTabs)||void 0===e?void 0:e.length)>1&&(0,r.jsx)(nt,{children:null===(t=_.lazyLoadedTabs)||void 0===t?void 0:t.map((n,e)=>(0,r.jsx)(y.OK,{index:e,slug:n.slug,children:n.name},n.name))}),(0,r.jsx)(y.x4,{children:null==E?void 0:E.selections.map((n,e)=>{let t=(0,G.ww)(n),i=(0,U.d)(t);if(n.listPresentation===q.md.Grid){let a=x?n.items.filter(n=>!n.item.restrictions.onlyAvailableInSweden):n.items;return(0,r.jsxs)(ne,{"data-helix-type":"list","data-rt":"grid",children:["all"!==n.selectionType&&(0,r.jsx)(v.X6,{children:n.name}),0===e&&(0,r.jsx)(R.Z,{showFilter:!0}),a.length<1?(0,r.jsx)(b.Z,{heading:"Det finns inga\n                                            ".concat("clips"===n.selectionType?"klipp":"program","\n                                            i den h\xe4r kategorin som g\xe5r att se utomlands.")}):(0,r.jsx)(f.Z,{id:n.id,items:a,listTracking:t,onItemImpression:i,showInfoOnHover:!0})]},n.id)}return"recommended"===n.selectionType?(0,r.jsxs)("section",{"data-helix-type":"list",children:[(0,r.jsx)(ni,{children:n.name}),(0,r.jsx)(nq,{id:"recommended-carousel-".concat(n.id),items:n.items.slice(0,6),editModeActivated:!1,isInSweden:!0,cardType:h.Z.SHOWCASE,currentAccessibilityChoiceContento:w,listTracking:t,onItemImpression:i,k5aPosition:n.id},"recommended-carousel-".concat(n.id)),(0,r.jsx)(nX,{items:n.items.slice(0,6),listTracking:t,onItemImpression:i,isDisplaywindow:!0,k5aPosition:n.id},"recommended-showcase-".concat(n.id))]},"genre-startblock"):(0,r.jsx)(k.Z,{id:n.id,items:n.items,listPresentation:n.listPresentation,headerText:n.name,location:l.asPath,listTracking:t,onItemImpression:i,url:"/lista/".concat(n.id,"/").concat((0,c.lV)(n.name)),showInfoOnHover:!0},"category-page-content-list-".concat(n.id))})})]}),(0,r.jsx)(X.Z,{statisticsObject:i},String(l.query.id))]})};var nR=(0,E.withRouter)(o.memo(nH,(n,e)=>!e.router.query.id));let n$=()=>(0,r.jsx)(nR,{});var nQ=n$}},function(n){n.O(0,[4386,2360,5068,3697,5167,872,5433,1516,2888,179],function(){return n(n.s=26040)}),_N_E=n.O()}]);