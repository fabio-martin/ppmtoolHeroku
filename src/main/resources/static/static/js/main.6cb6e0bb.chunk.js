(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(25),s=a.n(n),o=(a(49),a(2)),i=a(3),l=a(6),d=a(5),j=(a(50),a(51),a(8)),u=a(10),p=a(4),b=a(22),h=a(43),m=a(11),O="GET_ERRORS",v="GET_PROJECTS",f="GET_PROJECT",x="DELETE_PROJECT",g="GET_BACKLOG",N="GET_PROJECT_TASK",y="DELETE_PROJECT_TASK",k="SET_CURRENT_USER",C={projectTasks:[],projectTask:{}},w={},P={projects:[],project:{}},S={user:{},validToken:!1},T=function(e){return!!e},D=Object(b.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{projects:t.payload});case f:return Object(m.a)(Object(m.a)({},e),{},{project:t.payload});case x:return Object(m.a)(Object(m.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)(Object(m.a)({},e),{},{projectTasks:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{projectTask:t.payload});case y:return Object(m.a)(Object(m.a)({},e),{},{projectTasks:e.projectTasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{validToken:T(t.payload),user:t.payload});default:return e}}}),_={},I=[h.a],E=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),R=window.navigator.userAgent.includes("Chrome")&&E?Object(b.e)(D,_,Object(b.d)(b.a.apply(void 0,I),E)):Object(b.e)(D,_,Object(b.d)(b.a.apply(void 0,I))),A=a(0),B=function(){return Object(A.jsx)(c.a.Fragment,{children:Object(A.jsx)(j.b,{to:"/addProject",className:"btn btn-lg btn-info",children:"Create a Project"})})},U=a(9),L=a.n(U),q=a(17),M=a(14),G=a.n(M),F=function(e,t){return function(){var a=Object(q.a)(L.a.mark((function a(r){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:O,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:O,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col-2",children:Object(A.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(A.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(A.jsx)("h3",{children:e.projectName}),Object(A.jsx)("p",{children:e.description})]}),Object(A.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(A.jsxs)("ul",{className:"list-group",children:[Object(A.jsx)(j.b,{to:"/projectboard/".concat(e.projectIdentifier),children:Object(A.jsx)("li",{className:"list-group-item board",children:Object(A.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" Project Board "})})}),Object(A.jsx)(j.b,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(A.jsx)("li",{className:"list-group-item update",children:Object(A.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Project Info"})})}),Object(A.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(A.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Project"})})]})})]})})})}}]),a}(r.Component),W=Object(p.b)(null,{deleteProject:function(e){return function(){var t=Object(q.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm(" Are you sure?This will delete the project and all the data in it.")){t.next=4;break}return t.next=3,G.a.delete("/api/project/".concat(e));case 3:a({type:x,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(J),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(A.jsx)("div",{className:"projects",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-12",children:[Object(A.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(A.jsx)("br",{}),Object(A.jsx)(B,{}),Object(A.jsx)("br",{}),Object(A.jsx)("hr",{}),e.map((function(e){return Object(A.jsx)(W,{project:e},e.id)}))]})})})})}}]),a}(r.Component),X=Object(p.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(q.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/api/project/all");case 2:a=e.sent,t({type:v,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(H),K=function(e){e?G.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete G.a.defaults.headers.common.Authorization},V=a(27),z=function(){return function(e){localStorage.removeItem("jwtToken"),K(!1)}},Y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=Object(A.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(A.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(j.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(j.b,{className:"nav-link",to:"/login",children:"Login"})})]})}),n=Object(A.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(A.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(j.b,{className:"nav-link",to:"/dashboard",children:"Dashboard"})})}),Object(A.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsxs)(j.b,{className:"nav-link",to:"/dashboard",children:[Object(A.jsx)("i",{className:"fas fa-user-circle mr-1"})," ",r.fullName]})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(j.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]});return e=a&&r?n:c,Object(A.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Personal Project Management Tool"}),Object(A.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(A.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(r.Component),Q=Object(p.b)((function(e){return{security:e.security}}),{logout:z})(Y),Z=a(15),$=a(12),ee=a(13),te=a.n(ee),ae=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object($.a)(e)),e.onSubmit=e.onSubmit.bind(Object($.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,c=t.projectIdentifier,n=t.description,s=t.start_date,o=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:c,description:n,start_date:s,end_date:o})}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(A.jsx)("div",{className:"project",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(A.jsx)("hr",{}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,disabled:!0,onChange:this.onChange})}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("textarea",{className:te()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(A.jsx)("h6",{children:"Start Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(A.jsx)("h6",{children:"Estimated End Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(A.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),re=Object(p.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(q.a)(L.a.mark((function a(r){var c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G.a.get("/api/project/".concat(e));case 3:c=a.sent,r({type:f,payload:c.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:F})(ae),ce=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object($.a)(e)),e.onSubmit=e.onSubmit.bind(Object($.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(A.jsx)("div",{children:Object(A.jsx)("div",{className:"register",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)("h5",{className:"display-4 text-center",children:"Create / Edit Project form"}),Object(A.jsx)("hr",{}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("textarea",{className:te()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(A.jsx)("h6",{children:"Start Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(A.jsx)("h6",{children:"Estimated End Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(A.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})}}]),a}(r.Component),ne=Object(p.b)((function(e){return{errors:e.errors}}),{createProject:F})(ce),se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.projectTask;switch(a.priority){case 1:t="bg-danger text-light",e="HIGH";break;case 2:t="bg-warning text-light",e="Medium";break;case 3:t="bg-info text-light",e="INFO"}return Object(A.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(A.jsxs)("div",{className:"card-header text-primary ".concat(t),children:["ID: ",a.projectSequence,"   Priority: ",e]}),Object(A.jsxs)("div",{className:"card-body bg-light",children:[Object(A.jsx)("h5",{className:"card-title",children:a.summary}),Object(A.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(A.jsx)(j.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(A.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(r.Component),oe=Object(p.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(q.a)(L.a.mark((function a(r){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t," this action cannot be undone"))){a.next=4;break}return a.next=3,G.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:y,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(se),ie=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.projectTasks;console.log(e);var t=e.map((function(e){return Object(A.jsx)(oe,{projectTask:e},e.id)})),a=t.filter((function(e){return"TO_DO"===e.props.projectTask.status})),r=t.filter((function(e){return"IN_PROGRESS"===e.props.projectTask.status})),c=t.filter((function(e){return"DONE"===e.props.projectTask.status}));return Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{className:"col-md-4",children:[Object(A.jsx)("div",{className:"card text-center mb-2",children:Object(A.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(A.jsx)("h3",{children:"TO DO"})})}),a]}),Object(A.jsxs)("div",{className:"col-md-4",children:[Object(A.jsx)("div",{className:"card text-center mb-2",children:Object(A.jsx)("div",{className:"card-header bg-primary text-white",children:Object(A.jsx)("h3",{children:"In Progress"})})}),r]}),Object(A.jsxs)("div",{className:"col-md-4",children:[Object(A.jsx)("div",{className:"card text-center mb-2",children:Object(A.jsx)("div",{className:"card-header bg-success text-white",children:Object(A.jsx)("h3",{children:"Done"})})}),c]})]})})}}]),a}(r.Component),le=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBackLog(e)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.backlog.projectTasks,a=function(e,t){return t.length<1?e.projectNotFound?Object(A.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectNotFound}):e.projectIdentifier?Object(A.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectIdentifier}):Object(A.jsx)("div",{className:"alert alert-info text-center",role:"alert",children:"No Project Tasks on this board"}):Object(A.jsx)(ie,{projectTasks:t})}(this.state.errors,t);return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(j.b,{to:"/addProjectTask/".concat(e),className:"btn btn-primary mb-3",children:Object(A.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(A.jsx)("br",{}),Object(A.jsx)("hr",{}),a]})}}]),a}(r.Component),de=Object(p.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBackLog:function(e){return function(){var t=Object(q.a)(L.a.mark((function t(a){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:g,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(le),je=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={summary:r.state.summary,acceptanceCriteria:r.state.acceptanceCriteria,status:r.state.status,priority:r.state.priority,dueDate:r.state.dueDate};console.log(t),r.props.addProjectTask(r.state.projectIdentifier,t,r.props.history)};var c=r.props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object($.a)(r)),r.onSubmit=r.onSubmit.bind(Object($.a)(r)),r}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return console.log(t),Object(A.jsx)("div",{className:"add-PBI",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)(j.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(A.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(A.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(A.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(A.jsx)("h6",{children:"Due Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)("select",{className:"form-control form-control-lg",name:"priority",onChange:this.onChange,children:[Object(A.jsx)("option",{value:0,children:"Select Priority"}),Object(A.jsx)("option",{value:1,children:"High"}),Object(A.jsx)("option",{value:2,children:"Medium"}),Object(A.jsx)("option",{value:3,children:"Low"})]})}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)("select",{className:"form-control form-control-lg",name:"status",onChange:this.onChange,children:[Object(A.jsx)("option",{value:"",children:"Select Status"}),Object(A.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(A.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(A.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(A.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),ue=Object(p.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(q.a)(L.a.mark((function r(c){return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,G.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),c({type:O,payload:{}}),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("FOUND some error!!"),c({type:O,payload:r.t0.response.data});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(je),pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectSequence:e.state.projectSequence,summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate,projectIdentifier:e.state.projectIdentifier,created_at:e.state.created_at};e.props.updateProjectTask(e.state.projectIdentifier,e.state.projectSequence,a,e.props.history)},e.state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",created_at:"",errors:{}},e.onChange=e.onChange.bind(Object($.a)(e)),e.onSubmit=e.onSubmit.bind(Object($.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){var t={};e.errors&&(t=e.errors);var a=e.projectTask,r=a.id,c=a.projectSequence,n=a.summary,s=a.acceptanceCriteria,o=a.status,i=a.priority,l=a.dueDate,d=a.projectIdentifier,j=a.created_at;this.setState({id:r,projectSequence:c,summary:n,acceptanceCriteria:s,status:o,priority:i,dueDate:l,projectIdentifier:d,created_at:j,errors:t})}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return Object(A.jsx)("div",{className:"add-PBI",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)(j.b,{to:"/projectboard/".concat(this.state.projectIdentifier),className:"btn btn-light",children:"Back to Project Board"}),Object(A.jsx)("h4",{className:"display-4 text-center",children:"Add /Update Project Task"}),Object(A.jsxs)("p",{className:"lead text-center",children:["Project Name: ",this.state.projectIdentifier," /  Project Task ID:",this.state.projectSequence]}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange})}),e.summary&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.summary}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(A.jsx)("h6",{children:"Due Date"}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate.split("T")[0],onChange:this.onChange})}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(A.jsx)("option",{value:0,children:"Select Priority"}),Object(A.jsx)("option",{value:1,children:"High"}),Object(A.jsx)("option",{value:2,children:"Medium"}),Object(A.jsx)("option",{value:3,children:"Low"})]})}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(A.jsx)("option",{value:"",children:"Select Status"}),Object(A.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(A.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(A.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(A.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),be=Object(p.b)((function(e){return{projectTask:e.backlog.projectTask,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(q.a)(L.a.mark((function r(c){var n;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,G.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:n=r.sent,c({type:N,payload:n.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var c=Object(q.a)(L.a.mark((function c(n){return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,G.a.put("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),n({type:O,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:O,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}})(pe),he=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(A.jsx)("div",{className:"landing",children:Object(A.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-12 text-center",children:[Object(A.jsx)("h1",{className:"display-3 mb-4",children:"Personal Project Management Tool"}),Object(A.jsx)("p",{className:"lead",children:"Create your account to join active projects or start your own"}),Object(A.jsx)("hr",{}),Object(A.jsx)(j.b,{className:"btn btn-lg btn-primary mr-2",to:"/register",children:"Sign Up"}),Object(A.jsx)(j.b,{className:"btn btn-lg btn-secondary mr-2",to:"/login",children:"Login"})]})})})})})}}]),a}(r.Component),me=Object(p.b)((function(e){return{security:e.security}}))(he),Oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object($.a)(e)),e.onSubmit=e.onSubmit.bind(Object($.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(A.jsx)("div",{className:"register",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(A.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.fullName})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"password",className:te()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"password",className:te()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(A.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),ve=Object(p.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(q.a)(L.a.mark((function a(r){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:O,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:O,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(Oe),fe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object($.a)(e)),e.onSubmit=e.onSubmit.bind(Object($.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.security.validToken&&this.props.history.push("/dashboard")}},{key:"onChange",value:function(e){this.setState(Object(Z.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(A.jsx)("div",{className:"login",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(A.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(A.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"text",className:te()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("input",{type:"password",className:te()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(A.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(A.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),xe=Object(p.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(q.a)(L.a.mark((function t(a){var r,c,n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.post("/api/users/login",e);case 3:r=t.sent,c=r.data.token,localStorage.setItem("jwtToken",c),K(c),n=Object(V.a)(c),a({type:k,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(fe),ge=a(44),Ne=Object(p.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(ge.a)(e,["component","security"]);return Object(A.jsx)(u.b,Object(m.a)(Object(m.a)({},r),{},{render:function(e){return!0===a.validToken?Object(A.jsx)(t,Object(m.a)({},e)):Object(A.jsx)(u.a,{to:"/login"})}}))})),ye=localStorage.jwtToken;if(ye){K(ye);var ke=Object(V.a)(ye);R.dispatch({type:k,payload:ke});var Ce=Date.now()/1e3;ke.exp<Ce&&(R.dispatch(z()),window.location.href="/")}var we=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(A.jsx)(p.a,{store:R,children:Object(A.jsx)(j.a,{children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Q,{}),Object(A.jsx)(u.b,{exact:!0,path:"/",component:me}),Object(A.jsx)(u.b,{exact:!0,path:"/register",component:ve}),Object(A.jsx)(u.b,{exact:!0,path:"/login",component:xe}),Object(A.jsxs)(u.d,{children:[Object(A.jsx)(Ne,{exact:!0,path:"/dashboard",component:X}),Object(A.jsx)(Ne,{exact:!0,path:"/addProject",component:ne}),Object(A.jsx)(Ne,{exact:!0,path:"/updateProject/:id",component:re}),Object(A.jsx)(Ne,{exact:!0,path:"/projectboard/:id",component:de}),Object(A.jsx)(Ne,{exact:!0,path:"/addProjectTask/:id",component:ue}),Object(A.jsx)(Ne,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:be})]})]})})})}}]),a}(r.Component),Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(we,{})}),document.getElementById("root")),Pe()}},[[77,1,2]]]);
//# sourceMappingURL=main.6cb6e0bb.chunk.js.map