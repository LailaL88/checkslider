(this["webpackJsonptest-slider-react"]=this["webpackJsonptest-slider-react"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(4),c=i.n(r),s=(i(14),i(5)),o=i(6),l=i(1),d=i(8),u=i(7),h=(i(15),i(2)),p=1,m=window.matchMedia("(max-width: 686px)"),f=380,v=null,b=null,S=0,T=0,y=v-S,E=b-T,G=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).slider=a.a.createRef(),n.pic1=a.a.createRef(),n.pic2=a.a.createRef(),n.pic3=a.a.createRef(),n.pic4=a.a.createRef(),n.pic5=a.a.createRef(),n.pic6=a.a.createRef(),n.pic7=a.a.createRef(),n.pic0=a.a.createRef(),n.pic8=a.a.createRef(),n.images=[n.pic0,n.pic1,n.pic2,n.pic3,n.pic4,n.pic5,n.pic6,n.pic7,n.pic8],n.Previous=n.Previous.bind(Object(l.a)(n)),n.Next=n.Next.bind(Object(l.a)(n)),n.GoToSlide1=n.GoToSlide1.bind(Object(l.a)(n)),n.GoToSlide2=n.GoToSlide2.bind(Object(l.a)(n)),n.GoToSlide3=n.GoToSlide3.bind(Object(l.a)(n)),n.GoToSlide4=n.GoToSlide4.bind(Object(l.a)(n)),n.GoToSlide5=n.GoToSlide5.bind(Object(l.a)(n)),n.GoToSlide6=n.GoToSlide6.bind(Object(l.a)(n)),n.GoToSlide7=n.GoToSlide7.bind(Object(l.a)(n)),n.Swipe=n.Swipe.bind(Object(l.a)(n)),n}return Object(o.a)(i,[{key:"Swipe",value:function(){this.slider.current.addEventListener("touchstart",this.StartTouch,!1),this.slider.current.addEventListener("touchmove",this.MoveTouch,!1)}},{key:"StartTouch",value:function(e){v=e.touches[0].clientX,b=e.touches[0].clientY}},{key:"MoveTouch",value:function(e){null!==v&&null!==b&&(S=e.touches[0].clientX,T=e.touches[0].clientY,y=v-S,E=b-T,Math.abs(y)>Math.abs(E)&&(y>0?this.Previous():this.Next()),v=null,b=null,e.preventDefault())}},{key:"Previous",value:function(){var e=this;m.matches&&(f=240),p<=0||(p--,this.slider.current.style.transform="translateX("+-f*p+"px)",this.slider.current.style.transition="transform 1s ease-in-out",this.slider.current.addEventListener("transitionend",(function(){e.images[p]===e.pic0&&(e.slider.current.style.transition="none",p=7,e.slider.current.style.transform="translateX("+-f*p+"px)")})))}},{key:"Next",value:function(){var e=this;m.matches&&(f=240),p>=8||(p++,this.slider.current.style.transform="translateX("+-f*p+"px)",this.slider.current.style.transition="transform 1s ease-in-out",this.slider.current.addEventListener("transitionend",(function(){e.images[p]===e.pic8&&(e.slider.current.style.transition="none",p=1,e.slider.current.style.transform="translateX("+-f*p+"px)")})))}},{key:"GoToSlide1",value:function(){p=1,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide2",value:function(){p=2,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide3",value:function(){p=3,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide4",value:function(){p=4,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide5",value:function(){p=5,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide6",value:function(){p=6,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"GoToSlide7",value:function(){p=7,m.matches&&(f=240),this.slider.current.style.transform="translateX("+-f*p+"px)"}},{key:"render",value:function(){return a.a.createElement("div",{class:"wrapper"},a.a.createElement("i",{id:"prevBtn"},a.a.createElement(h.a,{onClick:this.Previous})),a.a.createElement("i",{id:"nextBtn"},a.a.createElement(h.b,{onClick:this.Next})),a.a.createElement("div",{class:"slider-container"},a.a.createElement("div",{class:"slider",id:"sliderid",ref:this.slider,onTouchStart:this.Swipe},a.a.createElement("div",{class:"pic7",ref:this.pic0}),a.a.createElement("div",{class:"pic2",ref:this.pic2}),a.a.createElement("div",{class:"pic1",ref:this.pic1}),a.a.createElement("div",{class:"pic3",ref:this.pic3}),a.a.createElement("div",{class:"pic4",ref:this.pic4}),a.a.createElement("div",{class:"pic5",ref:this.pic5}),a.a.createElement("div",{class:"pic6",ref:this.pic6}),a.a.createElement("div",{class:"pic7",ref:this.pic7}),a.a.createElement("div",{class:"pic2",ref:this.pic8}))),a.a.createElement("button",{onClick:this.GoToSlide1},"1"),a.a.createElement("button",{onClick:this.GoToSlide2},"2"),a.a.createElement("button",{onClick:this.GoToSlide3},"3"),a.a.createElement("button",{onClick:this.GoToSlide4},"4"),a.a.createElement("button",{onClick:this.GoToSlide5},"5"),a.a.createElement("button",{onClick:this.GoToSlide6},"6"),a.a.createElement("button",{onClick:this.GoToSlide7},"7"))}}]),i}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,i){e.exports=i(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.96a222ba.chunk.js.map