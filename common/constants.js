
module.exports = {
	LCL : {
		domain : ".yoox.lcl",
		url : "www.yoox.lcl",
		securePrefix : "",
		timeout : 5000,
		abtest : {
			name : "ABTEST",
			value : {
				AbTests:[
					{
						Name: "R16",
						Mode: "Manual",
						Enabled: "on",
						Threshold: ""
					}
				],
				Reloaded: false,
				ReloadedTime: null
			}
		}
	},
	INTEG_STAGE : {
		domain : ".yooxintegration.stage.yoox.net",
		url : "yooxintegration.stage.yoox.net",
		securePrefix : "",
		timeout : 5000,
		abtest : {
			name : "ABTEST",
			value : {
				AbTests:[
					{
						Name: "R16",
						Mode: "Manual",
						Enabled: "on",
						Threshold: ""
					}
				],
				Reloaded: false,
				ReloadedTime: null
			}
		}
	},
	STAGE : {
		domain : ".stageyoox.yoox.biz",
		url : "stageyoox.yoox.biz",
		securePrefix : "secure.",
		timeout : 5000,
		abtest : {
			name : "ABTEST",
			value : {
				AbTests:[
					{
						Name: "R16",
						Mode: "Manual",
						Enabled: "on",
						Threshold: ""
					}
				],
				Reloaded: false,
				ReloadedTime: null
			}
		}
	}
	
};