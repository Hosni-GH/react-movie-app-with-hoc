(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(6),i=t.n(n),c=(t(15),t(9)),l=t(8),m=t(1),o=t(2),f=t(4),u=t(3),d=t(5),v=function(e){function a(){return Object(m.a)(this,a),Object(f.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e="";switch(this.props.rating){case 1:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}));break;case 2:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}));break;case 3:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}));break;case 4:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"far fa-star"}));break;case 5:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}));break;default:e=r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}),r.a.createElement("i",{className:"far fa-star"}))}return r.a.createElement("div",{className:"movie-item"},r.a.createElement("div",{className:"movie-rating"},e),r.a.createElement("div",{className:"movie-footer"},r.a.createElement("span",{className:"movie-title"},this.props.title),r.a.createElement("span",null," - "),r.a.createElement("span",{className:"movie-year"},this.props.year)))}}]),a}(s.Component),h=function(e){function a(){var e,t;Object(m.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(f.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e;return e=this.props.MovieList.map((function(e,a){return r.a.createElement(v,{key:a,title:e.movieTitle,year:e.movieYear,rating:e.movieRating})})),r.a.createElement("div",{className:"movie-container"},e)}}]),a}(s.Component),E=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://hover.hillsclerk.com/images/loading.gif"}))},p=function(e){return function(a){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(u.a)(t).call(this,e))).state={timeup:!0},setTimeout((function(){return a.setState({timeup:!1})}),1500),console.log(a.state.timeup),a}return Object(d.a)(t,a),Object(o.a)(t,[{key:"render",value:function(){return this.state.timeup?r.a.createElement(E,null):r.a.createElement(e,this.props)}}]),t}(r.a.Component)},N=(t(16),p(function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(f.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){t.setState({searchKeyword:e.target.value})},t.starFilter=function(e){t.setState({searchStars:e})},t.search=function(){var e=t.state.movies.filter((function(e){return e.movieTitle.toLowerCase().indexOf(t.state.searchKeyword.toLowerCase())>=0&&e.movieRating>=t.state.searchStars}));t.setState({filterOn:!0,filtredtable:e})},t.resetFilter=function(){t.setState({filterOn:!1})},t.handleChangeAdd=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.add=function(){t.setState({movies:[].concat(Object(c.a)(t.state.movies),[{movieTitle:t.state.addMovieTitle,movieYear:t.state.addMovieYear,movieRating:parseInt(t.state.addMovieRating)}]),display:!t.state.display})},t.state={searchKeyword:"",addMovieTitle:"",addMovieYear:"",addMovieRating:"",display:!1,searchStars:5,filterOn:!1,movies:[{movieTitle:"Inception",movieYear:2010,movieRating:5},{movieTitle:"Titanic",movieYear:1997,movieRating:2},{movieTitle:"Blade Runner",movieYear:2017,movieRating:4}]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},console.log(this.state.movies),r.a.createElement("div",{className:"search-form"},r.a.createElement("input",{type:"text",placeholder:"Type movie name to search",onChange:function(a){return e.handleChange(a)}}),r.a.createElement("span",{onClick:function(){return e.search()},className:"search-me"},"Search"),r.a.createElement("div",null,r.a.createElement("span",null,"Minumum rating"),r.a.createElement("span",{className:"movie-stars"},r.a.createElement("i",{className:"far fa-star",onClick:function(){return e.starFilter(1)}}),r.a.createElement("i",{className:"far fa-star",onClick:function(){return e.starFilter(2)}}),r.a.createElement("i",{className:"far fa-star",onClick:function(){return e.starFilter(3)}}),r.a.createElement("i",{className:"far fa-star",onClick:function(){return e.starFilter(4)}}),r.a.createElement("i",{className:"far fa-star",onClick:function(){return e.starFilter(5)}}))),r.a.createElement("div",{onClick:this.resetFilter},r.a.createElement("span",{className:"reset-me"},"reset"))),r.a.createElement(h,{MovieList:this.state.filterOn?this.state.filtredtable:this.state.movies}),r.a.createElement("div",{className:"btn-plus-container"},r.a.createElement("div",{className:"btn-div",onClick:function(){return e.setState({display:!e.state.display})}},r.a.createElement("p",null,"+"))),r.a.createElement("div",{className:this.state.display?"display":"hidden"},r.a.createElement("div",{className:"display-container"},r.a.createElement("h2",null,"Add a movie:"),r.a.createElement("input",{type:"text",placeholder:"name",name:"addMovieTitle",onChange:this.handleChangeAdd}),r.a.createElement("input",{type:"text",placeholder:"year",name:"addMovieYear",onChange:this.handleChangeAdd}),r.a.createElement("input",{type:"text",placeholder:"rating",name:"addMovieRating",onChange:this.handleChangeAdd}),r.a.createElement("button",{onClick:this.add},"Add"))))}}]),a}(s.Component)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.209fb909.chunk.js.map