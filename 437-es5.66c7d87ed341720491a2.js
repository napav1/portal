!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunknapa_v11=self.webpackChunknapa_v11||[]).push([[437],{18437:function(e,i,a){"use strict";a.r(i),a.d(i,{AssignmentsModule:function(){return E}});var r=a(61116),s=a(65590),o=a(24887),u=a(81364),c=a(35366),p=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-assignments"]],decls:2,vars:0,template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"assignments works!"),c.qZA())},styles:[""]}),e}(),l=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-create-assignment"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),e}(),m=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-delete-assignment"]],decls:2,vars:0,template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"delete-assignment works!"),c.qZA())},styles:[""]}),e}(),d=a(63995),f=a(59241),Z=a(39199),g=a(42693),v=a(38760),h=a(33825),A=a(90249),q=a(88047),T=a(30851),b=a(62962),w=a(13070),y=a(9550),x=a(92482),k=a(60649);function U(t,e){1&t&&(c.TgZ(0,"th",31),c._uU(1,"First Name"),c.qZA())}function _(t,e){if(1&t&&(c.TgZ(0,"td",32),c._uU(1),c.qZA()),2&t){var n=e.$implicit;c.xp6(1),c.Oqu(n.person.firstName)}}function S(t,e){1&t&&(c.TgZ(0,"th",31),c._uU(1,"Middle Name"),c.qZA())}function N(t,e){if(1&t&&(c.TgZ(0,"td",32),c._uU(1),c.qZA()),2&t){var n=e.$implicit;c.xp6(1),c.Oqu(n.person.middleName)}}function Y(t,e){1&t&&(c.TgZ(0,"th",31),c._uU(1,"Last Name"),c.qZA())}function O(t,e){if(1&t&&(c.TgZ(0,"td",32),c._uU(1),c.qZA()),2&t){var n=e.$implicit;c.xp6(1),c.Oqu(n.person.lastName)}}function C(t,e){1&t&&(c.TgZ(0,"th",31),c._uU(1,"Actions"),c.qZA())}function D(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"td",33),c.TgZ(1,"div",34),c.TgZ(2,"button",35),c.NdJ("click",function(t){var e=c.CHM(n).$implicit;return c.oxw().fun.encodeParam(e.id,"/assignments/view/",t)}),c._UZ(3,"i",36),c.qZA(),c.qZA(),c.qZA()}}function L(t,e){1&t&&c._UZ(0,"tr",37)}function I(t,e){1&t&&c._UZ(0,"tr",38)}var Q=function(){return[10,20,50,100]},z=function(){var e=function(){function e(n,i,a,r,s,o,u){t(this,e),this.router=n,this.http=i,this.tokenStorage=a,this.configService=r,this.userService=s,this.fun=o,this.permissionsService=u,this.perms=[],this.displayedColumns=["firstName","middleName","lastName","actions"]}return n(e,[{key:"ngOnInit",value:function(){this.getUsers();var t=this.tokenStorage.getUser().permissions;this.permissionsService.loadPermissions(this.tokenStorage.getPerms(t))}},{key:"applyFilter",value:function(t){var e=t.target.value;this.filterValue=e.trim(),this.filterValue=e.toLowerCase(),this.dataSource.filter=this.filterValue}},{key:"getUsers",value:function(){var t=this;this.userService.getUsers().subscribe(function(e){t.dataSource=new Z.by(e.data),t.dataSource.paginator=t.paginator,t.dataSource.sort=t.sort})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.F0),c.Y36(g.eN),c.Y36(v.i),c.Y36(h.E),c.Y36(A.K),c.Y36(q.V),c.Y36(o.YI))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-index-assignments"]],viewQuery:function(t,e){var n;(1&t&&(c.Gf(d.NW,5),c.Gf(f.YE,5)),2&t)&&(c.iGM(n=c.CRH())&&(e.paginator=n.first),c.iGM(n=c.CRH())&&(e.sort=n.first))},decls:54,vars:20,consts:[["id","wrapper"],["id","page-wrapper",1,"gray-bg"],[1,"row","wrapper","border-bottom","white-bg","page-heading"],[1,"col-md-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/dashboard"],[1,"breadcrumb-item","active"],[1,"wrapper","wrapper-content"],[1,"row"],[1,"ibox"],[1,"ibox-title"],[1,"ibox-tools"],[1,"collapse-link"],[1,"fa","fa-chevron-up"],[1,"ibox-content"],[1,"filter_input"],["matInput","",3,"placeholder","keyup"],["input",""],[1,"table-responsive","mat-elevation-z0"],["mat-table","","matSort","",1,"mat-table",3,"dataSource"],["matColumnDef","firstName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","actions"],["mat-cell","","width","50px",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-cell","","width","50px"],["role","group",1,"btn-group"],["type","button","name","edit",1,"btn","btn-default","btn-sm",3,"click"],["aria-hidden","true",1,"fas","fa-eye","fa-fw",2,"color","#2d8447"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"app-sidenav"),c.TgZ(2,"div",1),c._UZ(3,"app-navbar"),c.TgZ(4,"div",2),c.TgZ(5,"div",3),c.TgZ(6,"h2"),c._uU(7),c.ALo(8,"translate"),c.qZA(),c.TgZ(9,"ol",4),c.TgZ(10,"li",5),c.TgZ(11,"a",6),c._uU(12),c.ALo(13,"translate"),c.qZA(),c.qZA(),c.TgZ(14,"li",7),c.TgZ(15,"strong"),c._uU(16),c.ALo(17,"translate"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(18,"div",8),c.TgZ(19,"div",9),c.TgZ(20,"div",3),c.TgZ(21,"div",10),c.TgZ(22,"div",11),c.TgZ(23,"h5"),c._uU(24),c.ALo(25,"translate"),c.qZA(),c.TgZ(26,"div",12),c.TgZ(27,"a",13),c._UZ(28,"i",14),c.qZA(),c.qZA(),c.qZA(),c.TgZ(29,"div",15),c.TgZ(30,"div",9),c.TgZ(31,"div",3),c.TgZ(32,"mat-form-field",16),c.TgZ(33,"input",17,18),c.NdJ("keyup",function(t){return e.applyFilter(t)}),c.ALo(35,"translate"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(36,"div",19),c.TgZ(37,"table",20),c.ynx(38,21),c.YNc(39,U,2,0,"th",22),c.YNc(40,_,2,1,"td",23),c.BQk(),c.ynx(41,24),c.YNc(42,S,2,0,"th",22),c.YNc(43,N,2,1,"td",23),c.BQk(),c.ynx(44,25),c.YNc(45,Y,2,0,"th",22),c.YNc(46,O,2,1,"td",23),c.BQk(),c.ynx(47,26),c.YNc(48,C,2,0,"th",22),c.YNc(49,D,4,0,"td",27),c.BQk(),c.YNc(50,L,1,0,"tr",28),c.YNc(51,I,1,0,"tr",29),c.qZA(),c._UZ(52,"mat-paginator",30),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(53,"app-footer"),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Oqu(c.lcZ(8,9,"assignments")),c.xp6(5),c.Oqu(c.lcZ(13,11,"dashboard")),c.xp6(4),c.Oqu(c.lcZ(17,13,"assignments")),c.xp6(8),c.Oqu(c.lcZ(25,15,"assignments")),c.xp6(9),c.s9C("placeholder",c.lcZ(35,17,"search")),c.xp6(4),c.Q6J("dataSource",e.dataSource),c.xp6(13),c.Q6J("matHeaderRowDef",e.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",e.displayedColumns),c.xp6(1),c.Q6J("pageSizeOptions",c.DdM(19,Q)))},directives:[T._,b.S,s.yS,w.KE,y.Nt,Z.BZ,Z.w1,Z.fO,Z.Dz,Z.as,Z.nj,d.NW,x.c,Z.ge,Z.ev,Z.XQ,Z.Gk],pipes:[k.X$],styles:[""]}),e}(),B=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-update-assignment"]],decls:2,vars:0,template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"update-assignment works!"),c.qZA())},styles:[""]}),e}();function F(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"div"),c._uU(2,"You can see this text congrats"),c.qZA(),c.qZA())}var J,P,R=function(){return["manage-users"]},X=[{path:"",component:p,canActivate:[u.a]},{path:"index",component:z,canActivate:[u.a]},{path:"create",component:l,canActivate:[u.a]},{path:"view/:id",component:(J=function(){function e(n,i,a,r,s){t(this,e),this.config=n,this.permissionsService=i,this.activeRoute=a,this.userService=r,this.fun=s,this.perms=[]}return n(e,[{key:"ngOnInit",value:function(){}},{key:"view",value:function(){var t=this;this.activeRoute.paramMap.subscribe(function(e){var n=e.get("id"),i=parseInt(t.fun.decodeParam(n));t.paramId=i,t.userService.view(i).subscribe(function(e){t.user=e.data;for(var n=0;n<t.user.permissions.length;n++)t.perms.push(t.user.permissions[n].name);t.permissionsService.loadPermissions(t.perms),console.log(t.perms)})})}}]),e}(),J.\u0275fac=function(t){return new(t||J)(c.Y36(h.E),c.Y36(o.YI),c.Y36(s.gz),c.Y36(A.K),c.Y36(q.V))},J.\u0275cmp=c.Xpm({type:J,selectors:[["app-view-assignment"]],decls:33,vars:13,consts:[["id","wrapper"],["id","page-wrapper",1,"gray-bg"],[1,"row","wrapper","border-bottom","white-bg","page-heading"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/assignments/index"],[1,"breadcrumb-item","active"],[1,"wrapper","wrapper-content"],[1,"row"],[1,"col-md-12"],[1,"ibox"],[1,"ibox-title"],[1,"ibox-tools"],[1,"collapse-link"],[1,"fa","fa-chevron-up"],[1,"ibox-content"],[4,"ngxPermissionsOnly"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"app-sidenav"),c.TgZ(2,"div",1),c._UZ(3,"app-navbar"),c.TgZ(4,"div",2),c.TgZ(5,"div",3),c.TgZ(6,"h2"),c._uU(7),c.ALo(8,"translate"),c.qZA(),c.TgZ(9,"ol",4),c.TgZ(10,"li",5),c.TgZ(11,"a",6),c._uU(12),c.ALo(13,"translate"),c.qZA(),c.qZA(),c.TgZ(14,"li",7),c.TgZ(15,"strong"),c._uU(16),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"div",8),c.TgZ(18,"div",9),c.TgZ(19,"div",10),c.TgZ(20,"div",11),c.TgZ(21,"div",12),c.TgZ(22,"h5"),c._uU(23),c.ALo(24,"translate"),c.TgZ(25,"strong"),c._uU(26),c.qZA(),c.qZA(),c.TgZ(27,"div",13),c.TgZ(28,"a",14),c._UZ(29,"i",15),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"div",16),c.YNc(31,F,3,0,"div",17),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(32,"app-footer"),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Oqu(c.lcZ(8,6,"assignments")),c.xp6(5),c.Oqu(c.lcZ(13,8,"assignments")),c.xp6(4),c.Oqu(null==e.user?null:e.user.email),c.xp6(7),c.hij("",c.lcZ(24,10,"assignments"),":\xa0"),c.xp6(3),c.Oqu(null==e.user?null:e.user.email),c.xp6(5),c.Q6J("ngxPermissionsOnly",c.DdM(12,R)))},directives:[T._,b.S,s.yS,x.c],pipes:[k.X$],styles:[""]}),J),canActivate:[u.a,o.DD],data:{permissions:{only:"manage-users",redirectTo:"/unauthorized"}}},{path:"update/:id",component:B,canActivate:[u.a]},{path:"delete/:id",component:m,canActivate:[u.a]}],M=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(X)],s.Bz]}),e}(),G=a(56594),E=((P=function e(){t(this,e)}).\u0275fac=function(t){return new(t||P)},P.\u0275mod=c.oAB({type:P}),P.\u0275inj=c.cJS({imports:[[r.ez,M,G.m]]}),P)},81364:function(e,i,a){"use strict";a.d(i,{a:function(){return u}});var r=a(35366),s=a(65590),o=a(38760),u=function(){var e=function(){function e(n,i){t(this,e),this.router=n,this.tokenStorage=i}return n(e,[{key:"canActivate",value:function(t,e){return!!this.tokenStorage.getToken()||(this.router.navigate(["/login"],{queryParams:{returnUrl:e.url}}),!1)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.LFG(s.F0),r.LFG(o.i))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();