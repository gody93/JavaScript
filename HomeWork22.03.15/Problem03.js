function solve () {
	function replaceATag() {
		var str = '<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li></ul>';
		var url = str.replace(/<a/, "[URL ");
		url = url.replace(/href=http:\/\/softuni.bg>/, "href=http://softuni.bg] ");
		url = url.replace(/<\/a>/, "[/URL]");
		return url;
	}
	return replaceATag();
}
console.log(solve());