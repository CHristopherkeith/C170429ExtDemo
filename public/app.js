Ext.onReady(function(){

	

	// var config={

	// 	title:'case01',
	// 	msg:'<font color=red>myconfig</font>'

	// }

	// console.log(Ext.window.Window)

	// console.log(Ext.window.MessageBox)


	// Ext.Msg.show(config);

	// ////////////////////////////////////

	// Ext.Msg.alert('helloworl','hellowext',function(xx){

	// 	alert(xx)

	// });

	// ////////////////////////////////////

	// Ext.Msg.confirm('helloworl','hellowext',function(xx){

	// 	alert(xx)

	// });

	// ////////////////////////////////////

	// Ext.Msg.wait('pls wait','a long time',{

	// 	text:'texttext'

	// });

	// ////////////////////////////////////

	// var msgBox = Ext.MessageBox.show({
	// 	title:'提示',
	// 	msg:'动态跟新的信息文字',
	// 	modal:true,
	// 	buttons:Ext.Msg.OK,
	// 	fn:function(){
	// 		//停止定时任务
	// 		Ext.TaskManager.stop(task);
	// 	}
	// })
	// //Ext.TaskManager是一个功能类，用来定时执行程序，
	// //在这里我们使用它来定时触发提示信息的更新。
	// var task = {
	// 	run:function(){
	// 		msgBox.updateText('会动的时间：'+Ext.util.Format.date(new Date(),'Y-m-d g:i:s A'));
	// 	},
	// 	interval:1000
	// }
	// Ext.TaskManager.start(task);

	// ////////////////////////////////////

	var msgBox = Ext.MessageBox.show({
		title:'提示',
		msg:'动态跟新的进度条和信息文字',
		modal:true,
		width:300,
		progress:true
	})

	var count = 0;//滚动条被刷新的次数
	var percentage = 0;//进度百分比
	var progressText = '';//进度条信息

	var task = {
		run:function(){
			count++;
			//计算进度
			percentage = count/10;
			//生成进度条文字
			progressText = '当前完成度：'+percentage*100 + "%";
			//更新信息提示对话框
			msgBox.updateProgress(percentage,progressText,
				'当前时间：'+Ext.util.Format.date(new Date(),'Y-m-d g:i:s A'));
			//刷新10次后关闭信息提示对话框
			if(count > 10){
				Ext.TaskManager.stop(task);
				msgBox.hide();
			}
			
		},
		interval:1000
	}

	Ext.TaskManager.start(task);

	// ////////////////////////////////////
	
})
