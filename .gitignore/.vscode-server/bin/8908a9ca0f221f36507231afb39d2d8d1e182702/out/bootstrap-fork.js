"use strict";const performance=require("./vs/base/common/performance");performance.mark("code/fork/start");const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),!!process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),require("./bootstrap-amd").load(process.env.VSCODE_AMD_ENTRYPOINT);function pipeLoggingToParent(){const s=1024*1024,l=1e5;function u(e){const t=[],c=[];if(e.length)for(let n=0;n<e.length;n++){let r=e[n];if(typeof r=="undefined")r="undefined";else if(r instanceof Error){const o=r;o.stack?r=o.stack:r=o.toString()}c.push(r)}if(process.env.VSCODE_LOG_STACK==="true"){const n=new Error().stack;n&&c.push({__$stack:n.split(`
`).slice(3).join(`
`)})}try{const n=JSON.stringify(c,function(r,o){if(d(o)||Array.isArray(o)){if(t.indexOf(o)!==-1)return"[Circular]";t.push(o)}return o});return n.length>l?"Output omitted for a large object that exceeds the limits":n}catch(n){return`Output omitted for an object that cannot be inspected ('${n.toString()}')`}}function O(e){try{process.send&&process.send(e)}catch{}}function d(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function p(e,t){O({type:"__$console",severity:e,arguments:t})}let a=!1;function i(e,t){if(process.env.VSCODE_LOG_NATIVE==="true"){const c=console[e],n=e==="error"||e==="warn"?process.stderr:process.stdout;Object.defineProperty(console,e,{set:()=>{},get:()=>function(){p(t,u(arguments)),a=!0,n.write(`
START_NATIVE_LOG
`),c.apply(console,arguments),n.write(`
END_NATIVE_LOG
`),a=!1}})}else Object.defineProperty(console,e,{set:()=>{},get:()=>function(){p(t,u(arguments))}})}function _(e,t){const c=process[e],n=c.write;let r="";Object.defineProperty(c,"write",{set:()=>{},get:()=>(o,E,g)=>{if(!a){r+=o.toString(E);const f=r.length>s?r.length:r.lastIndexOf(`
`);f!==-1&&(console[t](r.slice(0,f)),r=r.slice(f+1))}n.call(c,o,E,g)}})}process.env.VSCODE_VERBOSE_LOGGING==="true"?(i("info","log"),i("log","log"),i("warn","warn"),i("error","error")):process.env.VSCODE_LOG_NATIVE!=="true"&&(console.log=function(){},console.warn=function(){},console.info=function(){},i("error","error")),_("stderr","error"),_("stdout","log")}function handleExceptions(){process.on("uncaughtException",function(s){console.error("Uncaught Exception: ",s)}),process.on("unhandledRejection",function(s){console.error("Unhandled Promise Rejection: ",s)})}function terminateWhenParentTerminates(){const s=Number(process.env.VSCODE_PARENT_PID);typeof s=="number"&&!isNaN(s)&&setInterval(function(){try{process.kill(s,0)}catch{process.exit()}},5e3)}

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8908a9ca0f221f36507231afb39d2d8d1e182702/core/bootstrap-fork.js.map
