(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o,s=n(0),i=n.n(s),r=n(10),a=n.n(r),c=(n(23),n(2)),u=n(3),p=n(5),l=n(4),f=n(6),h=n(1),b=n(17);!function(e){e.SUBSCRIBE="SUBSCRIBE",e.ADDCOLLISIONFUNC="ADDCOLLISIONFUNC"}(o||(o={}));var m,d=function(e,t,n,s,i){return{type:o.SUBSCRIBE,func:e,functionType:t,inputCheck:void 0!==n&&n,collisionFunction:s,collides:void 0!==i&&i}},y={subscriptions:[]};!function(e){e.MOVEMENT="MOVEMENT",e.GENERAL="GENERAL"}(m||(m={}));n(29);var k=function(e,t){var n=e.collisionFunction(),o=t.collisionFunction(),s=n.edges[0],i=n.edges[2],r=o.edges[0],a=o.edges[2];return!(i[0]<r[0]||a[0]<s[0])&&!(i[1]<r[1]||a[1]<s[1])},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={requestID:0,fps:0,keys:[]},n.timeMeasurements=[],n.keyChange=function(e){var t=n.state.keys;"keyup"===e.type?n.setState({keys:t.map((function(t){return e.key===t.key?{key:t.key,isPressed:!1}:t}))}):"keydown"===e.type&&n.setState({keys:t.map((function(t){return e.key===t.key?{key:t.key,isPressed:!0}:t}))})},n.loop=function(){n.timeMeasurements.push(performance.now());var e=n.timeMeasurements[n.timeMeasurements.length-1]-n.timeMeasurements[0];e>=500&&(n.setState({fps:Math.round(n.timeMeasurements.length/e*1e3*2)/2}),n.timeMeasurements=[]),n.props.loop.forEach((function(e){e.functionType===m.MOVEMENT?n.props.loop.map((function(t){return!(!t.collides||e===t)&&k(e,t)})).indexOf(!0)<0&&(e.inputCheck?e.func(n.state.keys):e.func()):e.inputCheck?e.func(n.state.keys):e.func()})),n.setState({requestID:window.requestAnimationFrame(n.loop)})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({requestID:window.requestAnimationFrame(this.loop),keys:[{key:"w",isPressed:!1},{key:"a",isPressed:!1},{key:"s",isPressed:!1},{key:"d",isPressed:!1}]}),document.onkeydown=this.keyChange,document.onkeyup=this.keyChange}},{key:"componentWillUnmount",value:function(){var e=this.state.requestID;e&&window.cancelAnimationFrame(e)}},{key:"render",value:function(){var e=this.state.fps;return s.createElement("div",{className:"loopStats"},s.createElement("div",null,"fps: ".concat(e)))}}]),t}(s.Component),O=Object(h.b)((function(e){return{loop:e.loopState.subscriptions}}))(v),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(l.a)(t).call(this,e))).generateBoundaries=function(){var e=n.state,t=e.top,o=e.left;return{numberOfEdges:4,edges:[[o,t],[o+n.props.size,t],[o+n.props.size,t+n.props.size],[o,t+n.props.size]],hole:!1}},n.movement=function(e){e.forEach((function(e){if(e.isPressed)switch(e.key){case"a":e.isPressed&&n.setState({left:n.state.left-2});break;case"s":n.setState({top:n.state.top+2});break;case"d":n.setState({left:n.state.left+2});break;case"w":n.setState({top:n.state.top-2})}}))},n.state={left:102,top:102,movingRight:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.subscribeToLoop(this.movement,m.MOVEMENT,!0,this.generateBoundaries,!0)}},{key:"render",value:function(){var e=this.props.size,t=this.state,n={position:"relative",backgroundColor:"lightgreen",width:e+"px",height:e+"px",left:t.left+"px",top:t.top+"px"};return s.createElement("div",{style:n})}}]),t}(s.Component),E=Object(h.b)((function(e){return{loop:{subscriptions:e.loopState.subscriptions}}}),{subscribeToLoop:d})(g),j=(n(30),function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).getBounds=function(){var e=n.props,t=e.left,o=e.top,s=e.size;return{edges:[[t,o],[t+s,o],[t+s,o+s],[t,o+s]],hole:!1,numberOfEdges:4}},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.isWall&&this.props.subscribeToLoop((function(){}),m.GENERAL,!1,this.getBounds,!0)}},{key:"render",value:function(){var e={left:this.props.left+"px",top:this.props.top+"px",width:this.props.size+"px",height:this.props.size+"px"},t="".concat(this.props.left,"x").concat(this.props.top);return this.props.isWall?s.createElement("div",{key:t,style:e,className:"wall"}):s.createElement("div",{key:t,style:e,className:"open"})}}]),t}(s.Component)),w=Object(h.b)((function(e){return{loop:{subscriptions:e.loopState.subscriptions}}}),{subscribeToLoop:d})(j),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).map=[],n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){for(var e=this.props,t=e.width,n=e.height,o=e.sizeOfCell,i=e.cells,r=e.left,a=e.top,c=0;c<t;c++)for(var u=0;u<n;u++)this.map.push(s.createElement(w,{left:r+c*o,top:a+u*o,isWall:i[u*t+c],size:o}))}},{key:"render",value:function(){return s.createElement("div",{style:{position:"absolute",left:this.props.left+"px",top:this.props.top+"px"},className:"terrain"},this.map.map((function(e){return e})))}}]),t}(s.Component),C=Object(h.b)((function(e){return{loop:{subscriptions:e.loopState.subscriptions}}}),{subscribeToLoop:d})(S),M=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{left:0,top:0,width:20,height:10,sizeOfCell:100,cells:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!1,!1,!0,!1,!0,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!0,!1,!1,!1,!1,!0,!0,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!1,!1,!0,!1,!0,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0,!1,!1,!0,!1,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]}),i.a.createElement(E,{size:40}),i.a.createElement(O,null))}}]),t}(i.a.Component),N=Object(h.b)((function(e){return{loop:{subscriptions:e.loopState.subscriptions}}}),{subscribeToLoop:d})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(9),T=n(16),x=Object(B.c)({loopState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.SUBSCRIBE:return{subscriptions:[].concat(Object(b.a)(e.subscriptions),[{inputCheck:t.inputCheck,func:t.func,functionType:t.functionType,collisionFunction:t.collisionFunction,collides:t.collides}])};default:return e}}}),I=function(){return Object(B.d)(x,void 0,Object(B.a)(T.a))}();a.a.render(i.a.createElement(h.a,{store:I},i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.75fdf7dd.chunk.js.map