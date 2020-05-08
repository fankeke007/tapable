const {SyncHook}=require('../index.js')
const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);
hook1.tap({name:'event1',stage:2},(args)=>console.log('event1',args))
hook1.tap({name:'event2',before:'event1'},()=>console.log('event2'))
hook1.tap({name:'event3',stage:1},()=>console.log('event3'))
hook1.call([1,2,3]);