"use strict";
var xe=Object.create,q=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Ce=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var $e=e=>q(e,"__esModule",{value:!0});var v=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Te=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Se(t))!Oe.call(e,r)&&r!=="default"&&q(e,r,{get:()=>t[r],enumerable:!(i=Ee(t,r))||i.enumerable});return e},P=e=>Te($e(q(e!=null?xe(Ce(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var j=v(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.toCommandValue=void 0;function Pe(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}A.toCommandValue=Pe});var z=v(p=>{"use strict";var Ae=p&&p.__createBinding||(Object.create?function(e,t,i,r){r===void 0&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){r===void 0&&(r=i),e[r]=t[i]}),je=p&&p.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ie=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)i!=="default"&&Object.hasOwnProperty.call(e,i)&&Ae(t,e,i);return je(t,e),t};Object.defineProperty(p,"__esModule",{value:!0});p.issue=p.issueCommand=void 0;var Ne=Ie(require("os")),L=j();function B(e,t,i){let r=new G(e,t,i);process.stdout.write(r.toString()+Ne.EOL)}p.issueCommand=B;function De(e,t=""){B(e,{},t)}p.issue=De;var H="::",G=class{constructor(t,i,r){t||(t="missing.command"),this.command=t,this.properties=i,this.message=r}toString(){let t=H+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let i=!0;for(let r in this.properties)if(this.properties.hasOwnProperty(r)){let n=this.properties[r];n&&(i?i=!1:t+=",",t+=`${r}=${Fe(n)}`)}}return t+=`${H}${ke(this.message)}`,t}};function ke(e){return L.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Fe(e){return L.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var J=v(w=>{"use strict";var qe=w&&w.__createBinding||(Object.create?function(e,t,i,r){r===void 0&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){r===void 0&&(r=i),e[r]=t[i]}),We=w&&w.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Q=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)i!=="default"&&Object.hasOwnProperty.call(e,i)&&qe(t,e,i);return We(t,e),t};Object.defineProperty(w,"__esModule",{value:!0});w.issueCommand=void 0;var X=Q(require("fs")),Me=Q(require("os")),Re=j();function Ue(e,t){let i=process.env[`GITHUB_${e}`];if(!i)throw new Error(`Unable to find environment variable for file command ${e}`);if(!X.existsSync(i))throw new Error(`Missing file at path: ${i}`);X.appendFileSync(i,`${Re.toCommandValue(t)}${Me.EOL}`,{encoding:"utf8"})}w.issueCommand=Ue});var ne=v(l=>{"use strict";var Ve=l&&l.__createBinding||(Object.create?function(e,t,i,r){r===void 0&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){r===void 0&&(r=i),e[r]=t[i]}),Le=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Y=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)i!=="default"&&Object.hasOwnProperty.call(e,i)&&Ve(t,e,i);return Le(t,e),t},Be=l&&l.__awaiter||function(e,t,i,r){function n(s){return s instanceof i?s:new i(function(o){o(s)})}return new(i||(i=Promise))(function(s,o){function d(u){try{c(r.next(u))}catch(b){o(b)}}function h(u){try{c(r.throw(u))}catch(b){o(b)}}function c(u){u.done?s(u.value):n(u.value).then(d,h)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});l.getState=l.saveState=l.group=l.endGroup=l.startGroup=l.info=l.warning=l.error=l.debug=l.isDebug=l.setFailed=l.setCommandEcho=l.setOutput=l.getBooleanInput=l.getInput=l.addPath=l.setSecret=l.exportVariable=l.ExitCode=void 0;var y=z(),Z=J(),He=j(),I=Y(require("os")),Ge=Y(require("path")),K;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(K=l.ExitCode||(l.ExitCode={}));function ze(e,t){let i=He.toCommandValue(t);if(process.env[e]=i,process.env.GITHUB_ENV||""){let n="_GitHubActionsFileCommandDelimeter_",s=`${e}<<${n}${I.EOL}${i}${I.EOL}${n}`;Z.issueCommand("ENV",s)}else y.issueCommand("set-env",{name:e},i)}l.exportVariable=ze;function Qe(e){y.issueCommand("add-mask",{},e)}l.setSecret=Qe;function Xe(e){process.env.GITHUB_PATH||""?Z.issueCommand("PATH",e):y.issueCommand("add-path",{},e),process.env.PATH=`${e}${Ge.delimiter}${process.env.PATH}`}l.addPath=Xe;function ee(e,t){let i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i)throw new Error(`Input required and not supplied: ${e}`);return t&&t.trimWhitespace===!1?i:i.trim()}l.getInput=ee;function Je(e,t){let i=["true","True","TRUE"],r=["false","False","FALSE"],n=ee(e,t);if(i.includes(n))return!0;if(r.includes(n))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}l.getBooleanInput=Je;function Ye(e,t){process.stdout.write(I.EOL),y.issueCommand("set-output",{name:e},t)}l.setOutput=Ye;function Ze(e){y.issue("echo",e?"on":"off")}l.setCommandEcho=Ze;function Ke(e){process.exitCode=K.Failure,te(e)}l.setFailed=Ke;function et(){return process.env.RUNNER_DEBUG==="1"}l.isDebug=et;function tt(e){y.issueCommand("debug",{},e)}l.debug=tt;function te(e){y.issue("error",e instanceof Error?e.toString():e)}l.error=te;function it(e){y.issue("warning",e instanceof Error?e.toString():e)}l.warning=it;function rt(e){process.stdout.write(e+I.EOL)}l.info=rt;function ie(e){y.issue("group",e)}l.startGroup=ie;function re(){y.issue("endgroup")}l.endGroup=re;function nt(e,t){return Be(this,void 0,void 0,function*(){ie(e);let i;try{i=yield t()}finally{re()}return i})}l.group=nt;function st(e,t){y.issueCommand("save-state",{name:e},t)}l.saveState=st;function ot(e){return process.env[`STATE_${e}`]||""}l.getState=ot});var W=v(a=>{"use strict";var N=a&&a.__awaiter||function(e,t,i,r){function n(s){return s instanceof i?s:new i(function(o){o(s)})}return new(i||(i=Promise))(function(s,o){function d(u){try{c(r.next(u))}catch(b){o(b)}}function h(u){try{c(r.throw(u))}catch(b){o(b)}}function c(u){u.done?s(u.value):n(u.value).then(d,h)}c((r=r.apply(e,t||[])).next())})},se=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t},m;Object.defineProperty(a,"__esModule",{value:!0});var lt=require("assert"),ut=se(require("fs")),C=se(require("path"));m=ut.promises,a.chmod=m.chmod,a.copyFile=m.copyFile,a.lstat=m.lstat,a.mkdir=m.mkdir,a.readdir=m.readdir,a.readlink=m.readlink,a.rename=m.rename,a.rmdir=m.rmdir,a.stat=m.stat,a.symlink=m.symlink,a.unlink=m.unlink;a.IS_WINDOWS=process.platform==="win32";function ct(e){return N(this,void 0,void 0,function*(){try{yield a.stat(e)}catch(t){if(t.code==="ENOENT")return!1;throw t}return!0})}a.exists=ct;function at(e,t=!1){return N(this,void 0,void 0,function*(){return(t?yield a.stat(e):yield a.lstat(e)).isDirectory()})}a.isDirectory=at;function ft(e){if(e=bt(e),!e)throw new Error('isRooted() parameter "p" cannot be empty');return a.IS_WINDOWS?e.startsWith("\\")||/^[A-Z]:/i.test(e):e.startsWith("/")}a.isRooted=ft;function oe(e,t=1e3,i=1){return N(this,void 0,void 0,function*(){if(lt.ok(e,"a path argument must be provided"),e=C.resolve(e),i>=t)return a.mkdir(e);try{yield a.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield oe(C.dirname(e),t,i+1),yield a.mkdir(e);return}default:{let n;try{n=yield a.stat(e)}catch(s){throw r}if(!n.isDirectory())throw r}}}})}a.mkdirP=oe;function dt(e,t){return N(this,void 0,void 0,function*(){let i;try{i=yield a.stat(e)}catch(n){n.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${n}`)}if(i&&i.isFile()){if(a.IS_WINDOWS){let n=C.extname(e).toUpperCase();if(t.some(s=>s.toUpperCase()===n))return e}else if(le(i))return e}let r=e;for(let n of t){e=r+n,i=void 0;try{i=yield a.stat(e)}catch(s){s.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${s}`)}if(i&&i.isFile()){if(a.IS_WINDOWS){try{let s=C.dirname(e),o=C.basename(e).toUpperCase();for(let d of yield a.readdir(s))if(o===d.toUpperCase()){e=C.join(s,d);break}}catch(s){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${s}`)}return e}else if(le(i))return e}}return""})}a.tryGetExecutablePath=dt;function bt(e){return e=e||"",a.IS_WINDOWS?(e=e.replace(/\//g,"\\"),e.replace(/\\\\+/g,"\\")):e.replace(/\/\/+/g,"/")}function le(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}});var be=v(g=>{"use strict";var x=g&&g.__awaiter||function(e,t,i,r){function n(s){return s instanceof i?s:new i(function(o){o(s)})}return new(i||(i=Promise))(function(s,o){function d(u){try{c(r.next(u))}catch(b){o(b)}}function h(u){try{c(r.throw(u))}catch(b){o(b)}}function c(u){u.done?s(u.value):n(u.value).then(d,h)}c((r=r.apply(e,t||[])).next())})},M=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(g,"__esModule",{value:!0});var ht=M(require("child_process")),_=M(require("path")),pt=require("util"),f=M(W()),R=pt.promisify(ht.exec);function mt(e,t,i={}){return x(this,void 0,void 0,function*(){let{force:r,recursive:n}=yt(i),s=(yield f.exists(t))?yield f.stat(t):null;if(s&&s.isFile()&&!r)return;let o=s&&s.isDirectory()?_.join(t,_.basename(e)):t;if(!(yield f.exists(e)))throw new Error(`no such file or directory: ${e}`);if((yield f.stat(e)).isDirectory())if(n)yield fe(e,o,0,r);else throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);else{if(_.relative(e,o)==="")throw new Error(`'${o}' and '${e}' are the same file`);yield de(e,o,r)}})}g.cp=mt;function gt(e,t,i={}){return x(this,void 0,void 0,function*(){if(yield f.exists(t)){let r=!0;if((yield f.isDirectory(t))&&(t=_.join(t,_.basename(e)),r=yield f.exists(t)),r)if(i.force==null||i.force)yield ue(t);else throw new Error("Destination already exists")}yield U(_.dirname(t)),yield f.rename(e,t)})}g.mv=gt;function ue(e){return x(this,void 0,void 0,function*(){if(f.IS_WINDOWS){try{(yield f.isDirectory(e,!0))?yield R(`rd /s /q "${e}"`):yield R(`del /f /a "${e}"`)}catch(t){if(t.code!=="ENOENT")throw t}try{yield f.unlink(e)}catch(t){if(t.code!=="ENOENT")throw t}}else{let t=!1;try{t=yield f.isDirectory(e)}catch(i){if(i.code!=="ENOENT")throw i;return}t?yield R(`rm -rf "${e}"`):yield f.unlink(e)}})}g.rmRF=ue;function U(e){return x(this,void 0,void 0,function*(){yield f.mkdirP(e)})}g.mkdirP=U;function ce(e,t){return x(this,void 0,void 0,function*(){if(!e)throw new Error("parameter 'tool' is required");if(t){let r=yield ce(e,!1);if(!r)throw f.IS_WINDOWS?new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`):new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);return r}let i=yield ae(e);return i&&i.length>0?i[0]:""})}g.which=ce;function ae(e){return x(this,void 0,void 0,function*(){if(!e)throw new Error("parameter 'tool' is required");let t=[];if(f.IS_WINDOWS&&process.env.PATHEXT)for(let n of process.env.PATHEXT.split(_.delimiter))n&&t.push(n);if(f.isRooted(e)){let n=yield f.tryGetExecutablePath(e,t);return n?[n]:[]}if(e.includes(_.sep))return[];let i=[];if(process.env.PATH)for(let n of process.env.PATH.split(_.delimiter))n&&i.push(n);let r=[];for(let n of i){let s=yield f.tryGetExecutablePath(_.join(n,e),t);s&&r.push(s)}return r})}g.findInPath=ae;function yt(e){let t=e.force==null?!0:e.force,i=Boolean(e.recursive);return{force:t,recursive:i}}function fe(e,t,i,r){return x(this,void 0,void 0,function*(){if(i>=255)return;i++,yield U(t);let n=yield f.readdir(e);for(let s of n){let o=`${e}/${s}`,d=`${t}/${s}`;(yield f.lstat(o)).isDirectory()?yield fe(o,d,i,r):yield de(o,d,r)}yield f.chmod(t,(yield f.stat(e)).mode)})}function de(e,t,i){return x(this,void 0,void 0,function*(){if((yield f.lstat(e)).isSymbolicLink()){try{yield f.lstat(t),yield f.unlink(t)}catch(n){n.code==="EPERM"&&(yield f.chmod(t,"0666"),yield f.unlink(t))}let r=yield f.readlink(e);yield f.symlink(r,t,f.IS_WINDOWS?"junction":null)}else(!(yield f.exists(t))||i)&&(yield f.copyFile(e,t))})}});var me=v(E=>{"use strict";var wt=E&&E.__awaiter||function(e,t,i,r){function n(s){return s instanceof i?s:new i(function(o){o(s)})}return new(i||(i=Promise))(function(s,o){function d(u){try{c(r.next(u))}catch(b){o(b)}}function h(u){try{c(r.throw(u))}catch(b){o(b)}}function c(u){u.done?s(u.value):n(u.value).then(d,h)}c((r=r.apply(e,t||[])).next())})},O=E&&E.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(E,"__esModule",{value:!0});var D=O(require("os")),he=O(require("events")),_t=O(require("child_process")),vt=O(require("path")),xt=O(be()),Et=O(W()),k=process.platform==="win32",pe=class extends he.EventEmitter{constructor(t,i,r){super();if(!t)throw new Error("Parameter 'toolPath' cannot be null or empty.");this.toolPath=t,this.args=i||[],this.options=r||{}}_debug(t){this.options.listeners&&this.options.listeners.debug&&this.options.listeners.debug(t)}_getCommandString(t,i){let r=this._getSpawnFileName(),n=this._getSpawnArgs(t),s=i?"":"[command]";if(k)if(this._isCmdFile()){s+=r;for(let o of n)s+=` ${o}`}else if(t.windowsVerbatimArguments){s+=`"${r}"`;for(let o of n)s+=` ${o}`}else{s+=this._windowsQuoteCmdArg(r);for(let o of n)s+=` ${this._windowsQuoteCmdArg(o)}`}else{s+=r;for(let o of n)s+=` ${o}`}return s}_processLineBuffer(t,i,r){try{let n=i+t.toString(),s=n.indexOf(D.EOL);for(;s>-1;){let o=n.substring(0,s);r(o),n=n.substring(s+D.EOL.length),s=n.indexOf(D.EOL)}i=n}catch(n){this._debug(`error processing line. Failed with error ${n}`)}}_getSpawnFileName(){return k&&this._isCmdFile()?process.env.COMSPEC||"cmd.exe":this.toolPath}_getSpawnArgs(t){if(k&&this._isCmdFile()){let i=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(let r of this.args)i+=" ",i+=t.windowsVerbatimArguments?r:this._windowsQuoteCmdArg(r);return i+='"',[i]}return this.args}_endsWith(t,i){return t.endsWith(i)}_isCmdFile(){let t=this.toolPath.toUpperCase();return this._endsWith(t,".CMD")||this._endsWith(t,".BAT")}_windowsQuoteCmdArg(t){if(!this._isCmdFile())return this._uvQuoteCmdArg(t);if(!t)return'""';let i=[" ","	","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'],r=!1;for(let o of t)if(i.some(d=>d===o)){r=!0;break}if(!r)return t;let n='"',s=!0;for(let o=t.length;o>0;o--)n+=t[o-1],s&&t[o-1]==="\\"?n+="\\":t[o-1]==='"'?(s=!0,n+='"'):s=!1;return n+='"',n.split("").reverse().join("")}_uvQuoteCmdArg(t){if(!t)return'""';if(!t.includes(" ")&&!t.includes("	")&&!t.includes('"'))return t;if(!t.includes('"')&&!t.includes("\\"))return`"${t}"`;let i='"',r=!0;for(let n=t.length;n>0;n--)i+=t[n-1],r&&t[n-1]==="\\"?i+="\\":t[n-1]==='"'?(r=!0,i+="\\"):r=!1;return i+='"',i.split("").reverse().join("")}_cloneExecOptions(t){t=t||{};let i={cwd:t.cwd||process.cwd(),env:t.env||process.env,silent:t.silent||!1,windowsVerbatimArguments:t.windowsVerbatimArguments||!1,failOnStdErr:t.failOnStdErr||!1,ignoreReturnCode:t.ignoreReturnCode||!1,delay:t.delay||1e4};return i.outStream=t.outStream||process.stdout,i.errStream=t.errStream||process.stderr,i}_getSpawnOptions(t,i){t=t||{};let r={};return r.cwd=t.cwd,r.env=t.env,r.windowsVerbatimArguments=t.windowsVerbatimArguments||this._isCmdFile(),t.windowsVerbatimArguments&&(r.argv0=`"${i}"`),r}exec(){return wt(this,void 0,void 0,function*(){return!Et.isRooted(this.toolPath)&&(this.toolPath.includes("/")||k&&this.toolPath.includes("\\"))&&(this.toolPath=vt.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)),this.toolPath=yield xt.which(this.toolPath,!0),new Promise((t,i)=>{this._debug(`exec tool: ${this.toolPath}`),this._debug("arguments:");for(let c of this.args)this._debug(`   ${c}`);let r=this._cloneExecOptions(this.options);!r.silent&&r.outStream&&r.outStream.write(this._getCommandString(r)+D.EOL);let n=new F(r,this.toolPath);n.on("debug",c=>{this._debug(c)});let s=this._getSpawnFileName(),o=_t.spawn(s,this._getSpawnArgs(r),this._getSpawnOptions(this.options,s)),d="";o.stdout&&o.stdout.on("data",c=>{this.options.listeners&&this.options.listeners.stdout&&this.options.listeners.stdout(c),!r.silent&&r.outStream&&r.outStream.write(c),this._processLineBuffer(c,d,u=>{this.options.listeners&&this.options.listeners.stdline&&this.options.listeners.stdline(u)})});let h="";if(o.stderr&&o.stderr.on("data",c=>{n.processStderr=!0,this.options.listeners&&this.options.listeners.stderr&&this.options.listeners.stderr(c),!r.silent&&r.errStream&&r.outStream&&(r.failOnStdErr?r.errStream:r.outStream).write(c),this._processLineBuffer(c,h,u=>{this.options.listeners&&this.options.listeners.errline&&this.options.listeners.errline(u)})}),o.on("error",c=>{n.processError=c.message,n.processExited=!0,n.processClosed=!0,n.CheckComplete()}),o.on("exit",c=>{n.processExitCode=c,n.processExited=!0,this._debug(`Exit code ${c} received from tool '${this.toolPath}'`),n.CheckComplete()}),o.on("close",c=>{n.processExitCode=c,n.processExited=!0,n.processClosed=!0,this._debug(`STDIO streams have closed for tool '${this.toolPath}'`),n.CheckComplete()}),n.on("done",(c,u)=>{d.length>0&&this.emit("stdline",d),h.length>0&&this.emit("errline",h),o.removeAllListeners(),c?i(c):t(u)}),this.options.input){if(!o.stdin)throw new Error("child process missing stdin");o.stdin.end(this.options.input)}})})}};E.ToolRunner=pe;function St(e){let t=[],i=!1,r=!1,n="";function s(o){r&&o!=='"'&&(n+="\\"),n+=o,r=!1}for(let o=0;o<e.length;o++){let d=e.charAt(o);if(d==='"'){r?s(d):i=!i;continue}if(d==="\\"&&r){s(d);continue}if(d==="\\"&&i){r=!0;continue}if(d===" "&&!i){n.length>0&&(t.push(n),n="");continue}s(d)}return n.length>0&&t.push(n.trim()),t}E.argStringToArray=St;var F=class extends he.EventEmitter{constructor(t,i){super();if(this.processClosed=!1,this.processError="",this.processExitCode=0,this.processExited=!1,this.processStderr=!1,this.delay=1e4,this.done=!1,this.timeout=null,!i)throw new Error("toolPath must not be empty");this.options=t,this.toolPath=i,t.delay&&(this.delay=t.delay)}CheckComplete(){this.done||(this.processClosed?this._setResult():this.processExited&&(this.timeout=setTimeout(F.HandleTimeout,this.delay,this)))}_debug(t){this.emit("debug",t)}_setResult(){let t;this.processExited&&(this.processError?t=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`):this.processExitCode!==0&&!this.options.ignoreReturnCode?t=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`):this.processStderr&&this.options.failOnStdErr&&(t=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.done=!0,this.emit("done",t,this.processExitCode)}static HandleTimeout(t){if(!t.done){if(!t.processClosed&&t.processExited){let i=`The STDIO streams did not close within ${t.delay/1e3} seconds of the exit event from process '${t.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;t._debug(i)}t._setResult()}}}});var ye=v(S=>{"use strict";var Ct=S&&S.__awaiter||function(e,t,i,r){function n(s){return s instanceof i?s:new i(function(o){o(s)})}return new(i||(i=Promise))(function(s,o){function d(u){try{c(r.next(u))}catch(b){o(b)}}function h(u){try{c(r.throw(u))}catch(b){o(b)}}function c(u){u.done?s(u.value):n(u.value).then(d,h)}c((r=r.apply(e,t||[])).next())})},Ot=S&&S.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(S,"__esModule",{value:!0});var ge=Ot(me());function $t(e,t,i){return Ct(this,void 0,void 0,function*(){let r=ge.argStringToArray(e);if(r.length===0)throw new Error("Parameter 'commandLine' cannot be null or empty.");let n=r[0];return t=r.slice(1).concat(t||[]),new ge.ToolRunner(n,t,i).exec()})}S.exec=$t});var $=P(ne()),T=P(ye()),we=P(require("fs")),V=P(require("os")),Tt=e=>(0,$.getInput)(e).split(",").map(t=>t.trim()),Pt={"ubuntu18.04":{chromium:["fonts-liberation","libasound2","libatk-bridge2.0-0","libatk1.0-0","libatspi2.0-0","libcairo2","libcups2","libdbus-1-3","libdrm2","libgbm1","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libnspr4","libnss3","libpango-1.0-0","libpangocairo-1.0-0","libx11-6","libx11-xcb1","libxcb-dri3-0","libxcb1","libxcomposite1","libxdamage1","libxext6","libxfixes3","libxi6","libxrandr2","libxtst6"],firefox:["libatk1.0-0","libcairo-gobject2","libcairo2","libdbus-1-3","libdbus-glib-1-2","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libgtk2.0-0","libpango-1.0-0","libpangocairo-1.0-0","libpangoft2-1.0-0","libx11-6","libx11-xcb1","libxcb-shm0","libxcb1","libxcomposite1","libxcursor1","libxdamage1","libxext6","libxfixes3","libxi6","libxrender1","libxt6"],webkit:["gstreamer1.0-libav","gstreamer1.0-plugins-bad","gstreamer1.0-plugins-base","gstreamer1.0-plugins-good","libatk-bridge2.0-0","libatk1.0-0","libbrotli1","libcairo2","libegl1","libenchant1c2a","libepoxy0","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libgl1","libgles2","libglib2.0-0","libgstreamer-gl1.0-0","libgstreamer1.0-0","libgtk-3-0","libharfbuzz-icu0","libharfbuzz0b","libhyphen0","libicu60","libjpeg-turbo8","libnotify4","libopenjp2-7","libopus0","libpango-1.0-0","libpng16-16","libsecret-1-0","libvpx5","libwayland-client0","libwayland-egl1","libwayland-server0","libwebp6","libwebpdemux2","libwoff1","libx11-6","libxcomposite1","libxdamage1","libxkbcommon0","libxml2","libxslt1.1"]},"ubuntu20.04":{chromium:["fonts-liberation","libasound2","libatk-bridge2.0-0","libatk1.0-0","libatspi2.0-0","libcairo2","libcups2","libdbus-1-3","libdrm2","libgbm1","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libnspr4","libnss3","libpango-1.0-0","libpangocairo-1.0-0","libx11-6","libx11-xcb1","libxcb-dri3-0","libxcb1","libxcomposite1","libxdamage1","libxext6","libxfixes3","libxi6","libxrandr2","libxtst6"],firefox:["libatk1.0-0","libcairo-gobject2","libcairo2","libdbus-1-3","libdbus-glib-1-2","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libgtk2.0-0","libpango-1.0-0","libpangocairo-1.0-0","libpangoft2-1.0-0","libx11-6","libx11-xcb1","libxcb-shm0","libxcb1","libxcomposite1","libxcursor1","libxdamage1","libxext6","libxfixes3","libxi6","libxrender1","libxt6"],webkit:["gstreamer1.0-libav","gstreamer1.0-plugins-bad","gstreamer1.0-plugins-base","gstreamer1.0-plugins-good","libatk-bridge2.0-0","libatk1.0-0","libcairo2","libegl1","libenchant1c2a","libepoxy0","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libgl1","libgles2","libglib2.0-0","libgstreamer-gl1.0-0","libgstreamer1.0-0","libgtk-3-0","libharfbuzz-icu0","libharfbuzz0b","libhyphen0","libicu66","libjpeg-turbo8","libnotify4","libopenjp2-7","libopus0","libpango-1.0-0","libpng16-16","libsecret-1-0","libsoup2.4-1","libvpx6","libwayland-client0","libwayland-egl1","libwayland-server0","libwebp6","libwebpdemux2","libwoff1","libx11-6","libxcomposite1","libxdamage1","libxkbcommon0","libxml2","libxslt1.1"]}};async function At(){if(V.default.platform()!=="linux")return"";let e=await we.default.promises.readFile("/etc/os-release","utf8");if(!e)return"";let t=new Map;for(let i of e.split(`
`)){let r=i.split("="),n=r.shift(),s=r.join("=").trim();s.startsWith('"')&&s.endsWith('"')&&(s=s.substring(1,s.length-1)),!!n&&t.set(n.toLowerCase(),s)}return!t.get("name")||t.get("name").toLowerCase()!=="ubuntu"?"":t.get("version_id")||""}function _e(e,t){let i=[];return t.forEach(r=>{switch(r){case"chromium":case"firefox":case"webkit":i=i.concat(Pt[e][r]);break;default:throw new Error(`Unrecognised browser ${r}`)}}),i}async function ve(){try{if(V.default.platform()==="linux"){await(0,T.exec)("sudo",["apt-get","update"]);let e=await At(),t=Tt("browsers"),i=[];if(e==="18.04")i=_e("ubuntu18.04",t);else if(e==="20.04")i=_e("ubuntu20.04",t);else throw new Error("Cannot install dependencies for this linux distribution");await(0,T.exec)("sudo",["apt-get","install","-y","--no-install-recommends",...i]),t.includes("firefox")&&await(0,T.exec)("sudo",["apt-get","install","-y","ffmpeg"]),(0,$.getBooleanInput)("headless")||await(0,T.exec)("sudo",["apt-get","install","-y","xvfb"])}}catch(e){(0,$.setFailed)(e.message||e)}}ve();
