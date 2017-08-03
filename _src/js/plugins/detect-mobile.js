function isMobile()
	{
		var userAgent = navigator.userAgent.toLowerCase();
		if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
			return true;
	}