(self.webpackChunknapa_v11=self.webpackChunknapa_v11||[]).push([[410],{31698:function(t,e,a){"use strict";a.r(e),a.d(e,{LandingModule:function(){return b}});var n=a(61116),i=a(65590),o=a(35366),r=a(88047),s=a(60649),l=a(33825),c=a(43752),g=a(75470),p=a(31041),d=a(27701);function u(t,e){1&t&&o._UZ(0,"mat-progress-bar",30)}function h(t,e){1&t&&(o.TgZ(0,"p",31),o._uU(1,"Please wait is searching"),o.qZA())}function Z(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"button",32),o.NdJ("click",function(e){const a=o.CHM(t).$implicit;return o.oxw(2).onClickAddress(a,e)}),o.TgZ(2,"h3"),o._uU(3),o.qZA(),o.TgZ(4,"h3"),o._uU(5),o.qZA(),o.TgZ(6,"small"),o._uU(7),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(3),o.Oqu(null==t?null:t.name),o.xp6(2),o.AsE("",null==t?null:t.number," ",null==t?null:t.road.location.name,""),o.xp6(2),o.lnq("",null==t?null:t.road.location.parent.postcode," ",null==t?null:t.road.location.parent.name,", ",null==t?null:t.road.location.parent.parent.name,"")}}function f(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",24),o.TgZ(1,"input",25),o.NdJ("keyup",function(e){return o.CHM(t),o.oxw().onSearchKeyUp(e)}),o.qZA(),o.qZA(),o.YNc(2,u,1,0,"mat-progress-bar",26),o.TgZ(3,"div",27),o.YNc(4,h,2,0,"p",28),o.TgZ(5,"div"),o.YNc(6,Z,8,6,"div",29),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(2),o.Q6J("ngIf",t.onKeyUp),o.xp6(2),o.Q6J("ngIf",t.onKeyUp),o.xp6(2),o.Q6J("ngForOf",t.addresses)}}document.getElementById("mapid");const m=[{path:"",component:(()=>{class t{constructor(t,e,a,n,i){this.fun=t,this.translate=e,this.configService=a,this.globalService=n,this.modalService=i,this.onKeyUp=!1}ngAfterViewInit(){this.getLanguage()}ngOnInit(){this.fun.inspinia(),this.getLanguage(),this.getMapId(),this.getCurrentLocation()}openModal(t){this.modalRef=this.modalService.show(t)}onSearchKeyUp(t){"keyup"==t.type&&(this.onKeyUp=!0,this.globalService.searchQuery(t.target.value).subscribe(t=>{this.onKeyUp=!1,this.addresses=t.addresses,console.log(t)},t=>{console.log(t)}))}getCurrentLocation(){this.globalService.getCurrentPosition().then(t=>{console.log("Your current position is:"),console.log(`Latitude : ${t.coords.latitude}`),console.log(`Longitude: ${t.coords.longitude}`),console.log(`More or less ${t.coords.accuracy} meters.`),this.getMap(t.coords.latitude,t.coords.longitude),this.getMarkerPopups()},t=>{console.log(t)})}onClickAddress(t,e){"click"==e.type&&(this.coordinates=t.coordinate.coordinates,this.getMap(this.coordinates[1],this.coordinates[0]),this.address=t,this.getMarkerPopups(),this.modalRef.hide())}getMapId(){if(this.getmap=L.map("mapid"),this.getmap)return this.getMap}getMap(t,e){let a=this.getmap.setView([t,e],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://openstreetmap.org">OpenStreetMap</a>',maxZoom:18,id:"mapbox.streets"}).addTo(a),this.getMarker(t,e,a)}getMarker(t,e,a){if(this.marker=L.marker([t,e]).addTo(a),this.marker)return this.marker}getMarkerPopups(){this.bindPopup=this.marker.bindPopup(null==this.address||null==this.address?"Mahali Ulipo":this.address.name+"<br/>"+this.address.number+" "+this.address.road.location.name+"<br/>"+this.address.road.location.parent.postcode+" "+this.address.road.location.parent.name+", "+this.address.road.location.parent.parent.name),this.bindPopup.openPopup()}setLanguage(t){"change"===t.type&&(localStorage.setItem("lang",t.target.value),this.getLanguage())}getLanguage(){this.getLang=localStorage.getItem("lang"),this.getLang?(this.getLang=localStorage.getItem("lang"),this.translate.use(this.getLang),"sw"==this.getLang?this.is_sw="":this.is_en=""):(this.getLang="sw",this.is_sw="")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.V),o.Y36(s.sK),o.Y36(l.E),o.Y36(c.U),o.Y36(g.tT))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-landing"]],decls:55,vars:23,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","fixed-top"],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","assets/img/NAPA_ROUNDED.svg","width","30","height","30","alt","",1,"d-inline-block","align-top"],["type","button","data-toggle","collapse","data-target","#napaNavBar","aria-controls","napaNavBar","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"fas","fa-map-marker-alt"],["id","napaNavBar",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"fas","fa-home"],[1,"fas","fa-folder"],[1,"fas","fa-address-card"],[1,"fas","fa-question-circle"],[1,"fas","fa-edit"],[1,"fas","fa-sign-in-alt"],["id","lang",1,"custom-select",3,"change"],["value","sw"],["value","en"],[1,"map_landing"],["id","mapid"],["event",""],[1,"modal-header"],["type","text","id","search","placeholder","Search...",1,"form-control",3,"keyup"],["mode","indeterminate",4,"ngIf"],[1,"modal-body"],["class","text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["mode","indeterminate"],[1,"text-center"],["type","button",1,"btn","btn-default","btn-block","text-left",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"div"),o.TgZ(2,"nav",0),o.TgZ(3,"div",1),o.TgZ(4,"a",2),o._UZ(5,"img",3),o._uU(6," NaPA "),o.qZA(),o.TgZ(7,"button",4),o._UZ(8,"span",5),o.qZA(),o.TgZ(9,"button",6),o.NdJ("click",function(){o.CHM(t);const a=o.MAs(54);return e.openModal(a)}),o._UZ(10,"i",7),o._uU(11),o.ALo(12,"translate"),o.qZA(),o.TgZ(13,"div",8),o.TgZ(14,"ul",9),o.TgZ(15,"li",10),o.TgZ(16,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/",t)}),o._UZ(17,"i",12),o._uU(18),o.ALo(19,"translate"),o.qZA(),o.qZA(),o.TgZ(20,"li",10),o.TgZ(21,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/about_us",t)}),o._UZ(22,"i",13),o._uU(23),o.ALo(24,"translate"),o.qZA(),o.qZA(),o.TgZ(25,"li",10),o.TgZ(26,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/contact",t)}),o._UZ(27,"i",14),o._uU(28),o.ALo(29,"translate"),o.qZA(),o.qZA(),o.TgZ(30,"li",10),o.TgZ(31,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/fq",t)}),o._UZ(32,"i",15),o._uU(33),o.ALo(34,"translate"),o.qZA(),o.qZA(),o.TgZ(35,"li",10),o.TgZ(36,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/information_registration_form",t)}),o._UZ(37,"i",16),o._uU(38),o.ALo(39,"translate"),o.qZA(),o.qZA(),o.TgZ(40,"li",10),o.TgZ(41,"a",11),o.NdJ("click",function(t){return e.configService.onClick("/login",t)}),o._UZ(42,"i",17),o._uU(43),o.ALo(44,"translate"),o.qZA(),o.qZA(),o.TgZ(45,"li",10),o.TgZ(46,"select",18),o.NdJ("change",function(t){return e.setLanguage(t)}),o.TgZ(47,"option",19),o._uU(48,"Swahili"),o.qZA(),o.TgZ(49,"option",20),o._uU(50,"English"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(51,"div",21),o._UZ(52,"div",22),o.qZA(),o.qZA(),o.YNc(53,f,7,3,"ng-template",null,23,o.W1O)}2&t&&(o.xp6(11),o.hij("\xa0",o.lcZ(12,9,"search_location"),""),o.xp6(7),o.hij("\xa0",o.lcZ(19,11,"home"),""),o.xp6(5),o.hij("\xa0",o.lcZ(24,13,"about"),""),o.xp6(5),o.hij("\xa0",o.lcZ(29,15,"contact_us"),""),o.xp6(5),o.hij("\xa0",o.lcZ(34,17,"faq"),""),o.xp6(5),o.hij("\xa0",o.lcZ(39,19,"information_registration_form"),""),o.xp6(5),o.hij("\xa0",o.lcZ(44,21,"login"),""),o.xp6(4),o.uIk("selected",e.is_sw),o.xp6(2),o.uIk("selected",e.is_en))},directives:[i.yS,p.YN,p.Kr,n.O5,n.sg,d.pW],pipes:[s.X$],styles:["#mapid[_ngcontent-%COMP%]{height:95vh}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(m)],i.Bz]}),t})();var v=a(56594);let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.ez,A,v.m]]}),t})()}}]);