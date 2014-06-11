;
(function (window) {
	var d, i, c, clickHandler,url=window.location.href;
	var isIE = (document.all && window.ActiveXObject && !window.opera) ? true : false;
	var body = document.body||document.getElementsByTagName("body")[0];
	if (window.qr) {
		return false;
	}

	clickHandler = function () {
		d.parentNode && body.removeChild(d);
		if (isIE) {
			c.detachEvent('click',clickHandler);
		}else{
			c.removeEventListener('click', clickHandler);
		}
		qr = d = i = c = null;
	}

	i = document.createElement('iframe');
	i.setAttribute('width', '470');
	i.setAttribute('height', '460');
	i.setAttribute('autofocus', 'autofocus');
	i.style.cssText = [
		''
		, 'border:none'
		, 'position:absolute'
		, 'z-index:999999'
		, 'background-color:#fff'
		, 'left:0'
		, 'top:0'
		, ''
	].join(';');

	i.src = 'http://192.168.112.94:7000/htmls/qr.html?url='+url;
	i.onload = function () {
		i.focus();
	};

	c = document.createElement('div');
	c.innerHTML = '&#x5173;&#x95ED'; //关闭
	c.style.cssText = [
		 ''
		, 'width:40px'
		, 'box-shadow:0 1px 4px #999'
		, 'position:absolute'
		, 'top:0'
		, 'left:-40px'
		, 'line-height:26px'
		, 'padding:0'
		, 'margin:0'
		, 'border-radius:0'
		, 'border:none'
		, 'background:#f6f6f6'
		, 'z-index:99999'
		, 'text-align:center'
		, 'color:#aaa'
		, 'cursor:pointer'
		, 'font-size:12px'
		, ''
	].join(';');
	if (isIE) {
		c.attachEvent("onclick",clickHandler);
	}else{
		c.addEventListener('click', clickHandler);
	}

	d = document.createElement('div');
	d.style.cssText = [
		 ''
		 , 'width:470px'
		 , 'height:460px'
		 , 'box-shadow:0 1px 4px #999'
		 , 'position:fixed'
		 , 'top:0'
		 , 'right:0'
		 , 'z-index:1000000'
		 , 'font-family:arial,sans-serif'
		 , 'padding:0'
		 , 'margin:0'
		 , 'border-radius:0'
		 , 'background:#515151'
		 , ''
	].join(';');
	d.appendChild(c);
	d.appendChild(i);
	body.appendChild(d);
	window.qr = d;
})(window);