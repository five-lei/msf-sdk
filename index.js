
var application = require("application");
 
module.exports = {
    
	initAliSDK: function(context){
		try{
			var push = new com.yzt.taosdk.AliSdk();
			console.log(context);
			push.init(context);
		}catch(e){
			console.log(e);
		}
	},
	
	sign: function(activity, outerId, orderIds, tpid, serviceType, requestCode){
		try{
			var sdk = new com.yzt.taosdk.AliSdk();
			
			sdk.sign(activity, outerId, orderIds, tpid, serviceType, requestCode);
		}catch(e){
			console.log(e);
		}
	}
};
