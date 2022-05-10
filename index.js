import cookie from 'cookie';

function getCookie(name) {
	const allCookies = cookie.parse(document.cookie || '');
	if (!allCookies.hasOwnProperty(name)) {
		return false;
	}
	return allCookies[name];
}

function deleteCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setCookie(cookieDate) {

	if (!cookieDate.name || !cookieDate.value) {
		return false
	}

	if (!cookieDate.options) {
		cookieDate.options = {
			path: '/',
			maxAge: 86400,
		}
	}

	document.cookie = cookie.serialize(cookieDate.name, cookieDate.value, cookieDate.options);
}

export {getCookie, setCookie, deleteCookie};
