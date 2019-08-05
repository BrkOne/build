Tea.context(function () {
	this.certFilename = "";
	this.certFile = null;

	this.keyFilename = "";
	this.keyFile = null;
	this.isLocal = false;

	this.changeCertFile = function (e) {
		if (e.target.files.length == 0) {
			this.certFilename = "";
			this.certFile = null;
		} else {
			this.certFilename = e.target.files[0].name;
			this.certFile = e.target.files[0];
		}
	};

	this.changeKeyFile = function (e) {
		if (e.target.files.length == 0) {
			this.keyFilename = "";
			this.keyFile = null;
		} else {
			this.keyFilename = e.target.files[0].name;
			this.keyFile = e.target.files[0];
		}
	};

	/**
	 * 提交成功
	 */
	this.submitSuccess = function () {
		alert("保存成功");
		window.location = "/proxy/certs";
	};

	/**
	 * 高级设置
	 */
	this.advancedOptionsVisible = false;

	this.showAdvancedOptions = function () {
		this.advancedOptionsVisible = !this.advancedOptionsVisible;
	};
});