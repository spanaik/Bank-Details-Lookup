(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},30:function(e,a,t){},31:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),s=t(1),l=t(9),o="FILTER_DATA",u="FILTERED_DATA",m="DATA_REQUESTED",f="DATA_LOADED",p="DATA_ERROR",d="PAGINATE_DATA",v="PAGINATED_DATA",h="LOAD_FAV_DATA",g="FAV_DATA",y="CLEAR_DATA",E={bankDetails:[],favData:[],filteredData:[],dataToDisplay:[]};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;return a.type===f?Object.assign({},e,{bankDetails:a.payload,filteredData:a.payload}):a.type===u?Object.assign({},e,{filteredData:a.payload}):a.type===p?Object.assign({},e,{dataToDisplay:a.payload}):a.type===v?Object.assign({},e,{dataToDisplay:a.payload}):a.type===h?Object.assign({},e,{favData:a.payload,filteredData:a.payload,bankDetails:a.payload}):a.type===g?Object.assign({},e,{favData:a.payload}):a.type===y?Object.assign({},e,{filteredData:e.favData}):e},D={search:function(e){e=e.toUpperCase();var a="https://vast-shore-74260.herokuapp.com/banks?city=".concat(e);return fetch(a,{cache:"force-cache"}).then(function(e){return e.json()}).then(function(e){if(e)return e.map(function(e){return{ifsc:e.ifsc,id:e.bank_id,name:e.bank_name,branch:e.branch,address:e.address,city:e.city,district:e.district,state:e.state}})})}},k=function(e,a){var t=e.toLowerCase();return a.filter(function(e){return Object.keys(e).some(function(a){return"string"===typeof e[a]&&e[a].toLowerCase().includes(t)})})};var N=t(18),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,C=Object(l.d)(b,O(Object(l.a)(function(e){var a=e.getState,t=e.dispatch;return function(e){return function(n){if(n.type===o){var r=k(n.payload,a().bankDetails);t({type:u,payload:r})}return e(n)}}},function(e){var a=e.dispatch;return function(e){return function(t){return t.type===m&&D.search(t.payload).then(function(e){a({type:f,payload:e})}).catch(function(e){console.log(e.message),a({type:p,payload:{error:"Error Loading Data"}})}),e(t)}}},function(e){var a=e.getState,t=e.dispatch;return function(e){return function(n){if(n.type===d){var r=(n.payload.currentPage+1)*n.payload.itemsPerPage,c=r-n.payload.itemsPerPage,i=a().filteredData.slice(c,r);t({type:v,payload:i})}return e(n)}}},N.a))),j=(t(30),t(4)),P=t(5),w=t(7),A=t(6),T=t(8);t(31);var S="object"===typeof localStorage;try{localStorage.setItem("ls-test","test"),localStorage.removeItem("ls-test")}catch(W){if(S=!1,W.code!==DOMException.QUOTA_EXCEEDED_ERR||0!==localStorage.length)throw W}var _={getItem:function(e){return S?localStorage.getItem(e):null},setItem:function(e,a){S&&localStorage.setItem(e,a)},removeItem:function(e){S&&localStorage.removeItem(e)}},I=t(19),L=t(11),B=t.n(L),x={Favourite:"favourite",Kolkatta:"kolkata",Bangalore:"bangalore",Delhi:"delhi",Mumbai:"mumbai",Chennai:"chennai"};var F=function(e){function a(){var e,t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(w.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(c)))).state={city:"",filterTerm:""},t.changeOnDebounce=B()(function(){t.props.filterData(t.state.filterTerm)},500),t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(I.a)({},n,r),function(){"city"===n&&("favourite"!==t.state.city?t.props.requestData(t.state.city):t.props.clearData()),"filterTerm"===n&&t.changeOnDebounce()})},t.renderCityOptions=function(){return Object.keys(x).map(function(e){var a=x[e];return r.a.createElement("option",{value:a,key:a},e)})},t}return Object(T.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("select",{className:"custom-select",value:this.state.city,name:"city",onChange:this.handleChange},this.renderCityOptions())),r.a.createElement("div",{className:"col"},r.a.createElement("input",{className:"form-control",name:"filterTerm",value:this.state.filterTerm,onChange:this.handleChange,placeholder:"Type to filter"}))))}}]),a}(r.a.Component),R=Object(s.b)(null,function(e){return{filterData:function(a){return e({type:o,payload:a})},requestData:function(a){return e({type:m,payload:a})},clearData:function(){return e({type:y})}}})(F);var J=function(e){function a(){var e,t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(w.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(c)))).isFavBank=function(e,a){if(!a)return!1;for(var t=0;t<a.length;t++)if(e===a[t].ifsc)return!0;return!1},t.handleClick=function(e){e.preventDefault();var a=e.target.id,n=JSON.parse(_.getItem("favListOfBanks")),r=t.props.banks?t.props.banks.filter(function(e){return a===e.ifsc}):[];if(r.length>0){if(n)if(n.some(function(e){return e.ifsc===a})){var c=n.findIndex(function(e){return e.ifsc===a});c>-1&&n.splice(c,1)}else n.push(r[0]);else n=r;t.props.pushFavData(n);var i=JSON.stringify(n);_.setItem("favListOfBanks",i)}},t.renderBankList=function(e,a){var n=[r.a.createElement("div",{className:"row header-row"},r.a.createElement("div",{className:"cold-xs-auto text-left"},"Fav"),r.a.createElement("div",{className:"col"},"Bank Name"),r.a.createElement("div",{className:"col"},"IFSC Code"),r.a.createElement("div",{className:"col"},"Branch"))];return n.push(e.map(function(e){return t.isFavBank(e.ifsc,a)?r.a.createElement("div",{key:e.ifsc,className:"row data-row"},r.a.createElement("div",{className:"col-xs-auto text-right"},r.a.createElement("i",{className:"fa fa-heart checked",onClick:t.handleClick,id:e.ifsc})),r.a.createElement("div",{className:"col"},e.name),r.a.createElement("div",{className:"col"},e.ifsc),r.a.createElement("div",{className:"col"},e.branch)):r.a.createElement("div",{key:e.ifsc,className:"row data-row"},r.a.createElement("div",{className:"col-xs-auto text-right"},r.a.createElement("i",{className:"fa fa-heart",onClick:t.handleClick,id:e.ifsc})),r.a.createElement("div",{className:"col"},e.name),r.a.createElement("div",{className:"col"},e.ifsc),r.a.createElement("div",{className:"col"},e.branch))})),n},t}return Object(T.a)(a,e),Object(P.a)(a,[{key:"render",value:function(){var e=this.props,a=e.banks,t=e.favBanks;return r.a.createElement("div",{className:"container text-left data-container"},a?this.renderBankList(a,t||""):"")}}]),a}(r.a.Component),M=Object(s.b)(function(e){return{banks:e.dataToDisplay,favBanks:e.favData}},function(e){return{pushFavData:function(a){return e({type:g,payload:a})}}})(J),U=t(20),V=t.n(U);var X=function(e){function a(e){var t;return Object(j.a)(this,a),(t=Object(w.a)(this,Object(A.a)(a).call(this,e))).changeOnDebounce=B()(function(){t.props.paginateData(t.currentPage,t.state.itemsPerPage)},500),t.handleItemChange=function(e){var a=e.target.value;Number(a)>0&&t.setState({itemsPerPage:Number(a)},function(){return t.changeOnDebounce()})},t.handlePageClick=function(e){t.currentPage=e.selected,t.props.paginateData(t.currentPage,t.state.itemsPerPage)},t.state={itemsPerPage:5},t.currentPage=0,t}return Object(T.a)(a,e),Object(P.a)(a,[{key:"shouldComponentUpdate",value:function(e){return this.props.dataCount!==e.dataCount&&this.props.paginateData(this.currentPage,this.state.itemsPerPage),!0}},{key:"render",value:function(){var e=Math.ceil(this.props.dataCount/this.state.itemsPerPage);return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{className:"form-control",name:"itemPerPage",value:this.state.itemsPerPage,placeholder:"Enter the number of items you want to see",onChange:this.handleItemChange})),r.a.createElement("div",{className:"col total"},"Total Results ",this.props.dataCount),r.a.createElement("div",{className:"col"},r.a.createElement(V.a,{previousLabel:"<<Prev",nextLabel:"Next>>",breakLabel:"...",pageCount:e,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination justify-content-end",breakClassName:"page-item",breakLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active"}))))}}]),a}(r.a.Component),q=Object(s.b)(function(e){return{dataCount:e.filteredData.length}},function(e){return{paginateData:function(a,t){return e({type:d,payload:{currentPage:a,itemsPerPage:t}})}}})(X);var G=function(e){function a(){var e,t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(w.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).state={favBanks:[]},t}return Object(T.a)(a,e),Object(P.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(_.getItem("favListOfBanks"));a&&this.setState({favBanks:a},function(){e.props.loadFavData(e.state.favBanks)})}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Search for Bank Details"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Select the city you want, and use the filter to search"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(R,null)),r.a.createElement("div",{className:"col"},r.a.createElement(q,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(M,null)))))}}]),a}(r.a.Component),Q=Object(s.b)(null,function(e){return{loadFavData:function(a){return e({type:h,payload:a})}}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.c482223a.chunk.js.map