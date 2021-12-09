export default (title: string, msg: string, id?: string) => {
	return `<!DOCTYPE html>
<HTML>
	<HEAD>
		<META CHARSET="UTF-8" />
		<META NAME="viewport" CONTENT="width=device-width, initial-scale=1.0" />
		<TITLE>${title}</TITLE>
	</HEAD>
	<BODY>
		<H1>${title}</H1>
		<HR />
		<P>${msg}</P>
		<I>${typeof id === 'string' ? 'Correlation ID: <code>' + id + '</code>' : 'No correlation ID available.'}</I>
<!-- 
A detailed error stack trace is not available due to the current website configuration.
-->
	</BODY>
</HTML>`;
}